1. 특정기간 구매 많이 한 회원 Top 5
select chain_cd, cust_cd, amt
  from (  
        select chain_cd, cust_cd, sum(amt) amt
          from tb_sell
         where bye_date between '20200101' and '20201231'
         group by chain_cd, cust_cd 
       ) ll
 order by amt
 limit 0,5


2. 특정기간 총매출액, 총발주금액, 손익
select order.order_amt, sell.amt, sell.(amt - order.order_amt) as betamt 
  from 
      (
        select sum(order_amt) as order_amt
         from tb_order
        where order_date between '20200101' and '20201231'       
      ) order
     ,(
       select sum(amt) as amt
         from tb_sell
        where bye_date between '20200101' and '20201231'
      ) sell 

**  지점별 손익
select order.chain_cd, order.order_amt, sell.amt, sell.(amt - order.order_amt) as betamt 
  from 
      (
        select chain_cd, sum(order_amt) as order_amt
         from tb_order
        where order_date between '20200101' and '20201231'       
        group by chain_cd
      ) order 
     ,(
       select schain_cd, um(amt) as amt
         from tb_sell
        where bye_date between '20200101' and '20201231'
        group by chain_cd
      ) sell 
where order.chain_cd = sell.chain_cd




3. 제일 많이 팔린 상품 Top 3
select  ll.goods_cd
      , gi.goods_name
      , ll.cnt
  from (
         select goods_cd, count(goods_cd) as cnt
           from tb_sell
       ) ll
       inner join tb_goodsinfo gi on gi.goods_cd = ll.goods_cd
 order by ll.cnt
 limit 0,3

5. 쿠폰 발행을 많이한 회원 Top 5
select ll.chain_cd
     , ch.chain_name
     , ll.cust_cd
     , ci.cust_name
     , ll.cust_cnt
 from 
      (
         select chain_cd, cust_cd, count(cust_cd) as cust_cnt
           from tb_coupon_his
          group by chain_cd, cust_cd
      ) ll
      inner join tb_chain ch on ch.chain_cd = ll.chain_cd
      inner join tb_custinfo ci on ci.cust_cd = ll.cust_cd
order by cust_cnt
limit 0,5
