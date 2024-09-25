pipeline {
    agent any
    environment {
        AWS_ACCOUNT_ID = 'your-aws-account-id'
        AWS_REGION = 'your-aws-region'
        ECR_REPO_NAME = 'your-ecr-repo-name'
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        KUBECONFIG = '/path/to/your/kubeconfig'  // 필요 시 설정
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME}:${IMAGE_TAG}")
                }
            }
        }
        stage('Login to ECR') {
            steps {
                script {
                    sh 'aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com'
                }
            }
        }
        stage('Push Docker Image to ECR') {
            steps {
                script {
                    docker.image("${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME}:${IMAGE_TAG}").push()
                }
            }
        }
        stage('Deploy to EKS') {
            steps {
                script {
                    sh 'helm upgrade --install my-release ./helm-chart --set image.repository=${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME},image.tag=${IMAGE_TAG}'
                }
            }
        }
    }
}