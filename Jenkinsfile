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
                     sh
                }
            }
        }

        // stage('Test') {
        //     steps {
        //         script {
        //             try {
        //                 // Run tests
        //                 sh '''
        //                     npm test
        //                 '''
        //                 echo 'Tests passed. Deploying...'

        //             } catch (Exception e) {
        //                 echo 'Tests failed. Check the test results for more details.'
        //             }
        //         }
        //     }
        // }
    }
}
