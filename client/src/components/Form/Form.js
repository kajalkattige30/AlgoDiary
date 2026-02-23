import React, { useState, useEffect } from 'react';
import {
    TextField, Button, Typography, Dialog, DialogTitle,
    DialogContent, DialogActions, IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId, open, handleClose }) => {
    const [postData, setPostData] = useState({
        algoName: '', timeComplexity: '', spaceComplexity: '', description: '', useCase: ''
    });
    const post = useSelector((state) =>
        currentId ? state.posts.find((p) => p._id === currentId) : null
    );
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
    };

    const clear = () => {
        setCurrentId(null);
        setPostData({ algoName: '', timeComplexity: '', spaceComplexity: '', description: '', useCase: '' });
        handleClose();
    };

    return (
        <Dialog open={open} onClose={clear} maxWidth="sm" fullWidth classes={{ paper: classes.dialogPaper }}>
            <DialogTitle disableTypography className={classes.dialogTitle}>
                <Typography variant="h5" className={classes.titleText}>
                    {currentId ? `Editing "${post?.algoName}"` : '📝 New Diary Entry'}
                </Typography>
                <IconButton onClick={clear} className={classes.closeButton}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <DialogContent className={classes.dialogContent}>
                    <TextField
                        name="algoName" variant="outlined" label="Algorithm Name"
                        fullWidth value={postData.algoName}
                        onChange={(e) => setPostData({ ...postData, algoName: e.target.value })}
                        className={classes.field}
                    />
                    <TextField
                        name="timeComplexity" variant="outlined" label="Time Complexity"
                        fullWidth value={postData.timeComplexity}
                        onChange={(e) => setPostData({ ...postData, timeComplexity: e.target.value })}
                        className={classes.field}
                        placeholder="e.g. O(log n)"
                    />
                    <TextField
                        name="spaceComplexity" variant="outlined" label="Space Complexity"
                        fullWidth value={postData.spaceComplexity}
                        onChange={(e) => setPostData({ ...postData, spaceComplexity: e.target.value })}
                        className={classes.field}
                        placeholder="e.g. O(1)"
                    />
                    <TextField
                        name="description" variant="outlined" label="Description"
                        fullWidth multiline rows={3}
                        value={postData.description}
                        onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                        className={classes.field}
                        placeholder="What does this algorithm do?"
                    />
                    <TextField
                        name="useCase" variant="outlined" label="Use Case"
                        fullWidth multiline rows={2}
                        value={postData.useCase}
                        onChange={(e) => setPostData({ ...postData, useCase: e.target.value })}
                        className={classes.field}
                        placeholder="Where is this algorithm commonly used?"
                    />
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Button onClick={clear} className={classes.clearBtn}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" className={classes.submitBtn}>
                        {currentId ? 'Update' : 'Create Entry'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default Form;