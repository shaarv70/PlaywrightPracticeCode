# Use Playwright's base image
FROM mcr.microsoft.com/playwright:v1.50.1

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install
RUN apt-get update && apt-get install -y dos2unix
ADD runner.sh runner.sh

# Copy the test files
COPY . .


ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8



# Set permissions for the script
RUN dos2unix runner.sh
RUN chmod +x runner.sh


# Set entrypoint
ENTRYPOINT ["/bin/bash","/app/runner.sh"]
