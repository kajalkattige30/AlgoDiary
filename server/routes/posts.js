// file containing all the routes which have something to do with posts, posts being the algorithm cards. 

import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

// Set up router
const router = express.Router();

//Adding routes
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); // Patch is used for updating existing documents
router.delete('/:id', deletePost);

// Exporting router
export default router;