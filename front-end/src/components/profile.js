import React from "react";
import { Avatar, Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  name: {
    marginTop: theme.spacing(2),
  },
}));

const Profile = ({ name, imageUrl, bio }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      <Avatar alt="Profile Image" src={imageUrl} className={classes.avatar} />
      <Typography variant="h6" className={classes.name}>
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {bio}
      </Typography>
    </Paper>
  );
};

// Example user
const UserProfile = () => {
  const user = {
    name: "John Doe",
    imageUrl: "https://placekitten.com/200/200",
    bio: "Web Developer | React Enthusiast",
  };

  return <Profile {...user} />;
};

export default Profile;
