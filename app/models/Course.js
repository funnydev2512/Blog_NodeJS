const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator'); 
const mongooseDelete = require('mongoose-delete');


const Course = new Schema({
    name: { type: String,  required: true},
    description: { type: String},
    image: {type: String},
    videoID: {type:String,  required: true},
    createdAt: {type: Date, default:Date.now},
    updateAt: {type: Date, default:Date.now},
    slug: { type: String, slug: 'name', unique: true}

},{
    timestamp:true,
});

//Add plugins
mongoose.plugin(slug);

Course.plugin(mongooseDelete, { 
    deletedAt : true, 
    overrideMethods: 'all' 
})

module.exports = mongoose.model('Course', Course);
