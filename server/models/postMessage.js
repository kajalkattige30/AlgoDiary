import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    // ── Common fields ──
    entryType: {
        type: String,
        enum: ['algorithm', 'pattern'],
        default: 'algorithm',
    },
    description: String,
    selectedFile: String, // Converting an image into a string using base 64
    createdAt: {
        type: Date,
        default: new Date(),
    },

    // ── Algorithm-specific fields ──
    algoName: String,
    timeComplexity: String,
    spaceComplexity: String,
    useCase: String,

    // ── Pattern-specific fields ──
    patternName: String,
    whenToUse: String,
    inputStructures: String,       // comma-separated, e.g. "array, string"
    relatedAlgorithms: String,     // comma-separated
    exampleProblems: String,       // comma-separated

    // ── Insights (shared across types) ──
    bruteForce: String,
    optimalApproach: String,
    complexityImprovement: String,
});

//Turning schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

//exporting mongoose model from a post message file
export default PostMessage;