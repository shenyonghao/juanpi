import React from 'react';
import store from '../../Redux/store'
class ChaoS extends React.Component{
    render(){
      return <div>
      超市
      </div>
    }
    componentWillMount(){
      store.dispatch({
        type:"HideTabbar",
        payload:false 
      })
    }
    componentWillUnmount(){
      store.dispatch({
        type:"ShowTabbar",
        payload:true
      })
    }
}

export default ChaoS;