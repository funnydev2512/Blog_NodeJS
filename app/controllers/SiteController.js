const { render } = require('express/lib/response');
const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');
class SiteController {
    //[GET] /
    index(req, res, next) {
        // res.render('home');
        Course.find({})
            .then(courses => {

                res.render('home',{
                    courses : multipleMongooseToObject(courses),
                })
            })
            .catch(next)
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
