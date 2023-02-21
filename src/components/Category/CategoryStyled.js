import styled from "styled-components";

const Anchor = styled.a`
  width: 75px;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
`;

const Img = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  width: 75px;
  height: 75px;
`;

export { Anchor, Img };
