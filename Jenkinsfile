pipeline {
  agent any
  stages {
    stage("verify tooling") {
      steps {

          fastfetch
          docker version
          docker info
          docker compose version

      }
    }
    stage('Prune Docker data') {
      steps {
      docker system prune -a --volumes -f
      }
    }
    stage('Start container') {
      steps {
       docker compose up -d --no-color --wait
       docker compose ps
      }
    }
    stage('Run tests against the container') {
      steps {
        curl "http://localhost:3000/param?query=demo "
      }
    }
  }
  post {
    always {
      docker compose down --remove-orphans -v
      docker compose ps
    }
  }
}


