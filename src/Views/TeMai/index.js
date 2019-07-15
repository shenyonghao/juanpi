import React from 'react';
import css from './index.module.scss'
import {Route,Redirect,Switch,NavLink} from 'react-router-dom' 
import JingXuan from './JingXuan/index'
import MeiZhuang from './MeiZhuang/index'
import MuYing from './MuYing/index'
import ShuMa from './ShuMa/index'
import XieZi from './XieZi/index'
import YunDong from './YunDong/index'

import store from '../../Redux/store'
class TeMai extends React.Component{
    render(){
      return <div>
         <div className={css.dingbu}>
            <p className={css.temai}>
          
              品牌特卖</p>
            <div className={css.waike}>
            <ul className={css.gundong}>
               <NavLink to="/temai/jingx" activeClassName={css.myactive}>
               <li className={css.gundongli} ref="active">
                  <p className={css.gundongp}>精选</p>
                </li>
                </NavLink>
                <NavLink to="/temai/xiez" activeClassName={css.myactive}>
                <li className={css.gundongli}>
                  <p className={css.gundongp}>鞋包配饰</p>
                </li>
                </NavLink>
                <NavLink to="/temai/meiz" activeClassName={css.myactive}>
                <li className={css.gundongli}>
                  <p className={css.gundongp}>美妆</p>
                </li>
                </NavLink>
                <NavLink to="/temai/yund" activeClassName={css.myactive}>
                <li className={css.gundongli}>
                  <p className={css.gundongp}>运动</p>
                </li>
                </NavLink>
                <NavLink to="/temai/muy" activeClassName={css.myactive}>
                <li className={css.gundongli}>
                  <p className={css.gundongp}>母婴童装</p>
                </li>
                </NavLink>
                <NavLink to="/temai/shum" activeClassName={css.myactive}>
                <li className={css.gundongli}>
                  <p className={css.gundongp}>数码家具</p>
                </li>
                </NavLink>
            </ul>
            </div>
            <div className={css.footer} >
              <img className={css.tutu} src={'https://goods6.juancdn.com/bao/180228/a/7/5a96132fa9fcf83c1262f480_150x150.png'} alt={'loading'}/>
              <img className={css.tutu} src={'https://goods6.juancdn.com/bao/180228/a/0/5a96136aa9fcf83bf17cbdbf_150x150.png'} alt={'loading'}/>
             </div>
         </div>

         <Switch> 
           <Route path="/temai/jingx" component={JingXuan}/> 
           <Route path="/temai/meiz" component={MeiZhuang}/>  
           <Route path="/temai/muy" component={MuYing}/>  
           <Route path="/temai/shum" component={ShuMa}/>  
           <Route path="/temai/xiez" component={XieZi}/>  
           <Route path="/temai/yund" component={YunDong}/> 
                
            <Redirect from="/temai" to="/temai/jingx"/>
         </Switch>
      </div>
    }
    componentWillMount(){
      store.dispatch({
        type:"HideTabbar",
        payload:false 
      })
    }

    conponentDidMount(){
      console.log(this.refs.active)
    }
    componentWillUnmount(){
      store.dispatch({
        type:"ShowTabbar",
        payload:true
      })
    }
}

export default TeMai;