import axios from 'axios'

const KEY = "AIzaSyB4ir-qLOQMpPfMjnmz4BHq_T85rwzSCDo";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'videos',
        maxResults: 5,
        key: KEY,
    }
});