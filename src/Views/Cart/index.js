import React from 'react';
import css from './index.module.scss'
import store from '../../Redux/store'
class Cart extends React.Component{
  constructor(props){
    super(props);
   
    this.state = {
      navTop:false,
      t:0
      
    }
     
    this.$tab = null;
    this.offsetTop = 0;
    this.$tab2 = null;
    this.offsetTop2 = 0;
}
    render(){
      return <div className={css.box} >
        <div className={css.top} >1111</div>
        <div className={css.mid} ref="tab" style={this.state.navTop?{position:'fixed',top:0,left:0}:null}>2222</div>
        <div className={css.bottom} ref="tab2">333</div>
      </div>
      
    }

componentDidMount(){
  this.$tab = this.refs.tab;
  this.$tab2 = this.refs.tab;
  if(this.$tab){
    this.offsetTop = this.$tab.offsetTop;
    window.addEventListener('scroll',this.handleScroll.bind(this));
  }
  if(this.$tab2){
    this.offsetTop2 = this.$tab2.offsetTop;
    window.addEventListener('scroll',this.handleScroll.bind(this));
  }
  
  
  

}
handleScroll(a){
  
  let sTop = document.documentElement.scrollTop || document.body.scrollTop;

  var taboffsettop =   this.offsetTop -sTop
  var tabof2 = this.offsetTop2 -sTop
  if(this.state.t<=sTop){
    // console.log("向下")
    if(taboffsettop < 3){
      this.setState({
             navTop: true
           })
    }
  } 
    else {
      // console.log("向上",tabof2)
      if(tabof2>45&&tabof2<=53){
        this.setState({
          navTop:false
        })
      }
    }
    setTimeout(()=>{
      this.setState({
        t:sTop
      })
    }, 0);
  // if(taboffsettop == 0){
  //   this.setState({
  //          navTop: true
  //        })
  // }
  // if(tabof2==50){
  //   this.setState({
  //     navTop:false
  //   })
  // }
  
  // if(sTop >= b){
   
  //    this.setState({
  //      navTop: true
  //    })
  // }

  // if(sTop < b){
  //    this.setState({
  //      navTop:false
  //    })
  // }
 
}
}
//     componentWillMount(){
//       store.dispatch({
//         type:"HideTabbar",
//         payload:false 
//       })
//     }
//     componentWillUnmount(){
//       store.dispatch({
//         type:"ShowTabbar",
//         payload:true
//       })
//     }
// }

export default Cart
