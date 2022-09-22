/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import NoImage from "../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { StyledActor } from "../styles/StyledActor";

const Actor = ({ actor }) => {
  return (
    <StyledActor>
      <img
        src={
          actor?.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
        alt="Actor Image"
      />
      <span className="actor-name">{actor?.name}­</span>
      <span className="actor-character">{actor?.character}</span>
    </StyledActor>
  );
};

export default Actor;
