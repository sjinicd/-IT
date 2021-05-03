1. common_module 복제
2. Maven 업데이트 (force 체크박스)
3. 우클릭>team>disconnect
4. webapp > WEB-INF > applicationContext.xml DB 정보 수정
5. clean
6. 서버 생성 및 설정 수정 (80 포트, root 주소 /)
7. Window > Show view > others > SVN repositories
8. 다른 프로젝트 repositories 전부 삭제
[VisualSVN Server 컴퓨터에서 하는 일]
* VisualSVN Server 프로그램을 사용해서 유저id/비밀번호 생성 및 각 계정 그룹(sscm)지정 해주기
* svn sscm팀 repository에 그룹권한 부여 (sscm 그룹에 속한 사람들은 sscm 레포지토리에 접근 가능하도록)
9. svn repositories에 new > repository location 들어가서 SVN server url 주소를 입력
--    https://DESKTOP-496M3PS/svn/serp/
--    https://DESKTOP-496M3PS/svn/sscm/
+ 본인의 아이디와 패스워드 입력 ( 밑에 체크 박스는 로그인 저장 )
10. 해당 repository에 연결할 project를 우클릭 후에 Team > share projects에 들어가서 SVN repo 선택 (내 프로젝트를 SVN repo에 등록하는 과정)
11. [SVN repo를 내려받는 과정] 연결한 svn에서 checkout을 하면 내려받기 시작 (repo 자체를 checkout하면 안됨!!!! 안에 있는 sscm 폴더를 checkout 해야함)
* 팀원들 아이디/비밀번호 만들기
* 아이디 생성후에 지금 올린 repo 내려받기
