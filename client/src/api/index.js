import axios from 'axios'; // To make api calls

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url); // localhost:5000/posts returns all the posts that we have in the database

export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);