import React from 'react';
import axios from 'axios'
import css from './index.module.scss'
import store from '../../Redux/store'
// import {Carousel} from 'antd-mobile'
import {Carousel} from 'element-react';
import 'element-theme-default';

class Detail extends React.Component{
   state={
    goodsDetail:[],
   }
    render(){
      return <div>
        <Carousel trigger="click" height="7.5rem" indicatorPosition='none'>
          {
            this.state.goodsDetail.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <img className={css.lunbo} src={item} alt='loading'/>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      {/* <ul>
        {
          this.state.goodsDetail.map(item=>(
            <li key={item}>
               <img className={css.lunbo} src={item} alt='loading'/>
            </li>
          ))
        }  
      </ul>  */}
     
      </div>
    }

    componentWillMount(){
      store.dispatch({
        type:"HideTabbar",
        payload:false
      })
    }
    componentDidMount(){
      // console.log(this.props.match.params.id)
        axios.get(`/api/getDetailFirst?goods_id=${this.props.match.params.id}`).then(res=>{
          this.setState({
            goodsDetail:res.data.goodImages
          
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

export default Detail;
