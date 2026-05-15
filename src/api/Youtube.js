import axios from 'axios';

const KEY = 'AIzaSyAQ6xDgp3XoMGmPx_R0bWZiL1KSD0pyxTo';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    },
    headers:{}
})
