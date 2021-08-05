import React from 'react';

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
  } = props;
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open && (
        <section>
          <header>
            {header}
            {close && (
              <button className="btn-close-mark default-btn" onClick={close} type="button">
                닫기
              </button>
            )}
          </header>
          <main>{info}</main>
          <footer>
            {registerBtnStr && (
              <button className="btn-register default-btn" onClick={registerBtnFunc} type="button">
                {registerBtnStr}
              </button>
            )}
            {cancelBtnStr && (
              <button className="btn-cancel default-btn" onClick={cancelBtnFunc} type="button">
                {cancelBtnStr}
              </button>
            )}
          </footer>
        </section>
      )}
    </div>
  );
};

export default modal;
