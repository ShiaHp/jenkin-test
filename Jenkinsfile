pipeline {
    agent any

    stages {
        stage('verify tooling') {
            steps {
                script {
                    sh '''
                        sudo docker info
                        sudo docker version
                        sudo docker compose version
                        sudo curl --version
                        sudo jq --version
                    '''
                }
            }
        }
    }
}
