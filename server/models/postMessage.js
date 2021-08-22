import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    algoName : String,
    timeComplexity : String,
    spaceComplexity : String,
    description : String,
    selectedFile : String, // Converting an image into a string using base 64
    createdAt: {
        type : Date,
        default : new Date(),
    },
});

//Turning schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

//exporting mongoose model from a post message file
export default PostMessage;