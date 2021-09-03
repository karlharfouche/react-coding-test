import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      opacity: 0.93,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function Event({event}) {
    const classes = useStyles();
    
    const handleClick = () => {
        window.open(`${event.links.article}`)
    }

    return (
        <>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {event.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {event.event_date_utc}
                </Typography>
                <Typography variant="body2" component="p">
                    {event.details}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container justifyContent="center" alignItems="center">
                    <Button size="small" onClick={handleClick}>Learn More</Button>
                </Grid>
            </CardActions>
        </Card>   
        </>
    )
}

export default Event
