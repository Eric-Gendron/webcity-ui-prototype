import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Landing from "../Slides/Landing.Slide";
import Services from "../Slides/Services.Slide";
import LightSwitch from "../Slides/Lightswitch.Slide";

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

export default function MainPage() {
  const offeringRef = useRef(null);
  const [fadeInOffering, setFadeInOffering] = useState(false);

  useEffect(() => {
    const current = offeringRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeInOffering(true);
        }
      },
      OBSERVER_OPTIONS
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <>
      <Landing />
      <Offering ref={offeringRef} fade={fadeInOffering}>
        webcity is a full service web design and development agency. We build
        websites, web applications, and web experiences. 100% satisfaction
        guaranteed. <cite>— We offer a full ready to roll solution for your business.</cite>
      </Offering>
      <Services />
      <LightSwitch />
    </>
  );
}

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Offering = styled.blockquote`
  background: #f5f5f5;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 300;
  text-align: center;
  margin: 0 auto;
  padding: 100px 200px;
  position: relative;

  ${({ fade }) => fade ? css`
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeInAnimation} 1s ease-in-out;
  ` : css`
    opacity: 0;
    transform: translateY(30px);
  `}

  cite {
    display: block;
    font-size: 1rem;
    font-weight: 100;
    margin-top: 1rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 30px 60px;
  }
`;

