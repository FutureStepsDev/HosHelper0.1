import React from 'react';
import { Card, CardContent, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 root: {
    maxWidth: 600,
    margin: '0 auto',
    padding: theme.spacing(3, 0),
 },
 title: {
    color: theme.palette.primary.main,
    textAlign: 'center',
 },
 body: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: theme.palette.text.primary,
 },
 button: {
    display: 'block',
    margin: '2rem auto',
    width: '50%',
 },
}));

const AboutUs = () => {
 const classes = useStyles();

 return (
    <div>
        <br></br>
        <br></br>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography className={classes.body} variant="body1" paragraph>
          Welcome to Our Medical Appointment Platform. Here you can check the location and specialities of our partner hospitals, pharmacies, and medical centers. You can also view the list of available doctors and make appointments with them.
        </Typography>
        <Typography className={classes.body} variant="body1" paragraph>
          We have partnered with top hospitals and medical centers to provide you with the best healthcare services. Our team is dedicated to making your medical experience seamless and efficient.
        </Typography>
        {/* <Button className={classes.button} variant="contained" color="primary">
          Learn More
        </Button> */}
      </CardContent>
    </Card>
    </div>
    
 );
};

export default AboutUs;