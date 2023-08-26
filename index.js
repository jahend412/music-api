const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const { allowedNodeEnvironmentFlags } = require('process');
const uuid = require('uuid');
const app = express();

app.use(express.static('public'));
app.use(morgan('common'));
app.use(bodyParser.json());


// <---------- Create ------------>

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


// <------------------ Update ------------------->

// Update User

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.name = updatedUser.name;
        res.status(200).send(`${user.name} has been updated`)
    } else {
        res.status(404).send('User not found')
    }
})

// Update Favorite Band

app.put('/users/:id/favoriteBand', (req, res) => {
    const { id, band } = req.params;
    const updatedBand = req.body;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteBand = updatedBand.favoriteBand;
        res.status(200).send(`${band} has been updated`)
    } else {
        res.status(404).send('User not found')
    }
})

// Update Favorite Song

app.put('/users/:id/favoriteSong', (req, res) => {
    const { id, song } = req.params;
    const updatedSong = req.body;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteSong = updatedSong.favoriteSong;
        res.status(200).send(`${song} has been updated`)
    } else {
        res.status(404).send('User not found')
    }
})

// Update Favorite Album

app.put('/users/:id/favoriteAlbum', (req, res) => {
    const { id, album } = req.params;
    const updatedAlbum = req.body;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteAlbum = updatedAlbum.favoriteAlbum;
        res.status(200).send(`${album} has been updated`)
    } else {
        res.status(404).send('User not found')
    }
})

// Update Favorite Genre

app.put('/users/:id/favoriteGenre', (req, res) => {
    const { id, genre } = req.params;
    const updatedGenre = req.body;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteGenre = updatedGenre.favoriteGenre;
        res.status(200).send(`${genre} has been updated`)
    } else {
        res.status(404).send('User not found')
    }
})

// Update Favorite Musician

app.put('/users/:id/favoriteMusician', (req, res) => {
    const { id, musician } = req.params;
    const updatedMusician = req.body;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteMusician = updatedMusician.favoriteMusician;
        res.status(200).send(`${musician} has been updated`)
    } else {
        res.status(404).send('User not found')
    }
})


// Update Favorite Genre

app.put('/users/:id/favoriteGenre', (req, res) => {
    const { id, genre } = req.params;
    const updatedGenre = req.body;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteGenre = updatedGenre.favoriteGenre;
        res.status(200).send(`${genre} has been updated`)
    } else {
        res.status(404).send('User not found')
    }
})

// <------------------ Read ------------------->

// Get All Users

app.get('/users', (req, res) => {
    res.status(200).send(users)
})

// Get User by ID

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
})


// get all bands

app.get('/band', (req, res) => {
    res.status(200).send(bands)
})

// Get Band by name

app.get('/band/:name', (req, res) => {
    const { name } = req.params;
    const band = bands.find(band => band.name === name);

    if (band) {
        res.status(200).send(band)
    } else {
        res.status(404).send('Band not found')
    }
})

// Get Band by album

app.get('/band/:album', (req, res) => {
    const { album } = req.params;
    const band = bands.find(band => band.album === album);

    if (band) {
        res.status(200).send(band)
    } else {
        res.status(404).send('Band not found')
    }
})

// Get Band by song

app.get('/band/:song', (req, res) => {
    const { song } = req.params;
    const band = bands.find(band => band.song === song);

    if (band) {
        res.status(200).send(band)
    } else {
        res.status(404).send('Band not found')
    }
})

// Get Band by genre

app.get('/band/:genre', (req, res) => {
    const { genre } = req.params;
    const band = bands.find(band => band.genre === genre);

    if (band) {
        res.status(200).send(band)
    } else {
        res.status(404).send('Band not found')
    }
})

// Get Band by musician

app.get('/band/:musician', (req, res) => {
    const { musician } = req.params;
    const band = bands.find(band => band.musician === musician);

    if (band) {
        res.status(200).send(band)
    } else {
        res.status(404).send('Band not found')
    }
})




// <------------------ Delete ------------------->

// Delete User

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        users = users.filter(user => user.id !== id);
        res.status(200).send(`${user.name} has been deleted`)
    } else {
        res.status(404).send('User not found')
    }
})

// Delete Favorite Band

app.delete('/users/:id/favoriteBand', (req, res) => {
    const { id, band } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteBand = user.favoriteBand.filter(band => band !== band);
        res.status(200).send(`${band} has been deleted`)
    } else {
        res.status(404).send('User not found')
    }
})

// Delete Favorite Song

app.delete('/users/:id/favoriteSong', (req, res) => {
    const { id, song } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteSong = user.favoriteSong.filter(song => song !== song);
        res.status(200).send(`${song} has been deleted`)
    } else {
        res.status(404).send('User not found')
    }
})

// Delete Favorite Album

app.delete('/users/:id/favoriteAlbum', (req, res) => {
    const { id, album } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteAlbum = user.favoriteAlbum.filter(album => album !== album);
        res.status(200).send(`${album} has been deleted`)
    } else {
        res.status(404).send('User not found')
    }
})

// Delete Favorite Genre

app.delete('/users/:id/favoriteGenre', (req, res) => {
    const { id, genre } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteGenre = user.favoriteGenre.filter(genre => genre !== genre);
        res.status(200).send(`${genre} has been deleted`)
    } else {
        res.status(404).send('User not found')
    }
})

// Delete Favorite Musician

app.delete('/users/:id/favoriteMusician', (req, res) => {
    const { id, musician } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteMusician = user.favoriteMusician.filter(musician => musician !== musician);
        res.status(200).send(`${musician} has been deleted`)
    } else {
        res.status(404).send('User not found')
    }
})

// Delete Favorite Genre

app.delete('/users/:id/favoriteGenre', (req, res) => {
    const { id, genre } = req.params;

    let user = users.find(user => user.id === id); // find user by id

    if (user) {
        user.favoriteGenre = user.favoriteGenre.filter(genre => genre !== genre);
        res.status(200).send(`${genre} has been deleted`)
    } else {
        res.status(404).send('User not found')
    }
})


// Listen for Request

app.listen(8080, () => console.log('Listening on 8080'))

