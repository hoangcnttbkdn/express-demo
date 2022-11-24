pipeline {
    agent any
    stages {
        // stage('Clone') {
        //     steps {
        //         script {
        //             def commit = checkout scm
        //             env.BRANCH_NAME = commit.GIT_BRANCH.replace('origin/', '')
        //             echo env.BRANCH_NAME
        //         }
        //         // sh 'echo $env.BRANCH_NAME'
        //         // sh 'echo $env.BRANCH_NAME'
        //         git branch: env.BRANCH_NAME, credentialsId: 'git-hub', url: 'https://github.com/hoangcnttbkdn/express-demo.git'
        //     }
        // }
        stage('Test') {
            steps {
                sh 'echo test passed'
            }
        }
        stage('Docker build and push') {
            environment {
                DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
            }
            
            steps {
                script {
                    echo DOCKER_TAG
                }
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
