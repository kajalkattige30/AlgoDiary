import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const [formOpen, setFormOpen] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const handleEdit = (id) => {
        setCurrentId(id);
        setFormOpen(true);
    };

    const handleClose = () => {
        setFormOpen(false);
        setCurrentId(null);
    };

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h3" align="center">
                    AlgoDiary
                </Typography>
            </AppBar>
            <Grow in>
                <Container maxWidth="lg" disableGutters>
                    <Posts setCurrentId={handleEdit} />
                </Container>
            </Grow>
            <Fab className={classes.fab} onClick={() => { setCurrentId(null); setFormOpen(true); }}>
                <AddIcon />
            </Fab>
            <Form currentId={currentId} setCurrentId={setCurrentId} open={formOpen} handleClose={handleClose} />
        </Container>
    );
}

export default App;