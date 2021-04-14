
SELECT * 
  FROM tb_group_code;
  
SELECT * 
  FROM tb_detail_code;
  
SELECT dc.*
  FROM tb_group_code gc
    , tb_detail_code dc
where gc.group_code= dc.group_code;

select gc.group_code grouptable, dc.group_code detailtable
  from tb_group_code gc 
    left outer join tb_detail_code dc on gc.group_code= dc.group_code;
 
select gc.group_code grouptable, dc.group_code detailtable
  from tb_group_code gc 
    right outer join tb_detail_code dc on gc.group_code = dc.group_code;
    
select * from tm_mnu_mst aa 
  left outer join tn_usr_mnu_atrt bb on aa.MNU_ID = bb.MNU_ID
    where bb.user_type='C';
    
select ll.MNU_ID , ll.MNU_NM , ui.user_type
  from tb_userinfo ui 
    left outer join (
                       select mm.MNU_ID , mm.MNU_NM, ma.user_type
                         from tm_mnu_mst mm  
                          inner join tn_usr_mnu_atrt ma on ma.MNU_ID = mm.MNU_ID 
                   ) ll on ll.user_type = ui.user_Type 
 where ui.loginId = 'dbserver';
 
 select * from tm_mnu_mst;
 select * from tb_userinfo;
 select * from tn_usr_mnu_atrt;
 
 select mm.MNU_NM , mm.MNU_ID
  from tn_usr_mnu_atrt ma 
    inner join tm_mnu_mst mm on ma.MNU_ID = mm.MNU_ID and ma.user_type='C';
   
 select *
    from tb_userinfo ui
      left outer join (
       select ll.MNU_NM , ll.MNU_ID
          from tn_usr_mnu_atrt ma 
            inner join tm_mnu_mst mm on ma.MNU_ID = mm.MNU_ID 
       ) ll on ll.user_type = ui.user_Type
 where ui.loginId = 'deserver';
