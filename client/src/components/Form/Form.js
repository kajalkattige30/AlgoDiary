import React, { useState, useEffect } from 'react';
import {
    TextField, Button, Typography, Dialog, DialogTitle,
    DialogContent, DialogActions, IconButton, Divider
} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const ALGO_INITIAL = {
    entryType: 'algorithm',
    algoName: '', timeComplexity: '', spaceComplexity: '', description: '', useCase: '',
    bruteForce: '', optimalApproach: '', complexityImprovement: ''
};

const PATTERN_INITIAL = {
    entryType: 'pattern',
    patternName: '', description: '', whenToUse: '',
    inputStructures: '', relatedAlgorithms: '', exampleProblems: '',
    bruteForce: '', optimalApproach: '', complexityImprovement: ''
};

const Form = ({ currentId, setCurrentId, open, handleClose }) => {
    const [postData, setPostData] = useState(ALGO_INITIAL);
    const post = useSelector((state) =>
        currentId ? state.posts.find((p) => p._id === currentId) : null
    );
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) {
            setPostData({ ...post, entryType: post.entryType || 'algorithm' });
        }
    }, [post]);

    const handleTypeChange = (_, newType) => {
        if (!newType) return; // don't allow de-selecting
        if (newType === 'algorithm') {
            setPostData(ALGO_INITIAL);
        } else {
            setPostData(PATTERN_INITIAL);
        }
    };

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
        setPostData(ALGO_INITIAL);
        handleClose();
    };

    const entryType = postData.entryType || 'algorithm';

    const dialogTitle = () => {
        if (currentId) {
            const name = entryType === 'pattern' ? post?.patternName : post?.algoName;
            return `Editing "${name}"`;
        }
        return '📝 New Diary Entry';
    };

    return (
        <Dialog open={open} onClose={clear} maxWidth="sm" fullWidth classes={{ paper: classes.dialogPaper }}>
            <DialogTitle disableTypography className={classes.dialogTitle}>
                <Typography variant="h5" className={classes.titleText}>
                    {dialogTitle()}
                </Typography>
                <IconButton onClick={clear} className={classes.closeButton}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <DialogContent className={classes.dialogContent}>
                    {/* Entry Type Toggle */}
                    <div className={classes.typeToggleWrap}>
                        <ToggleButtonGroup
                            value={entryType}
                            exclusive
                            onChange={handleTypeChange}
                            className={classes.typeToggle}
                            size="small"
                        >
                            <ToggleButton value="algorithm" className={classes.toggleButton}>
                                📊&nbsp; Algorithm
                            </ToggleButton>
                            <ToggleButton value="pattern" className={classes.toggleButton}>
                                🧩&nbsp; Pattern
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>

                    {/* ─── Algorithm Fields ─── */}
                    {entryType === 'algorithm' && (
                        <>
                            <TextField
                                name="algoName" variant="outlined" label="Algorithm Name"
                                fullWidth value={postData.algoName || ''}
                                onChange={(e) => setPostData({ ...postData, algoName: e.target.value })}
                                className={classes.field}
                            />
                            <TextField
                                name="timeComplexity" variant="outlined" label="Time Complexity"
                                fullWidth value={postData.timeComplexity || ''}
                                onChange={(e) => setPostData({ ...postData, timeComplexity: e.target.value })}
                                className={classes.field}
                                placeholder="e.g. O(log n)"
                            />
                            <TextField
                                name="spaceComplexity" variant="outlined" label="Space Complexity"
                                fullWidth value={postData.spaceComplexity || ''}
                                onChange={(e) => setPostData({ ...postData, spaceComplexity: e.target.value })}
                                className={classes.field}
                                placeholder="e.g. O(1)"
                            />
                            <TextField
                                name="description" variant="outlined" label="Description"
                                fullWidth multiline rows={3}
                                value={postData.description || ''}
                                onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                                className={classes.field}
                                placeholder="What does this algorithm do?"
                            />
                            <TextField
                                name="useCase" variant="outlined" label="Use Case"
                                fullWidth multiline rows={2}
                                value={postData.useCase || ''}
                                onChange={(e) => setPostData({ ...postData, useCase: e.target.value })}
                                className={classes.field}
                                placeholder="Where is this algorithm commonly used?"
                            />
                        </>
                    )}

                    {/* ─── Pattern Fields ─── */}
                    {entryType === 'pattern' && (
                        <>
                            <TextField
                                name="patternName" variant="outlined" label="Pattern Name"
                                fullWidth value={postData.patternName || ''}
                                onChange={(e) => setPostData({ ...postData, patternName: e.target.value })}
                                className={classes.field}
                                placeholder="e.g. Sliding Window, Two Pointer"
                            />
                            <TextField
                                name="description" variant="outlined" label="Description"
                                fullWidth multiline rows={2}
                                value={postData.description || ''}
                                onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                                className={classes.field}
                                placeholder="What is this pattern about?"
                            />
                            <TextField
                                name="whenToUse" variant="outlined" label="When to Use"
                                fullWidth multiline rows={2}
                                value={postData.whenToUse || ''}
                                onChange={(e) => setPostData({ ...postData, whenToUse: e.target.value })}
                                className={classes.field}
                                placeholder="What problem cues suggest this pattern?"
                            />
                            <TextField
                                name="inputStructures" variant="outlined" label="Input Data Structures"
                                fullWidth value={postData.inputStructures || ''}
                                onChange={(e) => setPostData({ ...postData, inputStructures: e.target.value })}
                                className={classes.field}
                                placeholder="e.g. array, string, linked list (comma-separated)"
                            />
                            <TextField
                                name="relatedAlgorithms" variant="outlined" label="Related Algorithms"
                                fullWidth value={postData.relatedAlgorithms || ''}
                                onChange={(e) => setPostData({ ...postData, relatedAlgorithms: e.target.value })}
                                className={classes.field}
                                placeholder="e.g. Kadane's Algorithm, Merge Sort"
                            />
                            <TextField
                                name="exampleProblems" variant="outlined" label="Example Problems"
                                fullWidth multiline rows={2}
                                value={postData.exampleProblems || ''}
                                onChange={(e) => setPostData({ ...postData, exampleProblems: e.target.value })}
                                className={classes.field}
                                placeholder="e.g. Maximum Subarray, Longest Substring Without Repeating Characters"
                            />
                        </>
                    )}

                    {/* ─── Insights Section (shared) ─── */}
                    <Divider className={classes.sectionDivider} />
                    <Typography className={classes.sectionHeading}>
                        💡 Insights
                    </Typography>
                    <TextField
                        name="bruteForce" variant="outlined" label="Brute Force Approach"
                        fullWidth multiline rows={2}
                        value={postData.bruteForce || ''}
                        onChange={(e) => setPostData({ ...postData, bruteForce: e.target.value })}
                        className={classes.field}
                        placeholder="What brute force approach did you try first?"
                    />
                    <TextField
                        name="optimalApproach" variant="outlined" label="Why This Is Optimal"
                        fullWidth multiline rows={2}
                        value={postData.optimalApproach || ''}
                        onChange={(e) => setPostData({ ...postData, optimalApproach: e.target.value })}
                        className={classes.field}
                        placeholder="How does this algorithm/pattern improve on the brute force?"
                    />
                    <TextField
                        name="complexityImprovement" variant="outlined" label="Complexity Improvement"
                        fullWidth multiline rows={2}
                        value={postData.complexityImprovement || ''}
                        onChange={(e) => setPostData({ ...postData, complexityImprovement: e.target.value })}
                        className={classes.field}
                        placeholder="e.g. Brute force O(n²) → Optimal O(n log n), Space O(n) → O(1)"
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