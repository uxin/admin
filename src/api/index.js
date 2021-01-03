import requrst from '@/api/http';

class Api {
    getTopics(){
        return requrst({
            method: 'get',
            url: '/admin/info'
        });
    }
};
export default new Api();