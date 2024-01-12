import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUserName, setEditedUserName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedRole, setEditedRole] = useState("");
  useEffect(() => { 
    fetch("http://localhost:7000/api/getAllUsers") 
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleUpdate = (userId) => {
    setEditingUserId(userId);
    const userToEdit = users.find((user) => user.id === userId);
    setEditedUserName(userToEdit.UserName);
    setEditedEmail(userToEdit.email);
    setEditedRole(userToEdit.role);
  };

  const handleSaveUpdate = () => {
    fetch(`http://localhost:7000/api/updateProfile/${editingUserId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName: editedUserName,
        email: editedEmail,
        role: editedRole,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User updated successfully:", data);
        setEditingUserId(null);
        setUsers(
          users.map((user) =>
            user.id === editingUserId
              ? {
                  ...user,
                  UserName: editedUserName,
                  email: editedEmail,
                  role: editedRole,
                }
              : user
          )
        );
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  const handleCancelUpdate = () => {
    setEditingUserId(null);
  };

  const handleDelete = (userId) => {
    fetch(`http://localhost:7000/api/deleteProfile/${userId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User deleted successfully:", data);
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                {editingUserId === user.id ? (
                  <TextField
                    value={editedUserName}
                    onChange={(e) => setEditedUserName(e.target.value)}
                  />
                ) : (
                  user.UserName
                )}
              </TableCell>
              <TableCell>
                {editingUserId === user.id ? (
                  <TextField
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </TableCell>
              <TableCell>
                {editingUserId === user.id ? (
                  <TextField
                    value={editedRole}
                    onChange={(e) => setEditedRole(e.target.value)}
                  />
                ) : (
                  user.role
                )}
              </TableCell>
              <TableCell>
                {editingUserId === user.id ? (
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
                    <Button
                      variant="outlined"
                      onClick={() => handleUpdate(user.id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleDelete(user.id)}
                    >
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

export default UserTable;
