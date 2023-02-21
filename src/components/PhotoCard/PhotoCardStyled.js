import styled from 'styled-components';

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
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  object-fit: cover;
  top: 0;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`;

export { ImgWrapper, Img, Button };
