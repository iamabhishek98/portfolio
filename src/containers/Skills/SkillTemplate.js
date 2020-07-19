import React from "react";

const Skill = ({ Text, Percent }) => {
  const style = {
    width: `${Percent}%`,
  };
  return (
    <div>
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
