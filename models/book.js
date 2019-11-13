const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: Array,
        required: true,
        default: 'Author Unknown'
    },
    desc: {
        type: String,
        required: true,
        default: 'No description available'
    },
    image: {
        type: String,
        required: true,
        default: 'images/default_book.jpg'
    },
    link: {
        type: String
    }
});

const Book = mongoose.model('Nook', BookSchema);

module.exports = Book;
