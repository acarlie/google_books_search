import axios from 'axios';
export default {
    googleBooks: function () {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=hamlet')
    }
}


