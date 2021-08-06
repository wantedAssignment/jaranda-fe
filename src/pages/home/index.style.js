import styled from 'styled-components';

export const HomeWrapper = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
`;

export const Background = styled.div`
  background-image: url(${process.env.PUBLIC_URL + '/img/main_bg.jpg'});
  background-size: cover;
  background-position: center;
  height: 100%;
  opacity: 0.35;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
  color: #232323;
  opacity: 0.7;
`;

export const Button = styled.button`
  border: none;
  background-color: #aac14f;
  border-radius: 6px;
  padding: 15px 40px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Nanum Gothic', sans-serif;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #a1b849;
  }
`;
