import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import Map from "./Map"; // Import your Map component
const HospitalDetails = () => {
  const { hospitalName } = useParams();
  const hospitals = useSelector((state) => state.hospitals.data);
  const selectedHospital = hospitals.find(
    (hospital) => hospital.hospitalName === hospitalName
  );
  return (
    <div>
      {selectedHospital && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card
              sx={{
                color: "#000",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "row",
                height: "100%",
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  {selectedHospital.hospitalName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Address:</strong> {selectedHospital.address}
                  <br />
                  <strong>Phone:</strong> {selectedHospital.phone}
                  <br />
                  <strong>Emergency:</strong> {selectedHospital.emergency}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                alt={selectedHospital.hospitalName}
                height="400"
                image={selectedHospital.imageUrl}
                sx={{ width: "100%", objectFit: "cover" }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                height: "100%",
              }}
            >
              <CardContent>
                <Map address={selectedHospital.address} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
export default HospitalDetails;
