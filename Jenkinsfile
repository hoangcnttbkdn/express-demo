pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git credentialsId: 'githubtoken1', url: 'https://github.com/hoangcnttbkdn/express-demo.git'
            }
        }
        stage('Docker build and push') {
            steps {
                withDockerRegistry(credentialsId: 'dockerhub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t hoangsndxqn/express-demo:v1 .'
                    sh 'docker push hoangsndxqn/express-demo:v1'
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