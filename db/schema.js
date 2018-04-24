const mongoose = require('mongoose');

const Schema = mongoose.Schema

const IdeaSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        default:'New Title'
    },
    description:{
        type: String,
        required: true,
        default:'New Description'
    },
    created: {
        type : String,
        required: true,
        default: new Date()
    }
}) 
const UserSchema = new Schema({
    userName: {

        type: String,
        required: true
    },
    password: {
        type: String
    },
    ideas:[IdeaSchema]
})

const User = mongoose.model('User', UserSchema)
const Idea = mongoose.model('Idea', IdeaSchema)

module.exports = {
    User,
    Idea
}
