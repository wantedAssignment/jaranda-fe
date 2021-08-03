const PaginationUI = ({ pages, runOnClick, onClickLeft, onClickRight, onChange }) => {
  return (
    <div style={{ display: 'flex', width: 500 }}>
      <label htmlFor="pageSelect" style={{ marginRight: 8 }}>
        page
      </label>
      <select onChange={onChange} name="pageUnit" id="pageSelect" style={{ marginRight: 10 }}>
        <option>1</option>
        <option>3</option>
        <option>5</option>
      </select>
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
