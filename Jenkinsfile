pipeline {
    agent any
    stages {
        stage('checkout') {
            steps {
                echo 'Checkout code'
            }
        }

        stage('Install') {
            steps {
                script {
                    // Install dependencies
                     npm install
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    try {
                        // Run the tests
                        npm test
                    } catch (Exception e) {
                        echo 'Tests failed. Check the test results for more details.'
                    }
                }
            }
        }
    }
}
