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
    description: {
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
    },
    saved: {
        type: Boolean,
        default: false
    }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
