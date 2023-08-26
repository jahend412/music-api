const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const { allowedNodeEnvironmentFlags } = require('process');
const uuid = require('uuid');
const app = express();

app.use(express.static('public'));
app.use(morgan('common'));
app.use(bodyParser.json());

// Create User

app.post('/users', (req, res) => {
    const newUser = req.body;

    if (newUser.name) {
        newUser.id = uuid.v4();
        users.push(newUser);
        res.status(201).json(newUser)
    } else {
        res.status(400).send('users needs names')
    }
})

// Create Favorite Band

app.post('/users/:id/favoriteBand', (req, res) => {
    const { id, band } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteBand.push(band);
        res.status(201).send(`${band} has been added to ${user.name}'s favorites`)
    } else {
        res.status(404).send('User not found')
    }
})

// Create Favorite Song

app.post('/users/:id/favoriteSong', (req, res) => {
    const { id, song } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteSong.push(song);
        res.status(201).send(`${song} has been added to ${user.name}'s favorites`)
    } else {
        res.status(404).send('User not found')
    }
})

// Create Favorite Album

app.post('/users/:id/favoriteAlbum', (req, res) => {
    const { id, album } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteAlbum.push(album);
        res.status(201).send(`${album} has been added to ${user.name}'s favorites`)
    } else {
        res.status(404).send('User not found')
    }
})

// Create Favorite Genre

app.post('/users/:id/favoriteGenre', (req, res) => {
    const { id, genre } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteGenre.push(genre);
        res.status(201).send(`${genre} has been added to ${user.name}'s favorites`)
    } else {
        res.status(404).send('User not found')
    }
})

// Create Favorite Musician

app.post('/users/:id/favoriteMusician', (req, res) => {
    const { id, musician } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteMusician.push(musician);
        res.status(201).send(`${musician} has been added to ${user.name}'s favorites`)
    } else {
        res.status(404).send('User not found')
    }
})

// Create Favorite Songwriter

app.post('/users/:id/favoriteSongwriter', (req, res) => {
    const { id, songwriter } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteSongwriter.push(songwriter);
        res.status(201).send(`${songwriter} has been added to ${user.name}'s favorites`)
    } else {
        res.status(404).send('User not found')
    }
})

// Create Favorite Genre

app.post('/users/:id/favoriteGenre', (req, res) => {
    const { id, genre } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteGenre.push(genre);
        res.status(201).send(`${genre} has been added to ${user.name}'s favorites`)
    } else {
        res.status(404).send('User not found')
    }
})


