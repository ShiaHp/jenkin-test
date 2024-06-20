pipeline {
    agent any

    stages {
        stage('verify tooling') {
            steps {
                script {
                    sh '''
                        sudo -u jenkins docker info
                        sudo -u jenkins docker version
                        sudo -u jenkins docker compose version
                        sudo -u jenkins curl --version
                        sudo -u jenkins jq --version
                    '''
                }
            }
        }
    }
}
