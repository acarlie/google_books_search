const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/booksDB', { useNewUrlParser: true, useUnifiedTopology: true });

const savedBooksSeed = [
    {
        authors: ['Suzanne Collins'],
        description: 'Against all odds, Katniss Everdeen has won the annual Hunger Games with fellow district tribute Peeta Mellark. But it was a victory won by defiance of the Capitol and their harsh rules. Katniss and Peeta should be happy. After all, they have just won for themselves and their families a life of safety and plenty. But there are rumors of rebellion among the subjects, and Katniss and Peeta, to their horror, are the faces of that rebellion. The Capitol is angry. The Capitol wants revenge.',
        image: 'http://books.google.com/books/content?id=FN5wMOZKTYMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        link: 'http://books.google.com/books?id=FN5wMOZKTYMC&printsec=frontcover&dq=catching+fire&hl=&cd=1&source=gbs_api',
        title: 'Catching Fire (The Hunger Games, Book 2)'
    },
    {
        authors: ['J.K. Rowling'],
        description: "'Give me Harry Potter,' said Voldemort's voice, 'and none shall be harmed. Give me Harry Potter, and I shall leave the school untouched. Give me Harry Potter, and you will be rewarded.' As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy...",
        image: 'http://books.google.com/books/content?id=_oaAHiFOZmgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        link: 'http://books.google.com/books?id=_oaAHiFOZmgC&printsec=frontcover&dq=The+Deathly+Hallows&hl=&cd=1&source=gbs_api',
        title: 'Harry Potter and the Deathly Hallows'
    },
    {
        authors: ['George R. R. Martin'],
        description: 'The kingdom of the royal Stark family faces its ultimate challenge in the onset of a generation-long winter, the poisonous plots of the rival Lannisters, the emergence of the Neverborn demons and the arrival of barbarian hordes. Reissue. TV tie-in.',
        image: 'http://books.google.com/books/content?id=YDzTCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        link: 'http://books.google.com/books?id=YDzTCwAAQBAJ&printsec=frontcover&dq=A+Game+of+Thrones&hl=&cd=5&source=gbs_api',
        title: 'A Game of Thrones'
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(savedBooksSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
