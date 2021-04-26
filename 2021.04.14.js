   JDK          : 1.8
  Spring      : 4.1.2
  DBMS      : Mysql 5.5
  jquery     :  1.11.2
  
  jstl 
  mybatis3
  VueJS3
  Html5
  Ajax
 <!-- 설정 값 -->
 ---------------------------------------
유저 타입이 C 인 메뉴명, 메뉴 ID
select mm.MNU_ID , mm.MNU_NM
  from tn_usr_mnu_atrt ma 
       left outer join tm_mnu_mst mm on ma.MNU_ID = mm.MNU_ID 
 where ma.user_type  = 'C';  
    
<!--dbserver 사용자가 사용할수 있는 메뉴명-->
select ll.MNU_ID , ll.MNU_NM
  from tb_userinfo ui 
       left outer join (
                           select mm.MNU_ID , mm.MNU_NM, ma.user_type
                             from tm_mnu_mst mm  
                           inner join tn_usr_mnu_atrt ma on ma.MNU_ID = mm.MNU_ID 
                       ) ll on ll.user_type = ui.user_Type 
 where ui.loginId = 'dbserver'
 
 select mm.MNU_ID , mm.MNU_NM, ma.user_type
  from tn_usr_mnu_atrt ma 
       inner join tm_mnu_mst mm on ma.MNU_ID = mm.MNU_ID 
                               and ma.user_type = (
                                                     select user_type
                                                       from tb_userinfo
                                                      where loginId = 'dbserver'
                                                  );



<insert id="insertMnu">
      /* kr.kosmo.jobkorea.system.dao.MnuMgrDao.insertMnu */
       <selectKey resultType="string" keyProperty="menuID" order="BEFORE">
            SELECT CONCAT('M', LPAD(IFNULL(CAST(SUBSTR(MAX(mnu_id),2,4) AS UNSIGNED),0)+1, 4, '0'))  FROM tm_mnu_mst
        </selectKey>   
      INSERT INTO tm_mnu_mst
      (
            mnu_id
         , hir_mnu_id
         , mnu_nm
         , mnu_url
         , mnu_dvs_cod
         , grp_num
         , odr
         , lvl
         <if test ="mnu_ico_cod != null and mnu_ico_cod != ''">
         , mnu_ico_cod
         </if>
         , use_poa
         , fst_enlm_dtt
         , fst_rgst_sst_id
         , fnl_mdfd_dtt
         , fnl_mdfr_sst_id
         , mem_author
      )
      
      VALUES
      (
            #{menuID}
         <choose>
            <when test ="hir_mnu_id != null and hir_mnu_id != ''">
               , #{hir_mnu_id}
            </when>
            <otherwise>
               , #{menuID}
            </otherwise>
         </choose>
         , #{mnu_nm}
         , #{mnu_url}
         , #{mnu_dvs_cod}
         <choose>
            <when test ="grp_num != null and grp_num != ''">
               , #{grp_num}
            </when>
            <otherwise>
               , (SELECT MAX(A.GRP_NUM) + 1 FROM tm_mnu_mst A )
            </otherwise>
         </choose>
         , #{odr}
         , #{lvl}
         <if test ="mnu_ico_cod != null and mnu_ico_cod != ''">
         , #{mnu_ico_cod}
         </if>
         , #{use_poa}
         , NOW()
         , #{fst_rgst_sst_id}
         , NOW()
         , #{fnl_mdfr_sst_id}
         , #{mem_author}
      )      
   </insert>
