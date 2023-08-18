import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '98b614c4413e4cf18aadfedad85fbac9'
    }
})