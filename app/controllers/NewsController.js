const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');
class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('You are noob');
    }
}

module.exports = new NewsController();
