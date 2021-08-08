import React, { Fragment } from "react";

const ProjectModal = ({ ProjectDetails, Functions }) => {
  const {
    Index,
    Id,
    Title,
    Github,
    Link,
    Duration,
    Images,
    Video,
    Description,
  } = ProjectDetails;

  const { PauseVids, PlusDivs, CurrentDiv } = Functions;

  const modalId = `${Id}-modal`;

  const totalMedia = (Video === undefined ? 0 : 1) + Images.length;

  const renderImages = (Id, Images) => {
    let Images_Id = [];
    for (let i = 0; i < Images.length; i++) {
      Images_Id.push({ src: Images[i], id: Id });
    }
    return Images_Id.map((image, index) => {
      return (
        <img
          src={image.src}
          className={`${image.id}_image_${index + 1} ${image.id}_slides`}
        />
      );
    });
  };

  const renderVideo = (Id, Video) => {
    if (Video !== undefined) {
      return (
        <div className={`${Id}_slides`} id={`${Id}_vid`}>
          <video
            id={`${Id}_video`}
            width="100%"
            controls
            disablePictureInPicture
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      );
    }
  };

  const renderArrowKeys = (count, Index, PlusDivs) => {
    if (count > 1) {
      return (
        <Fragment>
          <button
            className="w3-button w3-black w3-display-left"
            onClick={() => PlusDivs(-1, Index)}
          >
            &#10094;
          </button>
          <button
            className="w3-button w3-black w3-display-right"
            onClick={() => PlusDivs(1, Index)}
          >
            &#10095;
          </button>
        </Fragment>
      );
    }
  };

  const renderButtons = (count, Index, Id, CurrentDiv) => {
    let temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({ index: Index, id: Id });
    }
    return temp.map((obj, index) => {
      const Id = obj.id;
      const i = index + 1;
      const j = obj.index;
      return (
        <button
          className={`w3-button ${Id}_button`}
          onClick={() => CurrentDiv(i, j)}
        >
          {i}
        </button>
      );
    });
  };

  const renderDescription = (Description) => {
    return Description.map((line, index) => {
      if (line === "parkevelution first line") {
        return (
          <Fragment>
            ○ Achieved{" "}
            <b>Apollo 11 (highest level of achievement for Orbital)</b> and was
            nominated for the{" "}
            <b>Judge’s Choice Award (awarded to the best Apollo 11 team)</b>
          </Fragment>
        );
      } else if (line === "mbot first line") {
        return (
          <Fragment>
            ○ Achieved <b>1st place in the entire cohort</b> for having cleared
            the maze in record time with no collisions
          </Fragment>
        );
      } else {
        return (
          <Fragment>
            {index !== 0 && <br />}○ {line}
          </Fragment>
        );
      }
    });
  };

  return (
    <div>
      <div id={modalId} className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ position: "relative" }}>
              <h3 className="modal-title" style={{ fontSize: "20px" }}>
                <i
                  onClick={() => window.open(Github, "_blank")}
                  className="fa fa-github project-github"
                  aria-hidden="true"
                ></i>
                {Link !== undefined && (
                  <span>
                    <b> </b>
                    <i
                      onClick={() => window.open(Link, "_blank")}
                      className="fa fa-link project-link"
                      aria-hidden="true"
                    ></i>
                  </span>
                )}
                <b> {Title}</b>
              </h3>
              <h5>
                <i className="fa fa-calendar" aria-hidden="true"></i> {Duration}
              </h5>
              <br />
              <div>
                {renderImages(Id, Images)}
                {renderVideo(Id, Video)}
                {renderArrowKeys(totalMedia, Index, PlusDivs)}
                {Index !== undefined &&
                  renderButtons(totalMedia, Index, Id, CurrentDiv)}
              </div>
            </div>
            <div className="modal-body">
              <p>{renderDescription(Description)}</p>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => PauseVids()}
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
