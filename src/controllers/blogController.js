const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    authorId: {
        type: ObjectId,
        ref: 'AuthModel',
        required: true
    },
    tags: {
        type: []
    },
    category: {
        type: String,
        required: true,
        examples: ["technology", "entertainment", "life style", "food", "fashion"]
    },
    subcategory: {
        type: [],
        examples: ["web development", " AI", "ML", "comedy", "circus", "lifestyles", "vegeterian", "Non vegeterian", "Man Fashion", "Women Fashion", "Kid Fashion"]
    },
    
    isDeleted: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Number
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    
},
{ timestamps: true }
);

const blogModel = mongoose.model('blogModel', blogSchema);

module.exports = blogModel;
