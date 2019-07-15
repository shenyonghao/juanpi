import axios from 'axios'
const getPromiseList = ()=>{
   return axios.get('/api/getBrandClearanceOtherGoods?cate_key=meizhuang&page=1&pf=m&brandclear=brandclear_127_419_A').then(res=>{
        return {
            type:"getList",
            payload:res.data.data.goods
        }
      })
}
export {getPromiseList}
