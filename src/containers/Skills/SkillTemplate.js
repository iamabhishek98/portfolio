import React from "react";

const Skill = ({ Orientation, Text, Percent }) => {
  const data_aos = `fade-${Orientation.toLowerCase()}`;
  const style = {
    width: `${Percent}%`,
  };
  return (
    <div data-aos={data_aos}>
      <h6>
        {Text} <span> {Percent}% </span>
      </h6>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped active"
          style={style}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
