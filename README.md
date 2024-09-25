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
19. 애플리케이션 경로설정 방법 찾아보기
    1. 서브도메인으로 경로설정 
        ㄴ 서브도메인으로 여러 개의 애플리케이션을 분리하는 것이 가장 합리적이고 안정적인 방법일 가능성이 높음
        ㄴ 서브도메인으로 여러 개의 애플리케이션을 분리하는 것이 가장 합리적이고 안정적인 방법일 가능성이 높음
    2. URL으로 경로 설정
        ㄴ 두 개의 React App을 사용하는 경우, URL을 통한 경로 분리는 React 설정, Nginx 설정, yaml 설정 등에서 문제가 발생할 수 있어 안정성이 떨어질 가능성이 높음
    3. ALB를 4개 생성 -> 비용이 4배 증가
    4. NLB를 4개 생성 -> 비용이 4배 증가
20. uri, url, urn, 서브도메인, 메인도메인의 이해와 차이점
21. DNS 계층구조 이해 ICANN(루트네임서버), Registry(TLD 네임서버), Registrar(대행자), ISP가 제공하는 DNS서버, DNS 캐싱
22. NLB와 ALB의 구조적 차이점 이해 OSI계층, 외부 노출방식, 경로설정방식, 왜 NLB가 가격이 더 나가는지
23. Route53으로 도메인을 구입하기
24. Route53에서 생성한 도메인을 digwebinterface.com에서 해당 도메인은 AWS Route 53에서 관리되고 있으며, Route 53의 네임 서버가 도메인의 DNS 요청을 처리하고 있음을 확인
25. ingressController 배포시 서비스의 host를 서브도메인을 분리하여 blog.ghtjr.com, admin.ghtjr.com 작성
26. 서브도메인을 입력하고 Route53에서 레코드를 2개생성
27. HTTPS 적용 방법 찾기
28. AWS Certificate Manager(ACM) SSL 인증서 발급
29. CNAME 레코드 생성 ACM에서 제공해준 이름과 값을 입력
30. Ingress Controller YAML에 HTTPS와 ACM 적용, HTTP요청 HTTPS로 리디렉션 추가
31. 2개의 React앱을 서브도메인으로 분리후 HTTPS 접속 성공
32. 2개의 React앱을 서브도메인으로 분리후 HTTP 접속시 HTTPS 리디렉션 성공 (권장사항)

33. Helm을 사용하면 생기는 장점과 Helm의 본질 파악
34. Helm Chart 생성 후 불필요한 예제 파일 삭제
35. 기존 YAML파일 templates 디렉토리로 복사
36. Helm Chart 구성 요소 이해
37. Helm Chart YAML 파일 작성 문법 파악
38. 문제 발생: 하나의 Helm Chart로 여러 애플리케이션을 관리하면서 values.yaml의 복잡도 증가 – 해결 방안 모색
39. Helm Chart 모범 사례: 애플리케이션별 차트 분리 및 공통 차트의 전역 값 사용
40. Helm Chart를 사용해 단일 애플리케이션을 EKS에 배포
41. Helm Chart로 여러 애플리케이션을 EKS에 배포한 후 연결 상태 확인
42. Common의 _helper.tpl로 전역변수 설정
43. 전역변수 사용을 위해 Helm Chart 의존성 빌드하는 작업 수행
44. 전역변수 사용할 Chart에 Chart.yaml과 해당하는 변수 경로설정 include "common.namespace" .
45. Helm Chart로 변경사항 적용해서 application 업데이트하기, 연결 상태 확인
===============================================


