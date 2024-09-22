# EKS-ALB-ECR-DOCKER-HELM

## 프로젝트 목적
1. 2개의 간단한 React Application를 Nginx와 함께 Docker Image로 각각 빌드
2. 2개의 Docker 이미지를 Elastic Container Registry(ECR)에 푸시
3. Amazon EKS 클러스터 생성
4. EKS에 해당 이미지를 포함한 yaml파일을 작성하여 배포
5. ALB 생성을 위한 IAM에 권한 추가
6. Helm을 이용해 Application Load Balancer(ALB)를 생성하고 공개된 진입점 설정
7. 각 서비스에 고유 URL 설정
8. 각 서비스가 제대로 연결되는지 검증
