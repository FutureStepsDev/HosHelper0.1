import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const SignUp = () => {
  const [UserName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

//   const handleAddUser = async () => {
//     try {
//      const res= await axios.post('http://localhost:7000/auth/signup', {
      
//   UserName,
//   email,
//   password,
//   role,
//   image
// });
// res.data && window.location.replace("/signin");
//     } catch (err) {
//       console.error('Error adding user:', err);

//       if (err.response?.data?.error) {
//         setError(err.response.data.error);
//       } else {
//         setError('An error occurred. Please try again.');
//       }
//     }
//   };
const handleAddUser = async (e) => {
  setError(false)
  e.preventDefault()

  try {
    const res = await axios.post("http://localhost:7000/api/signup", {
      UserName,
      email,
      password,
      role,
      image
    })
  res.data && window.location.replace("/login")
  console.log(role)
  } catch (error) {
    setError(true)
  }}

  const validatePassword = () => {
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const validateRole = () => {
    if (!role) {
      setError('Role is required');
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (email.trim() === '') {
      setError('Email is required');
      return false;
    }
    return true;
  };
 
  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '10px', borderRadius: '10px', marginTop: '50px', color: 'white' }}>
      <Typography variant="h4" gutterBottom>
        SignUp
      </Typography>
      {error && <Typography variant="body2" style={{ color: 'red', marginBottom: '10px' }}>{error}</Typography>}
      <TextField
        fullWidth
        margin="normal"
        label={UserName.trim() === '' ? ' UserName' : ''}
        type="text"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
        InputProps={{
          style: { backgroundColor: 'white', color: '#0C2340' },
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label={email.trim() === '' ? 'Email' : ''}
        type="email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          style: { backgroundColor: 'white', color: '#0C2340' },
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        label={password.trim() === '' ? 'Password' : ''}
        type="password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          style: { backgroundColor: 'white', color: '#0C2340' },
        }}
      />

      <label htmlFor="role" style={{ color: 'white', marginBottom: '10px' }}>Role:</label>
      <select
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ width: '100%', padding: '8px', backgroundColor: 'white', color: '#0C2340' }}
      >
         <option value=""></option>
        <option value="Patient">Patient</option>
        <option value="Pharmacy">Pharmacy</option>
        <option value="Doctor">Doctor</option>
      </select>
   
      <TextField
      
        fullWidth
        margin="normal"
        label="Image URL"
        type="text"
        onChange={(e) => setImage(e.target.value)}
        InputProps={{
          style: { backgroundColor: 'white', color: '#0C2340' },
        }}
      />

      <Button
        onClick={(e) => {
          setError('');

          if (validateEmail() && validatePassword() && validateRole()) {
            handleAddUser(e);
          }
        }}
        variant="contained"
        style={{ backgroundColor: '#5A4FCF', color: 'white', marginTop: '10px' }}
        fullWidth
      >
        Submit
        
      </Button>
     
    </Container>
  );
};

export default SignUp;