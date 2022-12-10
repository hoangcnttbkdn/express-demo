pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "hoangsndxqn/express-demo"
    }
    stages {
        stage('Prepare workspace') {
            steps {
                echo 'Prepare workspace'
                // Clean workspace
                step([$class: 'WsCleanup'])
                // Checkout git
                script {
                    def commit = checkout scm
                    env.BRANCH_NAME = commit.GIT_BRANCH.replace('origin/', '')
                }
            }
        }

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
                    echo BRANCH_NAME
                    echo DOCKER_TAG
                }
                // sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
                // sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:lts"
                // sh "docker image ls | grep ${DOCKER_IMAGE}"
                // withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                //     sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                //     sh "docker push ${DOCKER_IMAGE}:lts"
                // }
                // sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
                // sh "docker image rm ${DOCKER_IMAGE}:lts"
                sh 'echo build ne'
            }
        }
        stage('Deploy DEV') {
            when {
                expression {
                    return (env.BRANCH_NAME == 'origin/dev' | env.BRANCH_NAME == 'dev')
                }
            }
            steps{
                sh 'echo DEPLOY_DEV'
                // sh "ssh -i /var/jenkins_home/.ssh/id_svdev root@128.199.246.141 './deploy.sh'"
            }
        }
        stage('Deploy MASTER') {
            when {
                expression {
                    return (env.BRANCH_NAME == 'origin/master' | env.BRANCH_NAME == 'master')
                }
            }
            steps{
                sh 'echo DEPLOY_DEV'
                // sh "ssh -i /var/jenkins_home/.ssh/id_svdev root@128.199.246.141 './deploy.sh'"
            }
            
        }
        stage('Deploy RELEASE') {
            when {
                expression {
                    return (env.BRANCH_NAME == "refs/tags/${GIT_BRANCH.tokenize('/').pop()}")
                }
            }
            steps{
                sh 'echo DEPLOY_DEV'
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
