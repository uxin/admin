import requrst from '@/api/http';

class Api {
    // 登录接口
    loginInfo(username, password) {
        return requrst({
            url: '/admin/login',
            method: 'post',
            data: {
                username,
                password
            }
        })
    };
    // 退出登录接口
    logout() {
        return requrst({
            url: '/admin/logout',
            method: 'post'
        })
    }

    getInfo() {
        return requrst({
            url: '/admin/info',
            method: 'get',
        })
    }
};


export default new Api();