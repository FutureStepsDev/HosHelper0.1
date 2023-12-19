
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models/index');  
const hospitalRoutes = require('./routes/HospitalRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());
app.use('/api', hospitalRoutes);
// Authenticate sequelize instance
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');

    // Sync models with the database
    return db.sequelize.sync();
  })
  .then(() => {
    console.log('Models synchronized with the database.');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
