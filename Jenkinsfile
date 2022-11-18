pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'dev', credentialsId: 'git-hub', url: 'https://github.com/hoangcnttbkdn/express-demo.git'
            }
        }
        stage('unit test') {
            steps {
                sh 'echo runtest'
            }
        }
        stage('Docker build and push') {
            steps {
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t hoangsndxqn/express-demo:v1 .'
                    sh 'docker push hoangsndxqn/express-demo:v1'
                    sh 'docker image rm hoangsndxqn/express-demo:v1'
                    // sh 'docker rmi $(docker images -f "dangling=true" -q)'
                }   
            }
        }
        stage('SSH server and deploy') {
            steps{
                // sshagent(['ssh-key-totserver']) {
                //     sh 'ssh -o StricHostKeyChecking=no -l root 103.197.184.169 -p 4433 touch a.txt'
                // }
                // withCredentials([sshUserPrivateKey(credentialsId: 'ssh-key-totserver', keyFileVariable: 'keyfile')]) {
                //     sh "ssh root@103.197.184.169 -p 4433 'touch a.txt'"
                // }
                // sh "ssh -i /var/jenkins_home/.ssh/id_rsa root@103.197.184.169 -p 4433 './deploy.sh'"
                sh 'echo deploy'
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