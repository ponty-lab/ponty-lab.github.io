import React from "react";

const Tooltip = ({ feature }: any) => {
  const { id } = feature.properties;

  return (
    <div id={`tooltip-${id}`}>
      <h2>{feature.properties.regionName}</h2>
      <br />
      <strong>Danger Rating:</strong> {feature.properties.maxDangerRating}
      <p>{feature.properties.avalancheActivityComment}</p>
    </div>
  );
};

export default Tooltip;
