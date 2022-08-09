import axios from 'axios'

export default class PostService{
    static async getNextEvents(limit, page) {
        let params={}
        if(limit&&page) params = {_limit:limit, _page:page}
        const response = await axios.get('http://127.0.0.1:3000/events', {
            params
        })
        return response
    }

    static async getAll() {
        const response = await axios.get('http://127.0.0.1:3000/employees')
        return response
    }
}