import axios from "axios";
import store from "@/store";
import Cookies from 'js-cookie';
import { Message, MessageBox } from 'element-ui';

// const baseURL = location.host.indexOf(".com") != -1 || location.port == "8085" ? "/api" : "";
const TokenKey = 'loginToken';
const instance = axios.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
    baseURL: process.env.BASE_API,
    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    timeout: 5000,
    // `withCredentials` 表示跨域请求时是否需要使用凭证 默认为 false
    withCredentials: true,
});

// request拦截器
instance.interceptors.request.use(config => {
    if (store.getters.token){
        // 让每个请求携带自定义token 请根据实际情况自行修改
        config.headers['Authorization'] = Cookies.get(TokenKey);
    }
    return config
}, error => {
    return Promise.reject(error)
})

// respone拦截器
instance.interceptors.response.use(res => {
    console.log(res.data.code);
    if (res.data.code !== 200) {
        Message({
            message: res.data.message,
            type: "error",
            duration: 3000,
            showClose: true
        });
        if (res.data.code === 401) {
            MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                console.log("重新登录");
            }).catch(() => {
                console.log("取消");
            })
        }
    } else {
        return res.data;
    }
}, err => {
    Message({
        message: err.message,
        type: 'error',
        duration: 3000
    })
    return Promise.reject(err)
})

export default instance;