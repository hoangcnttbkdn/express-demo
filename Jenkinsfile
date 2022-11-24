pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "hoangsndxqn/express-demo"
    }
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
            // agent { node {label 'master'}}
            environment {
                DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
            }
            
            steps {
                script {
                    echo DOCKER_TAG
                }
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:lts"
                sh "docker image ls | grep ${DOCKER_IMAGE}"
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    sh "docker push ${DOCKER_IMAGE}:lts"
                }
                sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
                sh "docker image rm ${DOCKER_IMAGE}:lts"
            }
        }
        stage('SSH server and deploy') {
            steps{
                sh 'echo deploy'
                // sh "ssh -i /var/jenkins_home/.ssh/id_svdev root@128.199.246.141 './deploy.sh'"
            }
            
        }
    }
    post {
        always {
            echo "always"
            // sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
            // sh "docker image rm ${DOCKER_IMAGE}:latest"
        }
        success {
            echo "SUCCESSFUL"
        }
        failure {
            echo "FAILED"
        }
  }
}
