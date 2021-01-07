import requrst from '@/api/http';

class Api {
    getTopics() {
        return requrst({
            method: 'get',
            url: '/admin/info'
        });
    };
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
    }
};


export default new Api();