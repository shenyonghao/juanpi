import React from 'react';
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'

class Tabbar extends React.Component{
  
  state={
    // currentIndex:true
  }
    render(){
      return <div>

        <div className={css.QllnW}>
          <ul className={css.jAaTju}>
              <li className={css.jDwBTQ}>
                <NavLink to="/home" activeClassName={css.myactive}>
                <span className={css.gPEVay}><span className="iconfont" >&#xe65e;</span></span>首页
                </NavLink>
              </li>
              <li className={css.jDwBTQ}>
                <NavLink to="/temai"  activeClassName={css.myactive}>
                <span className={css.gPEVay}><span className="iconfont">&#xe67c;</span></span>分类
                </NavLink>
              </li>
              <li className={css.jDwBTQ}>
                <NavLink to="/cart"  activeClassName={css.myactive}>
                <span className={css.gPEVay}><span className="iconfont">&#xe655;</span></span>购物车
                 </NavLink>
              </li>
              <li className={css.jDwBTQ}>
                <NavLink to="/center" activeClassName={css.myactive}>
                <span className={css.gPEVay}><span className="iconfont">&#xe61d;</span></span>我的卷皮
                  </NavLink>
              </li>
          </ul>
      </div>

    </div>
    }

}

export default Tabbar;
