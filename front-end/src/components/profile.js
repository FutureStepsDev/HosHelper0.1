import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Profile = ({ user }) => {
  return (
    <div>
      {user ? (
        <div>
          <Typography variant="h4" gutterBottom>
            Welcome, {user.UserName}!
          </Typography>
          <Button variant="contained">Logout</Button>
        </div>
      ) : (
        <div>
          <Typography variant="h4" gutterBottom>
            Profile Page
          </Typography>
          <Typography variant="body1">
            Please login to view your profile.
          </Typography>
        </div>
      )}
    </div>
  );
};
export default Profile;
