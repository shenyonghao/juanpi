import React from 'react';
import axios from 'axios'
import css from './index.module.scss'
import {PullToRefresh} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import ReactDOM from 'react-dom'
class ZhuanC extends React.Component{
  state={
    goods:[],
    page:2,
    refreshing:false,
    height:0
  }
    render(){
      return <div>
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
            if(this.state.page<=10){
              this.setState({
                page:this.state.page+1,
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
       
      </div>
    }

    componentDidMount(){
      this.setState({
        
        height:(document.documentElement.clientHeight-ReactDOM.findDOMNode(this.ptr).offsetTop)/50 +15+"rem"
      })
      axios.get('/api/getGoods?page=1&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc').then(res=>{
        // console.log(res.data.data.goods)
        this.setState({
          goods:res.data.data.goods
        })
       })
    }
   
}

export default ZhuanC;
