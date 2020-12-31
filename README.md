
# git add .
  ```bash
  git add .
  ```
  명령어는 작성자가 생성, 삭제, 수정 한 모든 파일들을 commit 전에 스테이징 하는데 사용된다.
  git status 로 작성자로 인해 생긴 변화를 붉은색 글씨로 확인할 수 있고 git add . 명령어에서 . 점 은 모든 git add 를 모든 파일을 선택할 수 있게 한다.

# git commit -m "message"
  ```bash
  git commit -m "message"
  ```
  commit 은 push로 repository에 올리기전 세이브 포인트를 지정하는 느낌으로 git add . 로 스테이징된 부분들에 대한 변화 내용을 -m "messsage" 부분에서 message 부분에 입력함으로 언제든 원하던 포인트로 돌아가기 쉽게 한다.


# git checkout branchname
  ```bash
  git checkout branchname
  ```
  명령어는 git branch branchname 으로 생성한 새로운 브랜치로 이동하기 위해서 쓰는 명령어이다.