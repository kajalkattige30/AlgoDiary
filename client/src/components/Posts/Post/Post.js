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
import CategoryIcon from '@material-ui/icons/Category';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const entryType = post.entryType || 'algorithm';
    const isPattern = entryType === 'pattern';
    const title = isPattern ? post.patternName : post.algoName;

    // Parse comma-separated strings into arrays
    const inputChips = isPattern && post.inputStructures
        ? post.inputStructures.split(',').map(s => s.trim()).filter(Boolean)
        : [];

    const exampleList = isPattern && post.exampleProblems
        ? post.exampleProblems.split(',').map(s => s.trim()).filter(Boolean)
        : [];

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

            {/* Type badge + Title */}
            <div className={classes.titleSection}>
                <Chip
                    label={isPattern ? '🧩 Pattern' : '📊 Algorithm'}
                    size="small"
                    className={isPattern ? classes.typeBadgePattern : classes.typeBadgeAlgo}
                />
                <Typography className={classes.algoName} variant="h5">
                    {title || 'Untitled'}
                </Typography>
            </div>

            <Divider className={classes.divider} />

            {/* ─── Algorithm-specific sections ─── */}
            {!isPattern && (
                <>
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

                    {/* Description */}
                    <CardContent className={classes.descriptionSection}>
                        <Typography className={classes.sectionLabel}>Description</Typography>
                        <Typography className={classes.descriptionText}>
                            {post.description || 'No description provided.'}
                        </Typography>
                    </CardContent>

                    {/* Use Case */}
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
                </>
            )}

            {/* ─── Pattern-specific sections ─── */}
            {isPattern && (
                <>
                    {/* Input Data Structures chips */}
                    {inputChips.length > 0 && (
                        <div className={classes.complexitySection}>
                            {inputChips.map((chip, i) => (
                                <Chip
                                    key={i}
                                    icon={<CategoryIcon className={classes.chipIcon} />}
                                    label={chip}
                                    className={classes.inputChip}
                                    size="small"
                                />
                            ))}
                        </div>
                    )}

                    {/* Description */}
                    <CardContent className={classes.descriptionSection}>
                        <Typography className={classes.sectionLabel}>Description</Typography>
                        <Typography className={classes.descriptionText}>
                            {post.description || 'No description provided.'}
                        </Typography>
                    </CardContent>

                    {/* When to Use */}
                    {post.whenToUse && (
                        <Box className={classes.patternSection}>
                            <EmojiObjectsIcon className={classes.useCaseIcon} />
                            <div>
                                <Typography className={classes.sectionLabel}>When to Use</Typography>
                                <Typography className={classes.useCaseText}>
                                    {post.whenToUse}
                                </Typography>
                            </div>
                        </Box>
                    )}

                    {/* Related Algorithms */}
                    {post.relatedAlgorithms && (
                        <Box className={classes.patternSection}>
                            <div>
                                <Typography className={classes.sectionLabel}>Related Algorithms</Typography>
                                <Typography className={classes.useCaseText}>
                                    {post.relatedAlgorithms}
                                </Typography>
                            </div>
                        </Box>
                    )}

                    {/* Example Problems */}
                    {exampleList.length > 0 && (
                        <Box className={classes.exampleSection}>
                            <Typography className={classes.sectionLabel}>Example Problems</Typography>
                            <div className={classes.exampleList}>
                                {exampleList.map((problem, i) => (
                                    <Typography key={i} className={classes.exampleItem}>
                                        • {problem}
                                    </Typography>
                                ))}
                            </div>
                        </Box>
                    )}
                </>
            )}

            {/* ─── Insights Section (shared) ─── */}
            {(post.bruteForce || post.optimalApproach || post.complexityImprovement) && (
                <>
                    <Divider className={classes.divider} />
                    <Box className={classes.insightsSection}>
                        <Typography className={classes.insightsHeading}>💡 Insights</Typography>

                        {post.bruteForce && (
                            <div className={classes.insightRow}>
                                <span className={classes.insightMarker}>🔴</span>
                                <div>
                                    <Typography className={classes.insightLabel}>Brute Force</Typography>
                                    <Typography className={classes.insightText}>{post.bruteForce}</Typography>
                                </div>
                            </div>
                        )}

                        {post.optimalApproach && (
                            <div className={classes.insightRow}>
                                <span className={classes.insightMarker}>🟢</span>
                                <div>
                                    <Typography className={classes.insightLabel}>Optimal Approach</Typography>
                                    <Typography className={classes.insightText}>{post.optimalApproach}</Typography>
                                </div>
                            </div>
                        )}

                        {post.complexityImprovement && (
                            <div className={classes.insightRow}>
                                <span className={classes.insightMarker}>⚡</span>
                                <div>
                                    <Typography className={classes.insightLabel}>Complexity Improvement</Typography>
                                    <Typography className={classes.insightText}>{post.complexityImprovement}</Typography>
                                </div>
                            </div>
                        )}
                    </Box>
                </>
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