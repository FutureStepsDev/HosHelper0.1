const db = require('./models/index');
const hospitalData = require('./Data/HospitalDatas');

async function seedData() {
  try {
    await db.sequelize.sync({ force: true }); 
    await db.Hospital.bulkCreate(hospitalData);
    console.log('Data seeding completed.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await db.sequelize.close();
  }
}

seedData();