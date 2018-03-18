import ajax from './ajax'

export const reqCategory = () => ajax('/category')
export const reqBrand = () => ajax('/brand')
export const reqHomeData = () => ajax('/homeData')
export const reqAllBrand = () => ajax('/allbrand')

/* 发送验证码 */
export const reqMsgCode = (phone) => ajax('/api/sendcode',{phone})
/* 获取一次性验证码 */
export const reqCaptcha = () => ajax('/api/captcha')
/* 用户名密码登录 */
export const userLogin = (name,pwd) => ajax('/api/userLogin',{name,pwd})
/* 手机号验证登录 */
export const smsLogin = (phone,code) => ajax('/api/login_sms',{phone,code},'aasf')
