!/bin/bash

# Set the default test to run if no parameter is passed
TEST_SCRIPT=${1:-"test"}  # Default to "test" if no argument is given

echo "Running Playwright tests using npm script: $TEST_SCRIPT"

# Run the appropriate npm script (e.g., test:RegressionChrome)
npm run $TEST_SCRIPT
