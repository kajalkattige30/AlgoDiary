import React, { useState } from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const FILTERS = [
    { key: 'all', label: 'All' },
    { key: 'algorithm', label: '📊 Algorithm' },
    { key: 'pattern', label: '🧩 Pattern' },
];

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const [filter, setFilter] = useState('all');
    const classes = useStyles();

    const filteredPosts = filter === 'all'
        ? posts
        : posts.filter((p) => (p.entryType || 'algorithm') === filter);

    return (
        !posts.length ? <CircularProgress /> : (
            <>
                {/* Filter Bar */}
                <div className={classes.filterBar}>
                    {FILTERS.map((f) => (
                        <button
                            key={f.key}
                            className={`${classes.filterButton} ${filter === f.key ? classes.filterButtonActive : ''}`}
                            onClick={() => setFilter(f.key)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {filteredPosts.length === 0 ? (
                    <div className={classes.noPostsContainer}>
                        <Typography className={classes.noPostsText}>
                            No {filter} entries yet.
                        </Typography>
                    </div>
                ) : (
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {filteredPosts.map((post) => (
                            <Grid key={post._id} item xs={12} sm={6}>
                                <Post post={post} setCurrentId={setCurrentId} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </>
        )
    );
}

export default Posts;