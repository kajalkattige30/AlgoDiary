import React, { useState, useEffect } from 'react';

import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

// Get the current id of the post we are on



const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ algoName: '', timeComplexity: '', spaceComplexity: '', description : '', selectedFile: ''});
    const post = useSelector((state) => currentId ? state.posts.find((description) => description._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
          } else {
            dispatch(updatePost(currentId, postData));
            clear();
          }
    };

    const clear = () => {
        setCurrentId(0);
        setPostData({ algoName: '', timeComplexity: '', spaceComplexity: '', description : ''});
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${post.algoName}"` : 'Creating an Algorithm'}</Typography>
                <TextField name="algoName" variant="outlined" label="Algo_Name" fullWidth value={postData.algoName} onChange={(e) => setPostData({ ...postData, algoName: e.target.value })} />
                <TextField name="timeComplexity" variant="outlined" label="Time Complexity" fullWidth value={postData.timeComplexity} onChange={(e) => setPostData({ ...postData, timeComplexity: e.target.value })} />
                <TextField name="spaceComplexity" variant="outlined" label="Space Complexity" fullWidth value={postData.spaceComplexity} onChange={(e) => setPostData({ ...postData, spaceComplexity: e.target.value })} />
                <TextField name="description" variant="outlined" label="Algo_Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>SUBMIT</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>CLEAR</Button>
            </form> 

        </Paper>
    );
}

export default Form;