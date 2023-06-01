import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 0,
        color: 'white'
    },
    box: {
        height: 360,
        fontSize: 26,
        paddingTop: 3,
        marginTop: 50,
        color: '#0d0c0c',
        width: 350,
        margin: '0 auto',
        backgroundColor: '#fffff',
        textAlign: 'center',
    },
    text: {
        width: '110%',
    },
    btn: {
        width: '14%',
        height: '12%',
    }
}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar />
            <Paper elevation={3} className={classes.box}>
                <h4>
                    Login
                </h4>
                <form className={classes.text} noValidate autoComplete="off">
                    <TextField label="Enter Username" color="secondary" />
                    <TextField label="Enter Password" color="secondary" />
                </form>
                <br />
                <Button variant="contained" className={classes.btn} color="primary">
                    Login
                </Button>
                <br />
                <br />
                <CircularProgress value={50} />
                <br />
                <br />
                <br />
            </Paper>
        </div>
    );
}