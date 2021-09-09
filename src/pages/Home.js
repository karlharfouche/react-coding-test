import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css'

const useStyles = makeStyles({
    h1: {
        fontFamily: 'Impact, fantasy',
        textShadow: '1px 1px 2px rgba(153, 31, 234, 0.66)',
        color: '#A400B6',
        lineHeight: 1.4,
        letterSpacing: '0px',
        wordSpacing: '1px',
        textAlign: 'center',
        textDecoration: 'none',
        textTransform: 'uppercase',
    },
  });

function Home() {
    const classes = useStyles();

    return (
        <>
                <div className="divhome">
                    <Typography className={classes.h1} variant="h1">
                        Welcome to SpaceX History and payloads
                    </Typography>
                </div>
        </>
    )
}

export default Home
