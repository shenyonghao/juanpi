import React from 'react';
import axios from 'axios'
import css from './index.module.scss'
import {PullToRefresh} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
import store from '../../../Redux/store'
// import {getPromiseList} from './actionCreater'
class XieZi extends React.Component{
    state={
      goods:[],
      page:3,
      refreshing:false,
      height:0,
      catekey:"xiezi",

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
          axios.get(`/api/getBrandClearanceOtherGoods?cate_key=${this.state.catekey}&page=${this.state.page}&pf=m&brandclear=brandclear_127_419_A`).then(res=>{
            if(this.state.page<11){
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
                 <NavLink to={'/detail/'+item.goods_id}>
                 <img src={item.pic_url} alt={item.goods_id} className={css.maintu}/>
                   <div className={css.zhongj}>
                      <span className={css.yuanjia}>￥{item.cprice}</span>
                      <span className={css.jianjia}>￥{item.oprice}</span>
                   </div>
                   <div className={css.maindown}>
                       <span className={css.mainzi}>{item.title_long}</span>
                   </div>
                   </NavLink>
                 </li>
               ))
           }
      </ul>
      </PullToRefresh>   
      </div>
    }
    componentDidMount(){
      this.setState({
        height:(document.documentElement.clientHeight-ReactDOM.findDOMNode(this.ptr).offsetTop)/50 -1 +"rem"
      })
      axios.get('/api/getBrandClearanceOtherGoods?cate_key=xiezi&page=2&pf=m&brandclear=brandclear_127_419_A').then(res=>{
          this.setState({
              goods:res.data.data.goods
            })
      })
  
    }

}

export default XieZi;