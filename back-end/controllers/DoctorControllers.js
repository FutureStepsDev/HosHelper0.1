const db = require("..//models/index");
const Doctor = db.Doctor;
const createDoctor=async(req,res)=>{

    try{

        const {UserName,email,specification,hospitalsRelations}=req.body;
        const newDoctor=await Doctor.create({
            UserName,
            email,
            specification,
            hospitalsRelations,
        })
        res.status(200).json({
            success:true,
            doctor: newDoctor,
        });
      } catch (error) {
        console.error('Error creating doctor:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
    const getAllDoctors=async (req, res) => {
      try {
        const Doctors = await Doctor.findAll();
        res.json(Doctors);
      } catch (error) {
        console.error('Error getting Doctors:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
      const getdoctorById = async (req, res) => {
        try {
          const doctorId = req.params.id;
          const doctor = await Doctor.findByPk(doctorId);
      
          if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
          }
      
          res.json(doctor);
        } catch (error) {
          console.error('Error getting doctor by ID:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

      const getdoctorByUserId = async (req, res) => {
        const userId = req.params.userId;
    
        try {
            const doctor = await Doctor.findOne({ where: { userId: userId } });
    
            if (!doctor) {
                return res.status(404).send({
                    message: "Doctor not found with user ID " + req.params.userId,
                });
            }
    
            res.send(doctor);
        } catch (err) {
            res.status(500).send({
                message: "Error retrieving doctor with user ID " + req.params.userId,
            });
        }
    };
      module.exports = {
        createDoctor,
        getAllDoctors,
        getdoctorById,
        getdoctorByUserId
      };
      
      
      