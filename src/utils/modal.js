import React from 'react';
import styled, { css } from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  overflow: ${({ opened }) => (opened ? 'hidden' : 'auto')};
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 500px;
  ${({ isCardModal }) =>
    isCardModal &&
    css`
      background-color: white;
      padding: 30px;
      border-radius: 10px;
    `}
`;

const Header = styled.header`
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  border: 0px;
  background-color: white;
  width: 30px;

  cursor: pointer;
  > img {
    width: 100%;
  }
`;

const modal = props => {
  const {
    open,
    close,
    registerBtnStr,
    registerBtnFunc,
    cancelBtnStr,
    cancelBtnFunc,
    header,
    info,
    isCardModal,
  } = props;
  return (
    <ModalBackground opened={open ? true : false}>
      {open && (
        <ModalWrapper>
          <Modal isCardModal={isCardModal}>
            <Header>
              {header}
              {close && (
                <CloseButton className="btn-close-mark default-btn" onClick={close} type="button">
                  <img src={process.env.PUBLIC_URL + '/img/cancel.png'} />
                </CloseButton>
              )}
            </Header>
            <main>{info}</main>
            <footer>
              {registerBtnStr && (
                <button
                  className="btn-register default-btn"
                  onClick={registerBtnFunc}
                  type="button"
                >
                  {registerBtnStr}
                </button>
              )}
              {cancelBtnStr && (
                <button className="btn-cancel default-btn" onClick={cancelBtnFunc} type="button">
                  {cancelBtnStr}
                </button>
              )}
            </footer>
          </Modal>
        </ModalWrapper>
      )}
    </ModalBackground>
  );
};

export default modal;
