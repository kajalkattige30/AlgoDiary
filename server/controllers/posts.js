
// file containing all the handlers for our routes 
import express from 'express';
import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const {
        entryType,
        description,
        // Algorithm fields
        algoName, timeComplexity, spaceComplexity, useCase,
        // Pattern fields
        patternName, whenToUse, inputStructures, relatedAlgorithms, exampleProblems,
        // Insights (shared)
        bruteForce, optimalApproach, complexityImprovement,
    } = req.body;

    const newPostMessage = new PostMessage({
        entryType,
        description,
        algoName, timeComplexity, spaceComplexity, useCase,
        patternName, whenToUse, inputStructures, relatedAlgorithms, exampleProblems,
        bruteForce, optimalApproach, complexityImprovement,
    });

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const {
        entryType,
        description,
        // Algorithm fields
        algoName, timeComplexity, spaceComplexity, useCase,
        // Pattern fields
        patternName, whenToUse, inputStructures, relatedAlgorithms, exampleProblems,
        // Insights (shared)
        bruteForce, optimalApproach, complexityImprovement,
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = {
        entryType,
        description,
        algoName, timeComplexity, spaceComplexity, useCase,
        patternName, whenToUse, inputStructures, relatedAlgorithms, exampleProblems,
        bruteForce, optimalApproach, complexityImprovement,
        _id: id,
    };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });
}

export default router;