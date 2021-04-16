select lec_id, tutor_id ,lec_name, CONCAT(DATE_FORMAT(c_st, '%Y.%m.%d'),'~', DATE_FORMAT(c_end, '%Y.%m.%d')) as cdate
  from tb_lec_info
  
select li.lec_id
     , li.tutor_id 
     , ui.name
     , li.lec_name
     , li.tutor_name
     , CONCAT(DATE_FORMAT(li.c_st, '%Y.%m.%d'),'~', DATE_FORMAT(li.c_end, '%Y.%m.%d')) as cdate
  from tb_lec_info li
       inner join tb_userinfo ui on ui.loginID = li.tutor_id and ui.user_type = 'B'

select li.lec_id
     , li.tutor_id 
     , ui.name
     , li.lec_name
     , li.tutor_name
     , li.pre_pnum
     , (select count(*) from tb_lecstd_info ls where ls.lec_id = li.lec_id ) as cnt
     , CONCAT(DATE_FORMAT(li.c_st, '%Y.%m.%d'),'~', DATE_FORMAT(li.c_end, '%Y.%m.%d')) as cdate
  from tb_lec_info li
       inner join tb_userinfo ui on ui.loginID = li.tutor_id and ui.user_type = 'B'
 
select ui.name, ui.loginID, ui.tel, ui.mail, ifnull(em.wp_state,'미취업') as wp_state
  from tb_lecstd_info li
       inner join tb_userinfo ui on ui.loginID = li.std_id
       left outer join tb_employ em on li.std_id = em.std_id
 where li.lec_id = '1007';

-- 학생명   연락처   입사일   퇴사일   업체명   재직여부
select ui.name
     , ui.tel
     , em.employ_day
     , em.resign_day  
     , em.comp_name
     , ifnull(em.resign_day,'재직중') 
     , case em.resign_day WHEN '' then '재직중'
                          ELSE '퇴직'
       END as emp_type                        
  from tb_employ em
       inner join tb_userinfo ui on ui.loginID = em.std_id
 
-- 학번   학생명   연락처   강의명   가입일자    
select ui.std_num
      ,ui.name
      ,ui.tel
      ,ll.lec_name
      ,ui.join_date
  from tb_userinfo ui
       left outer join (
                          select li.lec_id
                                ,li.lec_name
                                ,le.std_id
                            from tb_lecstd_info le
                                 inner join tb_lec_info li on li.lec_id = le.lec_id
                       ) ll on ui.loginID = ll.std_id
 where ui.user_type = 'A'
   and ui.loginID not in (
                              select em.std_id
                                from tb_employ em
                         )

-- 강의실 명   크기   자리수   비고   
select lm.lecrm_name
      ,lm.lecrm_size
      ,lm.lecrm_snum
      ,lm.lecrm_note
      ,lm.lecrm_id
  from tb_lecrm lm;
  
  
  
-- 번호   장비명   갯수   비고  
select eq.equ_id
      ,eq.equ_name
      ,eq.equ_num
      ,eq.equ_note
  from tb_equ eq
 where eq.lecrm_id = '1';
