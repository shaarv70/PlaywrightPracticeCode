pipeline {
    agent any

    environment {
        COMPOSE_HTTP_TIMEOUT = 300
        DOCKER_CLI_TIMEOUT = 300  // Optional but recommended
        EMAIL_RECIPIENTS = 'sharmaarvindsharma935@gmail.com'
    }

    parameters {
        choice(name: 'SERVICE', choices: ['RegressionChrome', 'SmokeChrome', 'RegressionFirefox', 'SmokeFirefox'], description: 'Select the service to run')
    }

    stages {

        stage('Build Image') {
            steps {
                bat "docker build -t=shaarv70/playwright:latest ."
            }
        }

        stage('Push Image') {
            environment {
                DOCKER_HUB = credentials('dockerhub-creds')
            }
            steps {
                bat 'docker login -u %DOCKER_HUB_USR% -p %DOCKER_HUB_PSW%'
                bat "docker tag shaarv70/playwright:latest shaarv70/playwright:${env.BUILD_NUMBER}"
                bat "docker push shaarv70/playwright:${env.BUILD_NUMBER}"
            }
        }

        stage('Pre-pull Docker Image') {
            steps {
                bat "docker pull shaarv70/playwright:${env.BUILD_NUMBER}"
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    def service = params.SERVICE
                    bat """
                        docker-compose up --scale ${service}=1
                    """
                }

                // Check for Playwright test failures using .last-run.json
                script {
                    def lastRunFile = 'test-results/.last-run.json'
                    if (fileExists(lastRunFile)) {
                        def lastRunJson = readJSON file: lastRunFile
                        if (lastRunJson.status == 'failed' || lastRunJson.failedTests?.size() > 0) {
                            error('Failed tests found in Playwright .last-run.json')
                        }
                    } else {
                        echo "Warning: .last-run.json file not found. Assuming no failed tests."
                    }
                }
            }
        }
    }

    post {
        always {
            // Archive both index.html and report.html as artifacts
            archiveArtifacts artifacts: "playwright-report/index.html, playwright-report/report.html", followSymlinks: false

            // Cleanup
            bat "docker-compose down --rmi all --volumes --remove-orphans"
            bat "docker system prune -f"
            bat "docker image rm shaarv70/playwright:${env.BUILD_NUMBER}"
            bat "docker logout"
        }
        success {
            emailext (
                to: "${EMAIL_RECIPIENTS}",
                subject: "Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' Succeeded",
                body: """
                    <p>Good news, the pipeline succeeded!</p>
                    <p>Job: ${env.JOB_NAME}</p>
                    <p>Build Number: ${env.BUILD_NUMBER}</p>
                    <p>Service: ${params.SERVICE}</p>
                    <p>Check the attached reports for details. Please download the reports, extract them, and open the HTML files in a web browser for the best viewing experience.</p>
                    <p>Check the details: ${env.BUILD_URL}</p>
                """,
                mimeType: 'text/html',
                attachmentsPattern: "playwright-report/index.html,playwright-report/report.html",
                replyTo: 'arvindsharma50480@gmail.com',
                from: 'arvindsharma50480@gmail.com'
            )
        }
        failure {
            emailext (
                to: "${EMAIL_RECIPIENTS}",
                subject: "Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' Failed",
                body: """
                    <p>Unfortunately, the pipeline failed.</p>
                    <p>Job: ${env.JOB_NAME}</p>
                    <p>Build Number: ${env.BUILD_NUMBER}</p>
                    <p>Service: ${params.SERVICE}</p>
                    <p>Check the attached reports for details. Please download the reports, extract them, and open the HTML files in a web browser for the best viewing experience.</p>
                    <p>Check the details: ${env.BUILD_URL}</p>
                """,
                mimeType: 'text/html',
                attachmentsPattern: "playwright-report/index.html, playwright-report/report.html",
                replyTo: 'arvindsharma50480@gmail.com',
                from: 'arvindsharma50480@gmail.com'
            )
        }
    }
}
