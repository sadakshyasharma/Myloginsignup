import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';


const api_url = "http://my-doctors.net:8090/doctors?%24limit=12&%24skip=0";


// const api_url =
//   "http://my-doctors.net/search?q=";




const PlaceHolder = () => {
    const [doctor, setDoctor] = useState('');
  const [notavailable, setNotAvailable] = useState(false);
  const [search, setSearch] = useState('');
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
    
        try {
            const response = await axios.get(api_url);
            console.log(response.data)
            setDoctor(response);
            setNotAvailable(false);
} catch(error) {}
    //  setNotAvailable(true)
    }
    if (notavailable) {
        return (
          <h3 style={{ color: "black" }}>
                No Doctor Found... please try again
                
            </h3>
        );
    }

    // console.log("test223", doctor.id);
  return (
    <div className="placeholderflex">
      <div>
        <select className="placeHolder">
          <option value="" disabled selected hidden>
            Select a Service
          </option>
          <option value="Gastroenterology">Gastroenterology</option>
          <option value="Dental">Dental</option>
          <option value="Clinical Nutrition & Dietetics">
            Clinical Nutrition & Dietetics
          </option>
          <option value="E.N.T">E.N.T</option>
          <option value="Child & Adolescent Psychiatry">
            Child & Adolescent Psychiatry
          </option>
          <option value="Audiology">Audiology</option>
          <option value="Anethesiology">Anethesiology</option>
          <option value="Cardiac Surgery">Cardiac Surgery</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Diabetology">Diabetology</option>
          <option value="Cardiology">Cosmetology</option>
          <option value="Development Behavioral Pediatrics">
            Development Behavioral Pediatrics
          </option>
          <option value="Breast & Oncoplastic - Oncology">
            Breast & Oncoplastic - Oncology
          </option>
          <option value="Endocrinology & Diabetology">
            Endocrinology & Diabetology
          </option>
          <option value="Critical Care Medicine">Critical Care Medicine</option>
          <option value="Clinical Psychology">Clinical Psychology</option>
          <option value="Bone Marrow">Bone Marrow</option>
          <option value="Cranio-Maxillo Facial Surgery">
            Cranio-Maxillo Facial Surgery
          </option>
          <option value="functionalities">functionalities</option>
        </select>
      </div>
      <div className="placeholderflex">
              <input placeholder="Search Doctors" className="placeHolder" value={doctor}
                  onChange={(e)=> setDoctor(e.target.value)} />
        <button onClick={(e) =>fetchData()}>
          
            <img
              src="/searchicon.png"
              alt="search"
              className="placeholderimg"
            />
          
        </button>
      </div>
    </div>
  );
};

export default PlaceHolder;
