import React from 'react';
import Tabbar from './Components/Tabbar'
import store from './Redux/store'
import './App.scss'
class App extends React.Component{
  state={
    tabbarshow:store.getState().isShow
  }
    render(){
      return <div>
     {
        this.state.tabbarshow?
        <Tabbar/>
        :null
      }
        {
          this.props.children
        }
      </div>
    }

    componentWillMount(){
      // 提前订阅
      store.subscribe(()=>{
        // console.log("store有更新",store);
        // console.log(store.getState().isShow);
        this.setState({
          tabbarshow:store.getState().isShow
        })

      })
    }
}

export default App;
