import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';

const HospitalTable = () => {
  const [hospitals, setHospitals] = useState([]);
  const [editingHospitalId, setEditingHospitalId] = useState(null);
  const [editedHospitalName, setEditedHospitalName] = useState('');
  const [editedAddress, setEditedAddress] = useState('');
  const [editedPhone, setEditedPhone] = useState('');
  const [editedFax, setEditedFax] = useState('');
  const [editedEmergency, setEditedEmergency] = useState('');
  const [editedWebsites, setEditedWebsites] = useState('');
  const [editedImageUrl, setEditedImageUrl] = useState('');

  useEffect(() => {
    fetch('http://localhost:7000/api/gethospitals')
      .then((response) => response.json())
      .then((data) => setHospitals(data))
      .catch((error) => console.error('Error fetching hospitals:', error));
  }, []);

  const handleUpdate = (hospitalId) => {
    setEditingHospitalId(hospitalId);
    const hospitalToEdit = hospitals.find((hospital) => hospital.id === hospitalId);
    setEditedHospitalName(hospitalToEdit.hospitalName);
    setEditedAddress(hospitalToEdit.address);
    setEditedPhone(hospitalToEdit.phone);
    setEditedFax(hospitalToEdit.fax);
    setEditedEmergency(hospitalToEdit.emergency);
    setEditedWebsites(hospitalToEdit.websites);
    setEditedImageUrl(hospitalToEdit.imageUrl);
  };

  const handleSaveUpdate = () => {
    fetch(`http://localhost:7000/api/updateHospitals/${editingHospitalId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hospitalName: editedHospitalName,
        address: editedAddress,
        phone: editedPhone,
        fax: editedFax,
        emergency: editedEmergency,
        websites: editedWebsites,
        imageUrl: editedImageUrl,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Hospital updated successfully:', data);
        setEditingHospitalId(null);
        setHospitals(
          hospitals.map((hospital) =>
            hospital.id === editingHospitalId
              ? {
                  ...hospital,
                  hospitalName: editedHospitalName,
                  address: editedAddress,
                  phone: editedPhone,
                  fax: editedFax,
                  emergency: editedEmergency,
                  websites: editedWebsites,
                  imageUrl: editedImageUrl,
                }
              : hospital
          )
        );
      })
      .catch((error) => console.error('Error updating hospital:', error));
  };

  const handleCancelUpdate = () => {
    setEditingHospitalId(null);
  };

  const handleDelete = (hospitalId) => {
    fetch(`http://localhost:7000/api/deleteHospitals/${hospitalId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Hospital deleted successfully:', data);
        setHospitals(hospitals.filter((hospital) => hospital.id !== hospitalId));
      })
      .catch((error) => console.error('Error deleting hospital:', error));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Hospital Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Fax</TableCell>
            <TableCell>Emergency</TableCell>
            <TableCell>Websites</TableCell>
            <TableCell>Image URL</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hospitals.map((hospital) => (
            <TableRow key={hospital.id}>
              <TableCell>{hospital.id}</TableCell>
              <TableCell>
                {editingHospitalId === hospital.id ? (
                  <TextField
                    value={editedHospitalName}
                    onChange={(e) => setEditedHospitalName(e.target.value)}
                  />
                ) : (
                  hospital.hospitalName
                )}
              </TableCell>
              <TableCell>
                {editingHospitalId === hospital.id ? (
                  <TextField value={editedAddress} onChange={(e) => setEditedAddress(e.target.value)} />
                ) : (
                  hospital.address
                )}
              </TableCell>
              <TableCell>
                {editingHospitalId === hospital.id ? (
                  <TextField value={editedPhone} onChange={(e) => setEditedPhone(e.target.value)} />
                ) : (
                  hospital.phone
                )}
              </TableCell>
              <TableCell>
                {editingHospitalId === hospital.id ? (
                  <TextField value={editedFax} onChange={(e) => setEditedFax(e.target.value)} />
                ) : (
                  hospital.fax
                )}
              </TableCell>
              <TableCell>
                {editingHospitalId === hospital.id ? (
                  <TextField value={editedEmergency} onChange={(e) => setEditedEmergency(e.target.value)} />
                ) : (
                  hospital.emergency
                )}
              </TableCell>
              <TableCell>
                {editingHospitalId === hospital.id ? (
                  <TextField value={editedWebsites} onChange={(e) => setEditedWebsites(e.target.value)} />
                ) : (
                  hospital.websites
                )}
              </TableCell>
              <TableCell>
                {editingHospitalId === hospital.id ? (
                  <TextField value={editedImageUrl} onChange={(e) => setEditedImageUrl(e.target.value)} />
                ) : (
                  hospital.imageUrl
                )}
              </TableCell>
              <TableCell>
                {editingHospitalId === hospital.id ? (
                  <>
                    <Button variant="outlined" onClick={handleSaveUpdate}>
                      Save
                    </Button>
                    <Button variant="outlined" onClick={handleCancelUpdate}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outlined" onClick={() => handleUpdate(hospital.id)}>
                      Update
                    </Button>
                    <Button variant="outlined" onClick={() => handleDelete(hospital.id)}>
                      Delete
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HospitalTable;
