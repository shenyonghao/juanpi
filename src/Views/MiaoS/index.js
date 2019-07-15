import React from 'react';
import axios from 'axios'
import css from './index.module.scss'
import {PullToRefresh} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import ReactDOM from 'react-dom'
import store from '../../Redux/store'
class MiaoS extends React.Component{
  ptr = null
  state={
    tabid:13,
    goodlist:[],
    page:3,
    refreshing:false,
    height:0
  }
    render(){
      return <div className={css.box}>

      <ul className={css.header}>
        <li className={css.headerli}>
          <span className={css.shijian}>10:00</span>
          <span className={css.qiangg}>已开抢</span>
        </li>
        <li className={css.headerli}>
          <span className={css.shijian}>10:00</span>
          <span className={css.qiangg}>已开抢</span>
        </li>
        <li className={css.headerli}>
          <div className={css.bgred}>
          <span className={css.shijian}>10:00</span>
          <span className={css.qiangg}>已开抢</span>
          </div>
        </li>
        <li className={css.headerli}>
          <span className={css.shijian}>10:00</span>
          <span className={css.qiangg}>已开抢</span>
        </li>
        <li className={css.headerli}>
          <span className={css.shijian}>10:00</span>
          <span className={css.qiangg}>已开抢</span>
        </li>
      </ul>

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
          axios.get(`/act/timebuy-xrgoodslist?tab_id=${this.state.tabid}&page=${this.state.page}`).then(res=>{
            // console.log(res.data.data.goodslist)
            if(this.state.page<7){
              this.setState({
                page:this.state.page+1,
                //不要用++会改变原状态，+1不会改变原状态
                refreshing: false,
                goodlist:[...this.state.goodlist,...res.data.data.goodslist]
              })
            }
    
          })

        }}
      >
            <ul>
          {
            this.state.goodlist.map(item=>(
              <li key={item.goods_id} className={css.goodlist}>
                <img src={item.pic_url} className={css.tuleft} alt={'loading'}/>
                <div className={css.rightzi}>
                  <p className={css.titlelong}>{item.title_long}</p>
                  <span className={css.xianliang}>限量价:</span>
                  <span className={css.yuanjia}>￥{item.cprice}</span>
                  <span className={css.jianjia}>￥{item.oprice}</span>
                  <p className={css.yigou}>{item.progress_info.txt}</p>
                  <span className={css.masqiang}>{item.mkt_text}</span>
                </div>
              </li>
            ))
          }
        </ul>
      </PullToRefresh>
    
      <div className={css.footer} >
          <img className={css.tutu} src={'https://goods6.juancdn.com/bao/180228/a/7/5a96132fa9fcf83c1262f480_150x150.png'} alt={'loading'}/>
          <img className={css.tutu} src={'https://goods6.juancdn.com/bao/180228/a/0/5a96136aa9fcf83bf17cbdbf_150x150.png'} alt={'loading'}/>
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
        height:(document.documentElement.clientHeight-ReactDOM.findDOMNode(this.ptr).offsetTop)/50 -0.82 +"rem"
      })
      axios.get(`/act/timebuy-xrgoodslist?tab_id=${this.state.tabid}&page=2`).then(res=>{
        this.setState({
          goodlist:res.data.data.goodslist
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

export default MiaoS;