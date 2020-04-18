'use strict'

//var path = require('path');
//var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');

var User = require('../models/user');
var Follow = require('../models/follow');

function prueba(req, res){
    res.status(200).send({message: 'Hola mundo desde el controlador de follows'});
}

module.exports = {
    prueba
}