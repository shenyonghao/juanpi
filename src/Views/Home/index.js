import React from 'react';
import axios from 'axios'
import css from './index.module.scss'
// import {Carousel} from 'antd-mobile'
import {Carousel} from 'element-react';
import 'element-theme-default';
import DanP from './jxDanP/index'
import ZhuanC from './jxZhuanC/index'
import {Route,Redirect,Switch,NavLink} from 'react-router-dom' 

class Home extends React.Component{

      
    state={
       data:[],
       header:"//jp.juancdn.com/jpwebapp/images/go_load_new.png",
       rigtu:"https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png",
    
      }
    render(){
      return <div className={css.bigbox}>
        <div>
          <img src={this.state.header} className={css.fOzlGi} alt={css}/>
        </div>
        <div className={css.nav}>
          <a href="" className={css.fangdaj}>
            <span className="iconfont">&#xe615;</span>
            <span className={css.juanp}>卷皮</span>
            <span className={css.sousuo}>搜索</span>
          </a>
          <a href="">
            <img src={this.state.rigtu} alt={css} className={css.rigtu}/>
          </a>
        </div>
           {/* antd-mobile版本 */}
          {/* <Carousel
              autoplay={true}
              infinite
            >
              {this.state.data.map(val => (
               <div key={val.id} className={css.lunbo}><img className={css.banner} src={val.pic} alt={val.zg_event}/></div>
              ))}
          </Carousel> */}

          <Carousel height="2.9rem" indicatorPosition='none'>
          {
            this.state.data.map((val, index) => {
              return (
                <Carousel.Item key={index} className={css.lunbo}>
                 <img className={css.banner} src={val.pic} alt={val.zg_event}/>
                </Carousel.Item>
              )
            })
          }
        </Carousel>   
         <div className={css.navslide}>
           <NavLink to="/fengq">
             <img src={'https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png'} className={css.navtu} alt={css}/>
           </NavLink>
           <NavLink to="/miaos">
             <img src={'https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png'} className={css.navtu} alt={css}/>
           </NavLink>
           <NavLink to="/temai">
             <img src={'https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png'} className={css.navtu} alt={css}/>
           </NavLink>
           <NavLink to='/chaos'>
             <img src={'https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png'} className={css.navtu} alt={css}/>
           </NavLink>
         </div>

          <div className={css.caicai}>
           <NavLink to="/miaos">
            <img src={'https://s2.juancdn.com/jas/190624/0/1/5d10202833b089454006067a_540x656.gif'} className={css.caicaile} alt={"loading"}/>    
            </NavLink>
            <NavLink to="/temai">
            <img src={'https://goods6.juancdn.com/jas/190621/b/7/5d0c9fa6b6f8ea444858b317_540x328.png'} className={css.caicaimd} alt={"loading"}/>
            </NavLink>
            <NavLink to='/chaos'>
            <img src={'https://goods7.juancdn.com/jas/190621/d/2/5d0c9fd4b6f8ea444f6d661c_540x328.png'} className={css.caicairi} alt={"loading"}/>
            </NavLink>
            <NavLink to='/chaos'>
            <img src={'https://s2.juancdn.com/jas/190624/e/b/5d1097c933b08941f06fcc53_1080x288.gif'} className={css.caicaidi} alt={"loading"}/>
            </NavLink>
          </div>
          <div className={css.waike}>

            <img src={'https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png'} className={css.caiyaya} alt={"loading"}/>
          
          </div>
          <div className={css.main}>
          <NavLink to="/home/jxzc" activeClassName={css.myactive}>
           <span className={css.jingxuan}>精选专场</span>
          </NavLink>
          <NavLink to="/home/jxdp" activeClassName={css.myactive}>
          <span className={css.jingxuan}>精选单品</span>
          </NavLink>
          </div>
          <Switch>
            <Route path="/home/jxzc" component={ZhuanC}/> 
            <Route path="/home/jxdp" component={DanP}/>     
            <Redirect from="/home" to="/home/jxzc"/>
         </Switch>
      </div>
    }

    componentDidMount(){
      this.$tab = this.refs.tab;
      if(this.$tab){
        this.offsetTop = this.$tab.offsetTop;
        window.addEventListener('scroll',this.handleScroll);
      }
      axios.get('/api/getIndexFirstPaintInfo?cid=&zy_ids=p8&app_name=zhe&app_version=&platform=&catname=newest_zhe').then(res=>{
        // console.log(res.data)
        this.setState({
          data:res.data.adsInfo.slide_ads.config.slide,

        })
      })

      
    }


   
}

export default Home;
