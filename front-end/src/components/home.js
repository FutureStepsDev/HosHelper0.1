
import Cards from './components/hospitalCart'
import hospitalData from './datas/HospitalDatas';

const home=() =>{
  return (
    <div className="App">
     
        {hospitalData.map((hospital, index) => (
          <Cards
            key={index}
            hospitalName={hospital.hospitalName}
            imageUrl={hospital.imageUrl}
            address={hospital.address}
            phone={hospital.phone}
            fax={hospital.fax}
            emergency={hospital.emergency}
            websites={hospital.websites}
          />
        ))}
      
    

    </div>
  );
}

export default home