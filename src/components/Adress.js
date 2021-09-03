import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      opacity: 0.93,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 6,
      marginTop: 5,
    },
    typ: {
      padding: 3,
    }
  });

function Adress({adress}) {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {adress.payload_id}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {adress.nationality}
                    </Typography>
                    <Typography className={classes.typ} variant="body2" component="p">
                        {adress.manufacturer && "Manufacturer: " + adress.manufacturer}       
                    </Typography>
                    <Typography className={classes.typ} variant="body2" component="p">
                        {adress.customers[0] && "Customer: " + adress.customers[0]}       
                    </Typography>
                    <Typography className={classes.typ} variant="body2" component="p">
                        {adress.payload_type && "Type: " + adress.payload_type }
                    </Typography>
                    <Typography className={classes.typ} variant="body2" component="p">
                        {adress.payload_mass_kg && "Mass(kg): " + adress.payload_mass_kg}
                    </Typography>
                    <Typography className={classes.typ} variant="body2" component="p">
                        {adress.orbit && "Orbit: " + adress.orbit}
                    </Typography>
                </CardContent>
            </Card> 
        </>
    )
}

export default Adress
 