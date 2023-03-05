// api/productApi.js
import axiosClient from "./axiosClient"
const  productApi =  {
  getAll(params){
    const url= '/v1/products'
    return axiosClient.get(url, {params})
  },
  get(id){
    const url = `/v1/products/${id}`
    return axiosClient.get(url)
  },
  // add(data){
  //   const   
  // }

}
export default productApi;
