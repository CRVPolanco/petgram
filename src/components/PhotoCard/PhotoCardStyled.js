import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';

const ImgWrapper = styled.div`
  display: block;
  border-radius: 8px;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

const Img = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  box-shadow: 0 10px 14px rgba(255, 255, 255, .2);
  object-fit: cover;
  top: 0;
  ${fadeIn()}
`;

const Button = styled.button`
  display: flex;
  color: #fff;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`;


export { ImgWrapper, Img, Button };
