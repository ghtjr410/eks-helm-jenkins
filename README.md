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


## 개발 순서
1. admin-front, user-front 2페이지씩 생성
2. 각 React App을 멀티스테이징 방식으로 Dockerfile 작성
3. docker build -t <이미지_이름> . 명령어로 Docker 이미지를 빌드
4. 해당 Docker 이미지를 ECR에 푸시

5. EKS 클러스터 생성
6. 배포할 애플리케이션 yaml 파일 작성
7. eksctl로 애플리케이션 배포

8. Helm 설치 (Chocolatey 이용)
9. 사용자 대신 AWS API를 호출할 수 있는 AWS Load Balancer Controller의 iam_policy.json 다운로드
10. 다운로드한 정책(iam_policy.json)을 사용하여 IAM 정책 생성
11. Amazon EKS 클러스터 정보 수집 후 변수에 저장하기
12. EKS 클러스터에 IAM OIDC Provider 연결
13. ekctl을 사용하여, eks cluster에 Service Account IAM 역할 생성
14. Service Account 생성확인
15. eks-charts를 Helm Repository에 추가, 확인, 정보 업데이트
16. Helm을 이용하여 AWS Load Balancer Controller 설치, 확인
17. AWS Load Balancer를 이용하여 NLB형식의 공식문서 Sample 애플리케이션 배포하기
18. AWS Load Balancer를 이용하여 ALB형식의 공식문서 Sample 애플리케이션 배포하기
===============================================
19. 애플리케이션 경로설정 방법
    1. 서브도메인으로 경로설정 -> 이게 가장 합리적일 수 있음
    2. urn으로 경로설정 -> 단일 애플리케이션도 실패
    3. ALB를 4개 생성 -> 돈 4배
    4. NLB를 4개 생성 -> 돈 4배




19. user-front, admin-front 경로를 다르게 설정하여 배포하기
20. user-front, admin-front 요청을 처리하는 springboot app 배포 후 연결
21. user-front, admin-front, springboot app 의 sso를 담당하는 keycloak 배포 후 연결
22. springboot app을 모니터링하는 grafana를 배포후 keycloak와 통합 연결

