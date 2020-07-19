import React, { Fragment } from "react";

const Project = ({ ProjectDetails }) => {
  const { Id, Title, Highlights, Images } = ProjectDetails;

  const modalId = `#${Id}-modal`;

  return (
    <div>
      <div
        className="cc-porfolio-image img-raised"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
      >
        <a data-toggle="modal" data-target={modalId}>
          <figure className="cc-effect">
            <img src={Images[0]} alt={Id} />
            <figcaption>
              <div className="h4">
                <b>{Title}</b>
              </div>

              <p>
                <b>{Highlights}</b>
              </p>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
};

export default Project;
