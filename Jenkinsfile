pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout code'
                // Add actual checkout code if needed, e.g., git checkout
                // git 'https://github.com/your-repo.git'
            }
        }

        stage('Install') {
            steps {
                script {
                    // Install dependencies using npm
                    bat 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    try {
                        // Run tests using npm
                        bat 'npm test'
                    } catch (Exception e) {
                        echo 'Tests failed. Check the test results for more details.'
                    }
                }
            }
        }
    }
}
