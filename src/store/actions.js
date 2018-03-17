// 引入接口
import {reqBrand,reqCategory,reqHomeData} from '../api/index'
// 引入mutations-types
import {GET_BRAND,GET_CATEGORY,GET_HOMEDATA} from './mutation-types'

export default {

  // 异步发送ajax请求,得到分类
  async getCategorys({commit}){
    const result = await reqCategory()
    if(result.code === 0){ // 发送请求成功
      commit(GET_CATEGORY, {category:result.data})
    }
  },

  // 异步发送请求得到品牌
  async getBrand({commit}){
    const result = await reqBrand()
    if(result.code === 0){  // 发送成功
      commit(GET_BRAND,{brand:result.data})
    }
  },

  // 异步发送请求得到首页数据
  async getHomeData({commit},callBack){
    const result = await reqHomeData()
    if(result.code === 0){
      commit(GET_HOMEDATA,{homeData:result.data})
    }
    callBack && callBack()
  }

}
