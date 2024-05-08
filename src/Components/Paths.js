import React from 'react';
import { motion } from 'framer-motion';
import { Stations } from '../data/Stations'; // Adjust the import path based on your directory structure

const Paths = () => (
  <svg width="1524" height="725">
    {Stations.map((station, index) => (
      <motion.path
        key={index}
        d={Array.isArray(station.path) ? station.path.join(' ') : station.path}
        stroke="maroon"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 5, ease: 'linear' }}
      />
    ))}
  </svg>
);

export default Paths;


