const db = require('../models');

module.exports = {
    create: function (req, res) {
        db.Book
            .create(req.body)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Book
            .find({})
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    },
    findSaved: function (req, res) {
        db.Book
            .find({ saved: 'true' })
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
        db.Book
            .findById(req.params.id)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Book
            .findOneAndUpdate({ _id: req.params.id })
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Book
            .findById(req.params.id)
            .then(book => book.remove())
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    }
};
