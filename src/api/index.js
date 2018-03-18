import ajax from './ajax'

export const reqCategory = () => ajax('/category')
export const reqBrand = () => ajax('/brand')
export const reqHomeData = () => ajax('/homeData')
export const reqAllBrand = () => ajax('/allbrand')
