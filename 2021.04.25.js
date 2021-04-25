1. root 패스워드 설정
mysql>update user set password=password(‘new-password’) where user=’root’;
2. database 생성
mysql> create database DB이름; 
3. user 생성 및 권한 추가
모든 클라이언트에서 접근 허용 grant all privileges on db이름.* to 계정이름@'%' identified by ＇암호’;
로컬에서만 접근 허용 grant all privileges on db이름.* to 계정이름@'localhost' identified by ＇암호’;
DBMS에게 적용 flush privileges;
db이름 뒤의 * 는 모든 권한을 의미한다.
@’%’는 어떤 클라이언트에서든 접근 가능하다는 의미이고, @’localhost’는 로컬에서만 접근 가능하다는 의미이다.
