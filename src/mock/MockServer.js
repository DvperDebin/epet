import Mock from 'mockjs'

import data from './categorys'


Mock.mock('/category',{code:0,data:data.category})
Mock.mock('/brand',{code:0,data:data.brand})
Mock.mock('/homeData',{code:0,data:data.homeData})
