// PharmacyTable.js
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';
const PharmacyTable = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [editingPharmacyId, setEditingPharmacyId] = useState(null);
  const [editedPharmacyName, setEditedPharmacyName] = useState('');
  const [editedAddress, setEditedAddress] = useState('');
  const [editedTel, setEditedTel] = useState('');

  useEffect(() => {
    fetch('http://localhost:7000/api/getPharmacy') 
      .then((response) => response.json())
      .then((data) => setPharmacies(data))
      .catch((error) => console.error('Error fetching pharmacies:', error));
  }, []);

  const handleUpdate = (pharmacyId) => {
    setEditingPharmacyId(pharmacyId);
    const pharmacyToEdit = pharmacies.find((pharmacy) => pharmacy.id === pharmacyId);
    setEditedPharmacyName(pharmacyToEdit.name);
    setEditedAddress(pharmacyToEdit.address);
    setEditedTel(pharmacyToEdit.tel);
  };

  const handleSaveUpdate = () => {
    fetch(`http://localhost:7000/api/updatePharmacy/${editingPharmacyId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: editedPharmacyName,
        address: editedAddress,
        tel: editedTel,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Pharmacy updated successfully:', data);
        setEditingPharmacyId(null);
        setPharmacies(
          pharmacies.map((pharmacy) =>
            pharmacy.id === editingPharmacyId
              ? { ...pharmacy, name: editedPharmacyName, address: editedAddress, tel: editedTel }
              : pharmacy
          )
        );
      })
      .catch((error) => console.error('Error updating pharmacy:', error));
  };

  const handleCancelUpdate = () => {
    setEditingPharmacyId(null);
  };

  const handleDelete = (pharmacyId) => {
    fetch(`http://localhost:7000/api/deletePharmacy/${pharmacyId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Pharmacy deleted successfully:', data);
        setPharmacies(pharmacies.filter((pharmacy) => pharmacy.id !== pharmacyId));
      })
      .catch((error) => console.error('Error deleting pharmacy:', error));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Tel</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pharmacies.map((pharmacy) => (
            <TableRow key={pharmacy.id}>
              <TableCell>{pharmacy.id}</TableCell>
              <TableCell>
                {editingPharmacyId === pharmacy.id ? (
                  <TextField value={editedPharmacyName} onChange={(e) => setEditedPharmacyName(e.target.value)} />
                ) : (
                  pharmacy.name
                )}
              </TableCell>
              <TableCell>
                {editingPharmacyId === pharmacy.id ? (
                  <TextField value={editedAddress} onChange={(e) => setEditedAddress(e.target.value)} />
                ) : (
                  pharmacy.address
                )}
              </TableCell>
              <TableCell>
                {editingPharmacyId === pharmacy.id ? (
                  <TextField value={editedTel} onChange={(e) => setEditedTel(e.target.value)} />
                ) : (
                  pharmacy.tel
                )}
              </TableCell>
              <TableCell>
                {editingPharmacyId === pharmacy.id ? (
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
                    <Button variant="outlined" onClick={() => handleUpdate(pharmacy.id)}>
                      Update
                    </Button>
                    <Button variant="outlined" onClick={() => handleDelete(pharmacy.id)}>
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

export default PharmacyTable;
