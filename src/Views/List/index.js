import React from 'react';
// import {NavLink} from 'react-router-dom'
class List extends React.Component{
     state={
       datalist:['1111','2222','3333']
     }
    render(){
      return <div>
       List
       <ul>
         {
           this.state.datalist.map(item=>
            //声明式导航
            // <li key={item}><NavLink to={'/detail'+item}>{item}</NavLink></li>
            // 编程式导航
            <li key={item} onClick={()=>this.handleClick(item)}>{item}</li>
            )
         }
       </ul>
      </div>
    }
    handleClick = (id)=>{
      console.log(this.props)
      this.props.history.push(`/detail/${id}`);
    }
}

export default List;
