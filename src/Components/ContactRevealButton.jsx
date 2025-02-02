import React, { useState } from "react";
import styled from "styled-components";
import MailUsButton from "./EmailUsButton";
import CallUsButton from "./CallUsButton";

export default function ContactRevealButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {isClicked && (
        <>
          <MailUsButton />
          <CallUsButton />
        </>
      )}
      <Button onClick={handleClick} isClicked={isClicked}>
        <svg fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41Z"></path>
        </svg>
      </Button>
    </>
  );
}

const Button = styled.button`
  background-color: #fff;
  border: none;
  padding: 15px;
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 998;
  border-radius: 50px;
  border: 1px solid #000;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    transform: ${props => (props.isClicked ? "scaleY(-1)" : "none")};
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    background-color: #fff;
  }
  &:active {
    background-color: #f5f5f5;
  }
};
`;