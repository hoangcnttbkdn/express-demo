pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'master', credentialsId: 'gittoken', url: 'https://github.com/hoangcnttbkdn/express-demo.git'
            }
        }
        stage('Docker build and push') {
            steps {
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t hoangsndxqn/express-demo:v1 .'
                    sh 'docker push hoangsndxqn/express-demo:v1'
                    sh 'docker image rm hoangsndxqn/express-demo:v1'
                }   
            }
        }
    }
    post {
    success {
      echo "SUCCESSFUL"
    }
    failure {
      echo "FAILED"
    }
  }
}
