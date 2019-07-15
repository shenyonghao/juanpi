import React from 'react';
import css from './index.module.scss'
import {NavLink} from 'react-router-dom' 

class Center extends React.Component{
  render(){
    return <div>
        <div className={css.header}>
           <div className={css.geren}>
             <a className={css.fangxiang} href="/"><span className="iconfont">&#xe62a;</span></a>
             个人中心</div>
           <div className={css.dibu}>
             <NavLink to="/login" className={css.zhuce}>注册</NavLink><span className={css.gun}></span>
             <NavLink to="/register" className={css.denglu}>登录</NavLink>
           </div>
        </div>
        <div className={css.dingdany}>
             <span className={css.mydan}>我的订单</span>
             <span className={css.quanbudan}>全部订单</span>
        </div>
        <div className={css.QllnW}>
        <ul className={css.jAaTju}>
              <li className={css.jDwBTQ}>
                <span className={css.gPEVay}><span className="iconfont" >&#xe622;</span></span>待付款
              </li>
              <li className={css.jDwBTQ}>
                <span className={css.gPEVay}><span className="iconfont">&#xe61d;</span></span>待成团
              </li>
              <li className={css.jDwBTQ}>
                <span className={css.gPEVay}><span className="iconfont">&#xe655;</span></span>待收货
              </li>
              <li className={css.jDwBTQ}>
                <span className={css.gPEVay}><span className="iconfont">&#xe628;</span></span>退款/售后
              </li>
          </ul>

      </div>   
        <div className={css.main}>
             <p className={css.liebiao}>我的优惠券</p>
             <p className={css.liebiao}>我的收藏</p>
             <p className={css.liebiao}>我的拼团</p>
             <p className={css.liebiao}>我的免单券</p>
             <p className={css.liebiao}>借钱</p>
        </div>
        <div className={css.section}>
             <p className={css.kefu}>客服中心</p>
             <p className={css.kefu}>关于疲倦</p>
        </div>
        <div className={css.footer}>
         <a href="/home" className={css.hehel}>返回首页</a>
         <a href="/home" className={css.hehel}>客服端</a>
         <a href="/home" className={css.hehel}>电脑版</a>
        </div>

    </div>
  }
}
export default Center;
