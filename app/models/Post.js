const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    slug: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    published_at: {
        type: Date,
        required: true,
        default: Date.now,
        trim: true
    },
    created_by: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    modified_by: {
        type: Schema.Types.ObjectId,
        required: true,
    }
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;