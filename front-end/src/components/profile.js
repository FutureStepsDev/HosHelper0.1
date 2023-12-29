import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";
import {
  Email,
  Phone,
  Edit,
  Facebook,
  Twitter,
  Instagram,
} from "@material-ui/icons";
import "./Profile.css";
import { useSelector } from "react-redux";
const PersonalProfile = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="profilContainer ">
      <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <Container className="py-5 h-100">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="h-100"
          >
            <Grid item lg={6} className="mb-4 mb-lg-0">
              <Card className="mb-3" style={{ borderRadius: ".5rem" }}>
                <Grid container className="g-0">
                  <Grid
                    item
                    md={4}
                    className="gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <Avatar
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="my-5"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <Typography variant="h5">{user.UserName}</Typography>
                    <Typography variant="subtitle1">{user.role}</Typography>
                    <IconButton>
                      <Edit />
                    </IconButton>
                  </Grid>
                  <Grid item md={8}>
                    <CardContent className="p-4">
                      <Typography variant="h6">Information</Typography>
                      <hr className="mt-0 mb-4" />
                      <Grid container spacing={1}>
                        <Grid item xs={6} className="mb-3">
                          <Typography variant="h6">Email</Typography>
                          <Typography variant="body2" className="text-muted">
                            info@example.com
                          </Typography>
                        </Grid>
                        <Grid item xs={6} className="mb-3">
                          <Typography variant="h6">Phone</Typography>
                          <Typography variant="body2" className="text-muted">
                            123 456 789
                          </Typography>
                        </Grid>
                      </Grid>

                      <Typography variant="h6">Information</Typography>
                      <hr className="mt-0 mb-4" />
                      <Grid container spacing={1}>
                        <Grid item xs={6} className="mb-3">
                          <Typography variant="h6">Email</Typography>
                          <Typography variant="body2" className="text-muted">
                            info@example.com
                          </Typography>
                        </Grid>
                        <Grid item xs={6} className="mb-3">
                          <Typography variant="h6">Phone</Typography>
                          <Typography variant="body2" className="text-muted">
                            123 456 789
                          </Typography>
                        </Grid>
                      </Grid>

                      <div className="d-flex justify-content-start">
                        <IconButton href="#!">
                          <Facebook fontSize="large" />
                        </IconButton>
                        <IconButton href="#!">
                          <Twitter fontSize="large" />
                        </IconButton>
                        <IconButton href="#!">
                          <Instagram fontSize="large" />
                        </IconButton>
                      </div>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default PersonalProfile;
