import React from 'react';
import Axios from 'axios';
import css from './index.module.scss'
class DanP extends React.Component{
  state={
    goods:[]
  }
    render(){
      return <div>
         <ul className={css.box}>
           {
             this.state.goods.map(item=>(
               <li key={item.goods_id} className={css.boxli}>
                 <img src={item.pic_url} alt={item.goods_id} className={css.maintu}/>
                   <div className={css.zhongj}>
                      <span className={css.yuanjia}>￥{item.cprice}</span>
                      <span className={css.jianjia}>￥{item.oprice}</span>
                   </div>
                   <div className={css.maindown}>
                       <span className={css.mainzi}>{item.title_long}</span>
                   </div>
                 </li>
               ))
           }
         </ul>
        
      </div>
    }
    componentDidMount(){
      Axios.get('/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp').then(res=>{
      // console.log(res.data.data.goods)
        this.setState({
         goods:res.data.data.goods
        })
      })
    }
}

export default DanP;
