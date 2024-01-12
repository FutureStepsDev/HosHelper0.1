import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import "./Profile.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PersonalProfile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data.data);

  const [profil, setProfil] = useState({});

  console.log(user);
  useEffect(() => {
    setProfil(user);
  }, [user]);

  return (
    <div className="profilContainer ">
      <section className="vh-100">
        <Container className="py-5 h-100">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="h-100"
          >
            {/* Partie Gauche */}
            <Grid item md={4}>
              <Card
                className="mb-3"
                style={{
                  width: "300px",
                  height: "670px",
                  borderRadius: ".5rem",
                  borderTopLeftRadius: ".5rem",
                  borderBottomLeftRadius: ".5rem",
                }}
              >
                <Grid container>
                  <div
                    className="gradient-custom text-center text-white"
                    style={{
                      width: "300px",
                      height: "700px",
                    }}
                  >
                    <Avatar
                      src={profil.image}
                      alt="Avatar"
                      className="my-5"
                      style={{
                        width: "200px",
                        height: "180px",
                        marginLeft: "50px",
                        marginTop: "20px",
                      }}
                    />
                    <Typography variant="h6" style={{ marginTop: "50px" }}>
                      Name : {profil.UserName}
                    </Typography>
                    <Typography variant="h6" style={{ marginTop: "50px" }}>
                      Role : {profil.role}
                    </Typography>
                    <IconButton style={{ marginTop: "50px" }}>
                      <button
                        className="create"
                        onClick={() => navigate("/UpdateProfil")}
                      >
                        <span>Update profil</span>
                      </button>
                    </IconButton>
                    <IconButton style={{ marginTop: "50px" }}>
                      <button
                        className="create"
                        onClick={() => navigate("/appointmentsList")}
                      >
                        <span>My Appointments</span>
                      </button>
                    </IconButton>
                    {profil.role === "Pharmacy" && (
                      <IconButton style={{ marginTop: "30px" }}>
                        <button
                          className="create"
                          onClick={() => navigate("/mypharmacy")}
                        >
                          <span>my pharmacy</span>
                        </button>
                      </IconButton>
                    )}
                    {profil.role === "Pharmacy" && (
                      <div>
                        <IconButton style={{ marginTop: "30px" }}>
                          <button
                            className="create"
                            onClick={() => navigate("/addpharmacy")}
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                  fill="currentColor"
                                  d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                                ></path>
                              </svg>
                              add your pharmacy
                            </span>
                          </button>
                        </IconButton>
                      </div>
                    )}
                  </div>
                </Grid>
              </Card>
            </Grid>

            {/* Partie Droite */}
            <Grid item md={8}>
              <Card style={{ borderRadius: "5rem" }}>
                <CardContent style={{ background: "whitesmoke" }}>
                  <Typography
                    variant="h6"
                    style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
                  >
                    Information
                  </Typography>
                  <hr className="mt-0 mb-4" />

                  <div style={{ marginTop: "2rem" }}>
                    <Typography variant="body2" style={{ lineHeight: "1.8" }}>
                      <strong style={{ color: "#1da1f2" }}>Email:</strong>{" "}
                      {profil.email}
                    </Typography>
                  </div>

                  {profil.role === "Pharmacy" && (
                    <div style={{ marginTop: "1rem" }}>
                      <Typography variant="body2" style={{ lineHeight: "1.8" }}>
                        <strong style={{ color: "#1da1f2" }}>Adresse:</strong>{" "}
                        {profil.adress}
                      </Typography>
                    </div>
                  )}

                  <div style={{ marginTop: "1rem" }}>
                    <Typography variant="body2" style={{ lineHeight: "1.8" }}>
                      <strong style={{ color: "#1da1f2" }}>Phone:</strong>
                      {profil.tel}
                    </Typography>
                  </div>

                  {profil.role === "Patient" && (
                    <div style={{ marginTop: "1rem" }}>
                      <Typography variant="body2" style={{ lineHeight: "1.8" }}>
                        <strong style={{ color: "#1da1f2" }}>Gender:</strong>{" "}
                        {profil.Gender}
                      </Typography>
                    </div>
                  )}

                  {profil.role === "Patient" && (
                    <div style={{ marginTop: "1rem" }}>
                      <Typography variant="body2" style={{ lineHeight: "1.8" }}>
                        <strong style={{ color: "#1da1f2" }}>Weight:</strong>{" "}
                        {profil.Weight} kg
                      </Typography>
                    </div>
                  )}

                  <div
                    className="d-flex justify-content-start"
                    style={{ marginTop: "2rem" }}
                  >
                    <IconButton href="#!" style={{ color: "#1877f2" }}>
                      <Facebook fontSize="large" />
                    </IconButton>
                    <IconButton href="#!" style={{ color: "#1da1f2" }}>
                      <Twitter fontSize="large" />
                    </IconButton>
                    <IconButton href="#!" style={{ color: "#e4405f" }}>
                      <Instagram fontSize="large" />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default PersonalProfile;
