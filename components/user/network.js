const express = require('express')
const Modelrouter = express.Router()
// Modulos locales
const response = require('../../network/response')
const Model = require('./model');
const bodyParser = require('body-parser');
Modelrouter.use(bodyParser.json());

//

Modelrouter.route('/')
.options((req, res) => { res.sendStatus(200); })
.get((req,res,next) => {
    Model.find({})
    .then((lead) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(lead);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Model.create(req.body)
    .then((leadt) => {
        console.log('Apostador Created ', leadt);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leadt);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /Model');
})
.delete((req, res, next) => {
    Model.remove({})
    .then((leaddel) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leaddel);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

Modelrouter.route('/:leadID')
.options((req, res) => { res.sendStatus(200); })
.get((req,res,next) => {
    Model.findById(req.params.leadID)
    .then((promo) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promo);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /Model/'+ req.params.leadID);
})
.put((req, res, next) => {
    Model.findByIdAndUpdate(req.params.leadID, {
        $set: req.body
    }, { new: true })
    .then((promo) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promo);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Model.findByIdAndRemove(req.params.leadID)
    .then((promo) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promo);
    }, (err) => next(err))
    .catch((err) => next(err));
});
//

module.exports = Modelrouter