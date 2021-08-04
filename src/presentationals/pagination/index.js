const PaginationUI = ({ pages, onClickLeft, onClickRight, runOnClick }) => {
  return (
    <div style={{ display: 'flex', width: 500 }}>
      <div style={{ width: 400, display: 'flex', justifyContent: 'space-between' }}>
        <img
          src="./img/arrowLeft.png"
          style={{ cursor: 'pointer', width: 10, height: 15 }}
          onClick={onClickLeft}
        />
        {pages.map((el, i) => (
          <div onClick={() => runOnClick(el)} style={{ cursor: 'pointer' }} key={i}>
            {el}
          </div>
        ))}
        <img
          src="./img/arrowRight.png"
          style={{ cursor: 'pointer', width: 10, height: 15 }}
          onClick={onClickRight}
        />
      </div>
    </div>
  );
};

export default PaginationUI;
