import mongoose from "mongoose";

// Define the schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    authorImg: {
        type: String,
        required: true,
    },
    date: { // Changed to lowercase to follow common naming conventions
        type: Date,
        default: Date.now
    },
});

// Check if the model already exists in mongoose.models
const BlogModel = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default BlogModel;
