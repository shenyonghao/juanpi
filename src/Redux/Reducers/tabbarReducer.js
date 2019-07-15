const tabbarReducer = (prevState=true,action)=>{
  let {type,payload} = action;
     switch(type){
         case "ShowTabbar":
             return payload
             break;
         case 'HideTabbar':
             return payload
             break;
         default:
             return prevState
     }
}
export default tabbarReducer;
