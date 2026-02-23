import React from 'react';
import {
    Card, CardActions, CardContent, Button, Typography,
    IconButton, Divider, Chip, Box
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SpeedIcon from '@material-ui/icons/Speed';
import MemoryIcon from '@material-ui/icons/Memory';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card} elevation={0}>
            {/* Header — date/time + edit */}
            <div className={classes.header}>
                <div className={classes.dateRow}>
                    <AccessTimeIcon className={classes.dateIcon} />
                    <div>
                        <Typography className={classes.date}>
                            {moment(post.createdAt).format('MMMM D, YYYY')}
                        </Typography>
                        <Typography className={classes.time}>
                            {moment(post.createdAt).format('h:mm A')}
                        </Typography>
                    </div>
                </div>
                <IconButton size="small" className={classes.editBtn} onClick={() => setCurrentId(post._id)}>
                    <EditIcon fontSize="small" />
                </IconButton>
            </div>

            {/* Title */}
            <div className={classes.titleSection}>
                <Typography className={classes.algoName} variant="h5">
                    {post.algoName}
                </Typography>
            </div>

            <Divider className={classes.divider} />

            {/* Complexity chips */}
            <div className={classes.complexitySection}>
                <Chip
                    icon={<SpeedIcon className={classes.chipIcon} />}
                    label={`Time: ${post.timeComplexity || '—'}`}
                    className={classes.chipTime}
                    size="small"
                />
                <Chip
                    icon={<MemoryIcon className={classes.chipIcon} />}
                    label={`Space: ${post.spaceComplexity || '—'}`}
                    className={classes.chipSpace}
                    size="small"
                />
            </div>

            {/* Description section */}
            <CardContent className={classes.descriptionSection}>
                <Typography className={classes.sectionLabel}>Description</Typography>
                <Typography className={classes.descriptionText}>
                    {post.description || 'No description provided.'}
                </Typography>
            </CardContent>

            {/* Use Case section */}
            {post.useCase && (
                <Box className={classes.useCaseSection}>
                    <EmojiObjectsIcon className={classes.useCaseIcon} />
                    <div>
                        <Typography className={classes.sectionLabel}>Use Case</Typography>
                        <Typography className={classes.useCaseText}>
                            {post.useCase}
                        </Typography>
                    </div>
                </Box>
            )}

            <Divider className={classes.divider} />

            {/* Footer */}
            <CardActions className={classes.cardActions}>
                <Typography className={classes.relativeTime}>
                    {moment(post.createdAt).fromNow()}
                </Typography>
                <Button
                    size="small"
                    className={classes.deleteBtn}
                    onClick={() => dispatch(deletePost(post._id))}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;