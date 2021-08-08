import React, { Fragment } from "react";

const Education = ({ SchoolDetails }) => {
  const { Id, Image, Link, Name, Duration, Details } = SchoolDetails;

  const style_top = `education-agile-grids ${Id}-top`;
  const style_year = `education-agile-w3l-year ${Id}-year`;
  const style_img = `${Id}-img`;
  const style_duration = `${Id}-duration`;
  const style_details = `education-agile-w3l-info ${Id}-details`;

  function renderDetails(Details) {
    return Object.keys(Details).map((key) => {
      if (key === "BR")
        return (
          <Fragment>
            <br />
            <b>{Details[key]}</b>
            <br />
          </Fragment>
        );
      else if (typeof Details[key] === "object") {
        return Details[key].map((line, index) => {
          return (
            <Fragment>
              - {line}
              <br />
            </Fragment>
          );
        });
      } else {
        return (
          <div>
            <b>{key}</b>{" "}
            {Details[key].includes("<em>") ? (
              <em>{Details[key].slice(4, -5)}</em>
            ) : (
              <span>{Details[key]}</span>
            )}
          </div>
        );
      }
    });
  }

  return (
    <div
      className="education-agile-grids"
      // style={{ marginLeft: "2em" }}
      data-aos="flip-left"
    >
      <div
        className={style_top}
        //   style="margin-left:2em"
        data-aos="flip-left"
      >
        <div className="education-agile-w3l">
          <br />
          <br />
          <h3>&emsp;&emsp;&emsp;&nbsp;{Name}</h3>
          <div className={style_year} /*style="margin-top: 2em;"*/>
            <a href={Link} target="_blank">
              <img
                className={style_img}
                /*style="width: 90%; margin-left:  auto;margin-right:  auto;display:  block;"*/ src={
                  Image
                }
                alt="Logo"
              />
            </a>
            <h4
              className={
                style_duration
              } /*style="text-align: center; font-size: 20px;"*/
            >
              {Duration}
            </h4>
          </div>
          <div className={style_details} /*style="margin-top: -3em;"*/>
            <p>{renderDetails(Details)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
