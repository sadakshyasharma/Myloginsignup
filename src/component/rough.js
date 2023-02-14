// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const api_url = "http://my-doctors.net:8090/doctors?%24limit=12&%24skip=0";

// const PlaceHolder = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [notAvailable, setNotAvailable] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     try {
//       const response = await axios.get(api_url);
//       console.log(response.data);
//       setDoctors(response.data);
//       setNotAvailable(false);
//     } catch (error) {
//       setNotAvailable(true);
//     }
//   }

//   function handleSearch(e) {
//     setSearchTerm(e.target.value);
//   }

//   function filteredDoctors() {
//     if (searchTerm.trim() === "") {
//       return doctors;
//     } else {
//       return doctors.filter((doctor) => {
//         return doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
//       });
//     }
//   }

//   return (
//     <div className="placeholderflex">
//       <div>
//         <select className="placeHolder">
//           <option value="" disabled selected hidden>
//             Select a Service
//           </option>
//           <option value="Gastroenterology">Gastroenterology</option>
//           <option value="Dental">Dental</option>
//           <option value="Clinical Nutrition & Dietetics">
//             Clinical Nutrition & Dietetics
//           </option>
//           <option value="E.N.T">E.N.T</option>
//           <option value="Child & Adolescent Psychiatry">
//             Child & Adolescent Psychiatry
//           </option>
//           <option value="Audiology">Audiology</option>
//           <option value="Anethesiology">Anethesiology</option>
//           <option value="Cardiac Surgery">Cardiac Surgery</option>
//           <option value="Dermatology">Dermatology</option>
//           <option value="Diabetology">Diabetology</option>
//           <option value="Cardiology">Cosmetology</option>
//           <option value="Development Behavioral Pediatrics">
//             Development Behavioral Pediatrics
//           </option>
//           <option value="Breast & Oncoplastic - Oncology">
//             Breast & Oncoplastic - Oncology
//           </option>
//           <option value="Endocrinology & Diabetology">
//             Endocrinology & Diabetology
//           </option>
//           <option value="Critical Care Medicine">Critical Care Medicine</option>
//           <option value="Clinical Psychology">Clinical Psychology</option>
//           <option value="Bone Marrow">Bone Marrow</option>
//           <option value="Cranio-Maxillo Facial Surgery">
//             Cranio-Maxillo Facial Surgery
//           </option>
//           <option value="functionalities">functionalities</option>
//         </select>
//       </div>
//       <div className="placeholderflex">
//         <input
//           placeholder="Search Doctors"
//           className="placeHolder"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <button onClick={fetchData}>
//           <img src="/searchicon.png" alt="search" className="placeholderimg" />
//         </button>
//       </div>
//       <div>
//         {notAvailable && (
//           <h3 style={{ color: "black" }}>
//             No doctors found... please try again
//           </h3>
//         )}
//         {filteredDoctors().map((doctor) => (
//           <div key={doctor.id}>{doctor.name}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PlaceHolder;


import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

const api_url = "http://my-doctors.net:8090/doctors?%24limit=12&%24skip=0";

const PlaceHolder = () => {
  const [doctors, setDoctors] = useState([]);
  const [notAvailable, setNotAvailable] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(api_url);
      setDoctors(response.data);
      setNotAvailable(false);
    } catch(error) {
      setNotAvailable(true);
    }
  }

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredDoctors = doctors.filter(doctor => {
    return doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

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
        <input placeholder="Search Doctors" className="placeHolder" value={searchQuery}
            onChange={handleSearch} />
        <button onClick={fetchData}>
          <img
            src="/searchicon.png"
            alt="search"
            className="placeholderimg"
          />
        </button>
      </div>
      <div>
        {notAvailable && <h3 style={{ color: "black" }}>
          No doctors found... please try again
        </h3>
        }</div>
    </div>
  );
};

export default PlaceHolder;
