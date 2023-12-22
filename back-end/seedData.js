const db = require('./models/index');
const hospitalData = require('./Data/HospitalDatas');
const PharmacyDatas = require('./Data/PharmacyDatas');

async function seedData() {
  try {
    await db.sequelize.sync({ force: false }); 
    await db.Hospital.bulkCreate(hospitalData);
    await db.Pharmacy.bulkCreate(PharmacyDatas);
    console.log('Data seeding completed.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await db.sequelize.close();
  }
}

seedData();