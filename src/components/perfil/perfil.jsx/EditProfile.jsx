import React, { useState } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Grid,
  Paper
} from '@mui/material';

function EditProfile() {
  const [name, setName] = useState('João da Silva');
  const [email] = useState('joao@email.com'); // Email não editável
  const [profilePic, setProfilePic] = useState('/static/images/avatar/2.jpg');
  const [newPic, setNewPic] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setNewPic(imgUrl);
    }
  };

  const handleSave = () => {
    if (newPic) {
      setProfilePic(newPic);
    }
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 8, p: 4, borderRadius: 4 }}>
        <Typography component="h1" variant="h5" gutterBottom>
          Editar Perfil
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Avatar
            alt="Foto de perfil"
            src={newPic || profilePic}
            sx={{ width: 100, height: 100 }}
          />
          <Button variant="outlined" component="label">
            Trocar foto
            <input hidden accept="image/*" type="file" onChange={handleImageChange} />
          </Button>
        </Box>

        <Box component="form" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome"
                value={name}
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="E-mail"
                value={email}
                disabled
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={handleSave}
          >
            Salvar Alterações
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default EditProfile;
