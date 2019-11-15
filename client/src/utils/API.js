import axios from 'axios';

export default {
    findGoogleBooks: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    getBooks: function() {
        return axios.get('/api/books');
    },
    getBook: function(id) {
        return axios.get(`/api/books/${id}`);
    },
    deleteBook: function(id) {
        return axios.delete(`/api/books/${id}`);
    },
    saveBook: function(book) {
        return axios.post('/api/books', book);
    }
}


