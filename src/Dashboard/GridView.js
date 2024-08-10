import React, { useEffect, useState } from 'react';
import './GridView.css'; // Ensure this file contains the necessary styling
import { FaCar, FaWrench, FaCogs, FaMoneyBillWave } from 'react-icons/fa'; // Import icons from react-icons

const items = [
  { icon: FaCar, label: 'Total Cars', endValue: 100 },
  { icon: FaWrench, label: 'Services Completed', endValue: 75 },
  { icon: FaCogs, label: 'Top Accessories', endValue: 50 },
  { icon: FaMoneyBillWave, label: 'Monthly Revenue', endValue: 1000 }
];

const GridView = () => {
  const [counters, setCounters] = useState(Array(items.length).fill(0));

  useEffect(() => {
    const intervals = items.map((item, index) => {
      return setInterval(() => {
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          if (newCounters[index] < item.endValue) {
            newCounters[index] += 1;
          }
          return newCounters;
        });
      }, 20); // Adjust speed as needed
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="gridview-container">
      {items.map((item, index) => (
        <div className="gridview-item" key={index}>
          <div className="gridview-icon">
            <item.icon />
          </div>
          <div className="gridview-number">{counters[index]}</div>
          <div className="gridview-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
