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
                    sh 'npm install'
                }
            }
        }



                stage('Test') {
            steps {
                script {
                    try {
                        // Run the tests
                        sh 'npm test'
                    } catch (Exception e) {
                        echo 'Tests failed. Check the test results for more details.'
                    }
                }
            }
        }
    }

        post {
        always {
            // Notify if the build failed

        }
    }

}