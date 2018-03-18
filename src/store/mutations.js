import {GET_BRAND,GET_CATEGORY,GET_HOMEDATA,GET_ALLBRAND} from './mutation-types'

export default {

  // 更新state中的分类信息
  [GET_CATEGORY](state,{category}){
    state.category = category
  },

  // 更新state中的品牌信息
  [GET_BRAND](state,{brand}){
    state.brand = brand
  },

  // 更新state中的homeData
  [GET_HOMEDATA](state,{homeData}){
    state.homeData = homeData
  },

  // 更新state中的allBrand
  [GET_ALLBRAND](state,{allBrand}){
    state.allbrand = allBrand
  }

}
