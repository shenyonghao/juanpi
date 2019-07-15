import React from 'react';
import axios from 'axios'
import css from './index.module.scss'
import {PullToRefresh} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import ReactDOM from 'react-dom'
class JingXuan extends React.Component{
  state={
    goods:[],
    page:3,
    refreshing:false,
    height:0,
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
          axios.get(`/api/getBrandClearanceGoods?cid=ppqc_jingxuan&zhouyi_ids=p8_c4_l4&page=${this.state.page}`).then(res=>{
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
    <ul className={css.bigbox}>
      {
        this.state.goods.map(item=>(
          <li key={item.goods_id} className={css.boxli}>
            <img className={css.banner} src={item.ss_cover} alt={'loading'}/>
            <div className={css.down}>
              <div className={css.downde}>
                <img className={css.xiaotu} src={item.sub_data[0].pic} alt={'loading'}/>
                <p className={css.jiage}><span className={css.jiagel}>{item.sub_data[0].cp}</span><span className={css.jiager}>{item.sub_data[0].op}</span></p>
                <p className={css.wenzi}>{item.sub_data[0].title}</p>
              </div>
              <div className={css.downde}>
                <img className={css.xiaotu} src={item.sub_data[1].pic} alt={'loading'}/>
                <p className={css.jiage}><span className={css.jiagel}>{item.sub_data[1].cp}</span><span className={css.jiager}>{item.sub_data[1].op}</span></p>
                <p className={css.wenzi}>{item.sub_data[1].title}</p>
              </div>
              <div className={css.downde}>
                <img className={css.xiaotu} src={item.sub_data[2].pic} alt={'loading'}/>
                <p className={css.jiage}><span className={css.jiagel}>{item.sub_data[2].cp}</span><span className={css.jiager}>{item.sub_data[2].op}</span></p>
                <p className={css.wenzi}>{item.sub_data[2].title}</p>
              </div>
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
        height:(document.documentElement.clientHeight-ReactDOM.findDOMNode(this.ptr).offsetTop)/50 -1 +"rem"
      })
       axios.get('/api/getBrandClearanceGoods?cid=ppqc_jingxuan&zhouyi_ids=p8_c4_l4&page=2').then(res=>{
         this.setState({
            goods:res.data.data.goods
         })
       })
    }
}

export default JingXuan;