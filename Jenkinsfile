pipeline {
    agent any

    stages {
        stage('verify environment') {
            steps {
                sh 'printenv'
            }
        }
        stage('verify tooling') {
            steps {
                sh '''
                    docker info
                    docker version
                    docker compose version
                    curl --version
                    jq --version
                '''
            }
        }
    }
}
