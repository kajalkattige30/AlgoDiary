import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
// import algorithms from '../../../images/algo.png';

import { deletePost } from '../../../actions/posts';
// import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} timeComplexity = {post.timeComplexity} spaceComplexity = {post.spaceComplexity} description = {post.description} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.algoName}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                {/* <img className={classes.image} src={algorithms} alt="icon" height="200" /> */}
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <Typography className={classes.timeComplexity} variant="h6" gutterBottom>{post.timeComplexity}</Typography>
            <Typography className={classes.spaceComplexity} variant="h6" gutterBottom>{post.spaceComplexity}</Typography>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" >{post.description}</Typography>
                
            </CardContent>
            <CardActions className={classes.cardActions}>
                {/* <Button size="small" color="primary" onClick={() => }>
                    <ThumbUpAltIcon fontSize="small" />

                </Button> */}
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id)) }>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;