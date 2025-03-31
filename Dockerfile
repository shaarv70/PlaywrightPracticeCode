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
RUN chmod +x runner.sh

# Set entrypoint
ENTRYPOINT ["./runner.sh"]
