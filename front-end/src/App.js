
import './App.css';
// import Profile from './components/profile';
import Cards from './components/hospitalCart'
import hospitalData from './datas/HospitalDatas';

function App() {
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
      
    
      {/* <Profile/> */}
    </div>
  );
}

export default App;
