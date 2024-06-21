// pipeline {
//     agent any
//     stages {
//         stage('Checkout') {
//             steps {
//                 echo 'Checkout code'
//                 // Add actual checkout code if needed, e.g., git checkout
//                 // git 'https://github.com/your-repo.git'
//             }
//         }

//         stage('Install') {
//             steps {
//                 script {
//                     // Install dependencies using npm
//                     bat 'npm install'
//                 }
//             }
//         }

//         stage('Test') {
//             steps {
//                 script {
//                     try {
//                         // Run tests using npm
//                         bat 'npm test'
//                     } catch (Exception e) {
//                         echo 'Tests failed. Check the test results for more details.'
//                     }
//                 }
//             }
//         }
//     }
// }
pipeline {
  agent any
  stages {
    stage("verify tooling") {
      steps {
        bat '''
          docker version
          docker info
          docker compose version
          curl --version
          jq --version
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
        bat 'curl http://localhost:3000/param?query=demo | jq'
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