## 💻 프로젝트 실행 방법

```
npm run dev
```


## 📚 설치된 라이브러리 및 패키지 

- React Router Dom
- Eslint (Airbnb)
- prettier
- reset.css
- Path alias


## 📂 폴더 구조

```bash
src/
├── app/               # 앱의 진입점 (예: main.jsx)
├── pages/             # 페이지 컴포넌트 정의
├── components/        # 컴포넌트 정의
│   └── common/        # 공통 컴포넌트 정의
└── shared/            # 전역 리소스 및 설정
    ├── api/           # API 정의
    ├── route/         # 라우팅 설정
    └── styles/        # 전역 스타일 및 CSS 설정
```


## 🔍경로 설정

- @ 
- @/app 
- @/components
- @/pages
- @/shared

```javascript
import Home from '@/pages/home/Home.jsx'
```


## 깃 커밋 컨벤션
```git
[1] Feat : 기능 추가

ex) "Feat : 버튼 공용컴포넌트 추가"
    "Feat : 로그인 페이지 추가"

[2] Style : 스타일링 관련 코드 추가 혹은 변경

ex) "Style : 버튼 컴포넌트 마진값 변경"
    "Style : 카드 컴포넌트 색상 변경"

[3] Fix : 코드 수정

ex) "Fix : 버튼 핸들러 오류 수정"
    "Fix : 헤더 컴포넌트 마진값 변경 및 간격 통일"
    
    
[4] Chore : 그 외 모든 수정사항 => "Chore : 리드미 내용 수정"
```

## 자주 쓰이는 깃 명령어 

```b

git remote -v : 연결된 원격 리포지토리 확인

git brnach : 로컬 리포지토리의 브랜치 목록 확인
git checkout -b 브랜치명 : 로컬 리포지토리에서 브랜치 생성 및 이동

git status : 현재 작업 상황 확인

git push -u origin 브랜치명 : 최초 푸시할때 사용하면, 추후에 git push 만으로 푸시 가능

git pull : 원격 리포지토리로와 로컬 리포지토리의 내용을 동기화

```

