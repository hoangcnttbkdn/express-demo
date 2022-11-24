pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                script {
                    def commit = checkout scm
                    env.BRANCH_NAME = commit.GIT_BRANCH.replace('origin/', '')
                    echo env.BRANCH_NAME
                }
                // sh 'echo $env.BRANCH_NAME'
                sh 'echo env.BRANCH_NAME'
                git branch: env.BRANCH_NAME, credentialsId: 'gittoken', url: 'https://github.com/hoangcnttbkdn/express-demo.git'
            }
        }
        // stage('unit test') {
        //     steps {
        //         sh 'echo runtest'
        //     }
        // }
        stage('Docker build and push') {
            steps {
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t hoangsndxqn/express-demo:v1 .'
                    sh 'docker push hoangsndxqn/express-demo:v1'
                    // sh 'docker image rm hoangsndxqn/express-demo:v1'
                }   
            }
        }
        stage('SSH server and deploy') {
            steps{
                sh "ssh -i /var/jenkins_home/.ssh/id_svdev root@128.199.246.141 './deploy.sh'"
                // sh 'echo deploy'
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
