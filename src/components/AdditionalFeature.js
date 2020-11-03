import React from 'react';

const AdditionalFeature = ({feature, addFeature}) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=> console.log(addFeature(feature))}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
