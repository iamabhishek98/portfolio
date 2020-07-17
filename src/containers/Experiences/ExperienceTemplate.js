import React, { Fragment } from "react";

const Experience = ({ CompanyDetails }) => {
  const { Role, Name, Duration, Description } = CompanyDetails;

  function renderDescription(Description) {
    return Description.map((line, index) => {
      return (
        <Fragment>
          {index !== 0 && <br />}○ {line}
        </Fragment>
      );
    });
  }

  return (
    <div className="exp_grid1" data-aos="fade-right">
      <h4>
        {Role.toUpperCase()} <b>| {Name.toUpperCase()}</b>
      </h4>
      <h5>{Duration.toUpperCase()}</h5>
      <div className="exp_grid2">
        <p>{renderDescription(Description)}</p>
      </div>
      <span className="fa fa-circle"></span>
    </div>
  );
};

export default Experience;
