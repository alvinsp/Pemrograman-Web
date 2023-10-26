import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const HeroSection = styled(Link)`
  background: linear-gradient(
      to bottom,
      rgba(10, 12, 44, 0.8) 3rem,
      transparent 10rem
    ),
    url(https://images.pexels.com/photos/133325/pexels-photo-133325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=600&dpr=1);
  background-position: center, bottom left;
  background-size: 100% 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fafafc;
  padding: 10rem 3rem; /* Adjust padding to center content */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); /* Add a subtle box shadow */

  h1 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 576px) {
    background: linear-gradient(
        to bottom,
        rgba(10, 12, 44, 0.8) 3rem,
        transparent
      ),
      url(https://images.pexels.com/photos/133325/pexels-photo-133325.jpeg?auto=compress&cs=tinysrgb&w=800&h=750&dpr=1);
    padding: 5rem 3rem;
  }
`;
