import React from 'react';
import axios from 'axios'
import css from './index.module.scss'
import {PullToRefresh} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import ReactDOM from 'react-dom'
import store from '../../Redux/store'
class FengQ extends React.Component{
  state={
    goods:[],
    page:12,
    refreshing:false,
    height:0
  }
    render(){
      return <div>
        <div className={css.fengqiang}>
        <a className={css.fangxiang} href="/"><span className="iconfont">&#xe62a;</span></a>
          最后疯抢
          </div>
          <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        
        direction={'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });
          //axios.get('')
          axios.get(`/api/getGoods?page=${this.state.page}&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc`).then(res=>{
            if(12<=this.state.page<=20){
              this.setState({
                page:this.state.page+1,
                //不要用++会改变原状态，+1不会改变原状态
                refreshing: false,
                goods:[...this.state.goods,...res.data.data.goods]
              })
            }
    
          })

        }}
      >
       <ul className={css.box}>
           {
             this.state.goods.map(item=>(
               <li key={item.goods_id} className={css.boxli}>
                 <img src={item.pic_url} alt={item.goods_id} className={css.maintu}/>
                   <div className={css.zhongj}>
                   <span className={css.zhongzi}>{item.coupon_tips}</span>
                   <img src={item.logo_url}className={css.zhongtuy} alt={item.goods_id} />
                   </div>
                   <div className={css.maindown}>
                       <span className={css.maindole}>{item.title}</span>
                       <span className={css.maindori}>{item.time_left}</span>
                   </div>
                 </li>
               ))
           }
         </ul>
        </PullToRefresh>
          <div className={css.leftche}>
            <img className={css.che} src={'//jp.juancdn.com/jpwebapp_v1/images_v1/icon/bag_shortcut_new.png?74baee69-1&sv=449ce9ee'} alt={'loading'}/>
          </div>
          <div className={css.rightjian}>
            <a><img className={css.jian} src={'//jp.juancdn.com/jpwebapp_v1/images_v1/icon/back-top.png?4af681f3-1&sv=449ce9ee'} alt={'loading'}/></a>
          </div>
      </div>
    }

    componentWillMount(){
      store.dispatch({
        type:"HideTabbar",
        payload:false 
      })
    }

    componentDidMount(){
      this.setState({
        height:(document.documentElement.clientHeight-ReactDOM.findDOMNode(this.ptr).offsetTop)/50 +"rem"
      })
      axios.get('/api/getGoods?page=11&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc').then(res=>{
        // console.log(res.data.data.goods)
        this.setState({
          goods:res.data.data.goods
        })
       })
    }
    componentWillUnmount(){
      store.dispatch({
        type:"ShowTabbar",
        payload:true
      })
    }
   
}
export default FengQ;