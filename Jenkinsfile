pipeline {
  agent any
  options {
  buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '3', daysToKeepStr: '', numToKeepStr: '2')
}

  stages {
    stage("verify tooling") {
      steps {
        bat '''
          echo "Checking tooling versions"
          docker version
          docker info
          docker compose version
          curl --version
        '''
      }
    }
    stage('Prune Docker data') {
      steps {
        bat 'docker system prune -a --volumes -f'
      }
    }
    stage('Start container') {
      steps {
        bat 'docker compose up -d --no-color --wait'
        bat 'docker compose ps'
      }
    }
    stage('Run tests against the container') {
      steps {
        bat 'curl http://localhost:3000/param?query=demo'
      }
    }
  }
  post {
    always {
      bat 'docker compose down --remove-orphans -v'
      bat 'docker compose ps'
    }
  }
}


