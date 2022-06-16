
import React, { Component } from 'react';
import { useStepperContext } from "../../contexts/StepperContext";
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Details() {
  const { userData, setUserData } = useStepperContext();
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Address
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 width-50 rounded">
        <LoadScript
        googleMapsApiKey="AIzaSyC791LEOliGvCV3-KcvL6t31lOdfmgDbYs"
      >
        <GoogleMap
        containerStyle="width:100%"
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          City
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <select name="city" onChange={handleChange}
            value={userData["city"] || ""}
             className='p-1 px-2 appearance-none outline-none w-full text-gray-800'>
          <option value="Agadir">Agadir</option>
          <option value="Al Hoceima">Al Hoceima</option>
          <option value="Azilal">Azilal</option>
          <option value="Beni Mellal">Beni Mellal</option>
          <option value="Ben Slimane">Ben Slimane</option>
          <option value="Boulemane">Boulemane</option>
          <option value="Casablanca">Casablanca</option>
          <option value="Chaouen">Chaouen</option>
          <option value="El Jadida">El Jadida</option>
          <option value="El Kelaa des Sraghna">El Kelaa des Sraghna</option>
          <option value="Er Rachidia">Er Rachidia</option>
          <option value="Essaouira">Essaouira</option>
          <option value="Fes">Fes</option>
          <option value="Figuig">Figuig</option>
          <option value="Guelmim">Guelmim</option>
          <option value="Ifrane">Ifrane</option>
          <option value="Kenitra">Kenitra</option>
          <option value="Khemisset">Khemisset</option>
          <option value="Khenifra">Khenifra</option>
          <option value="Khouribga">Khouribga</option>
          <option value="Laayoune">Laayoune</option>
          <option value="Larache">Larache</option>
          <option value="Marrakech">Marrakech</option>
          <option value="Meknes">Meknes</option>
          <option value="Nador">Nador</option>
          <option value="Ouarzazate">Ouarzazate</option>
          <option value="Oujda">Oujda</option>
          <option value="Rabat-Sale">Rabat-Sale</option>
          <option value="Safi">Safi</option>
          <option value="Settat">Settat</option>
          <option value="Sidi Kacem">Sidi Kacem</option>
          <option value="Tangier">Tangier</option>
          <option value="Tan-Tan">Tan-Tan</option>
          <option value="Taounate">Taounate</option>
          <option value="Taroudannt">Taroudannt</option>
          <option value="Tata">Tata</option>
          <option value="Taza">Taza</option>
          <option value="Tetouan">Tetouan</option>
          <option value="Tiznit">Tiznit</option>
          </select>
          
        </div>
      </div>
    </div>
  );
}
