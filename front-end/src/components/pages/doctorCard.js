import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";
import Appointment from './Appointment';
import { useDispatch } from "react-redux";
import {setDocUser} from "../Features/docUser"
import { setUser } from "../Features/User";
import "./Doctor.css"

const useStyles = makeStyles({
    root: {
       width: 190,
       height: 254,
       background: '#D3D3D3',
       borderRadius: 15,
       boxShadow: '1px 5px 60px 0px #100a886b',
       position: 'relative',
    },
    borderTop: {
       width: '60%',
       height: 3,
       background: '#6b64f3',
       margin: 'auto',
       borderRadius: '0px 0px 15px 15px',
    },
    cardContent: {
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       height: 'calc(100% - 63px)',
    },
    textTitle: {
       fontWeight: 600,
       color: 'white',
       textAlign: 'center',
       display: 'block',
       paddingTop: 10,
       fontSize: 16,
    },
    textBody: {
       fontWeight: 400,
       color: 'white',
       textAlign: 'center',
       paddingTop: 3,
       fontSize: 12,
    },
    button: {
       position: 'absolute',
       bottom: 0,
       margin: 'auto',
       left: '50%',
       transform: 'translate(-50%, 50%)',
       width: '70%',
       borderRadius: 8,
       padding: '8px 25px',
       background: '#6b64f3',
       color: 'white',
       fontWeight: 100,
       '&:hover': {
         background: '#534bf3',
       },
    },
   });
   function DoctorCard({ doctor }) {
      const dispatch = useDispatch()
    const classes = useStyles();
   
    const navigate = useNavigate();

    const handleAppointmentClick = (path) => {
        dispatch(setDocUser(doctor));   
        navigate(path);
     };
   
    return (
      <div className="doctor-card">
       <Card className={classes.root}>
         <div className={classes.borderTop}></div>
         <CardContent className={classes.cardContent}>
           <Typography className={classes.textTitle} component="h2" variant="h6">
             {doctor.UserName}
           </Typography>
           <Typography className={classes.textBody} component="p" variant="body2">
             {doctor.specification}
           </Typography>
         </CardContent>
         <Button className={classes.button} onClick={(e)=>{handleAppointmentClick("/appointments")}}>Appointment</Button>
       </Card>
       </div>
    );
   }
   

   export default DoctorCard;