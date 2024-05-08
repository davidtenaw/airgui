import React, { useState, useEffect } from 'react';
import Station from './Station';
import SinglePlane from './SinglePlane';
import Paths from './Paths';
import { Stations } from '../data/Stations';
import './SinglePlane.css';

const ControlTower = () => {
  const [stations] = useState(Stations);
  const [planes, setPlanes] = useState([]);

  const handleReceiveMessage = (name, msg) => {
    if (!msg || typeof msg !== 'string' || !msg.startsWith('L')) {
      console.log(msg);
      return;
    }

    // Check if the plane already exists with the same ID
    const existingPlane = planes.find(plane => plane.id === msg);

    if (!existingPlane) {
      // Add a new plane if it doesn't exist
      const newPlane = { stationId: name, id: msg, path: getStationPath(name) };
      setPlanes(prevPlanes => [...prevPlanes, newPlane]);
      console.log(msg);
    } else {
      // Update the path of the existing plane
      setPlanes(prevPlanes =>
        prevPlanes.map(plane =>
          plane.id === msg ? { ...plane, path: getStationPath(name) } : plane
        )
      );
    }
  };

  const getStationPath = (id) => {
    const station = stations.find(station => station.id === id);
    return station ? station.path : null;
  };

  useEffect(() => {
    console.log('A new div has been added to the DOM.');
  }, []); // Empty dependency array triggers effect once after initial render

  const stationIds = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div className="ControlTower">
      <Paths paths={stations.map(station => station.path)} />
      
      {stationIds.map(id => (
        <div key={id} className="Station" id={`Station${id}`}>
          <Station id={id.toString()} name={id.toString()} onReceiveMessage={handleReceiveMessage} />
        </div>
      ))}
      
      {planes.map((plane, index) => (
      <SinglePlane key={`Plane-${plane.id}-${index}`} id={plane.id} path={plane.path} animate={true} />  
))}

    </div>
  );
};

export default ControlTower;

