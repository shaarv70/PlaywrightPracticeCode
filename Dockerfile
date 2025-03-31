# Use Playwright's base image
FROM mcr.microsoft.com/playwright:v1.50.1

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install
ADD runner.sh runner.sh

# Copy the test files
COPY . .

# Set permissions for the script
RUN dos2unix runner.sh
RUN chmod +x runner.sh


# Set entrypoint
ENTRYPOINT ["/bin/bash","/app/runner.sh"]
