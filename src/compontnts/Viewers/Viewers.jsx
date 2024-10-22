import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="images/viewers-disney.png" alt="Disney" />
      </Wrap>
      <Wrap>
        <img src="images/viewers-marvel.png" alt="Marvel" />
      </Wrap>
      <Wrap>
        <img src="images/viewers-national.png" alt="National Geographic" />
      </Wrap>
      <Wrap>
        <img src="images/viewers-national.png" alt="National Geographic" />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  justify-items: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding: 10px; /* Add padding for space around images */
  display: flex; /* Use flexbox to center content */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  border: 2px solid transparent; /* Optional: Add border for visibility */
  border-radius: 10px; /* Optional: Add rounded corners */
  transition: all 0.3s ease;

  img {
    width: 100%; /* Make images responsive */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px; /* Optional: Rounded corners on images */
  }

  &:hover {
    border: 2px solid rgba(249, 249, 249, 0.8); /* Change border color on hover */
  }
`;

export default Viewers;
