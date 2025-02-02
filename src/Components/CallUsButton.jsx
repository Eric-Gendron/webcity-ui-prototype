import React from "react";
import styled, { keyframes } from "styled-components";

export default function CallUsButton() {
  return (
    <Button>
      <a href="tel:(438)495-1817">
        <svg
          fill="none"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.75.75h-7.5A2.25 2.25 0 0 0 6 3v18a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 21V3A2.25 2.25 0 0 0 15.75.75Z"></path>
          <path d="M8.25.75h1.125a.375.375 0 0 1 .375.375.75.75 0 0 0 .75.75h3a.75.75 0 0 0 .75-.75.375.375 0 0 1 .375-.375h1.125"></path>
        </svg>
        <span>(438)495-1817</span>
      </a>
    </Button>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Button = styled.button`
  background-color: #fff;
  border: none;
  padding: 10px;
  position: fixed;
  bottom: 95px;
  right: 25px;
  z-index: 998;
  border-radius: 50px;
  border: 1px solid #000;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #000;
    text-decoration: none;
  }
  span {
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    display: block;
  }
  &:hover {
    background-color: #fff;
  }
  &:active {
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    right: 30px;
    span {
      display: none;
    }
    svg {
      display: block;
    }
  }

  animation: ${fadeIn} 0.52s ease-in-out;
`;
