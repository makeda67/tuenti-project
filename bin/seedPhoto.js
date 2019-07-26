'use strict';
const mongoose = require('mongoose');
const Photo = require('../models/Photo');

mongoose.connect('mongodb://localhost/tuentiBd', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const data = [{
  idAlbum: '5d3ab9dbfe91b73fb3c0811d',
  name: 'Sonar',
  photo: 'images/uploads/1.jpg',
  comments: []
}];

async function addPhoto (data) {
  for (let i = 0; i < data.length; i++) {
    data[i] = await Photo.create({ idAlbum: data[i].idAlbum, name: data[i].name, photo: data[i].photo, comments: data[i].comments });
  }
  mongoose.connection.close();
}

addPhoto(data);
