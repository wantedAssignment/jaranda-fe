import { useEffect, useState } from 'react';
import PaginationUI from '../../presentationals/pagination';

/**
 * Props
 * arr : Pagination을 사용할 배열
 * onClick : 각 페이지를 눌렀을 때 실행할 함수,
 *           클릭한 요소를 Number 타입으로 함수의 인자로 반환한다.
 */
const Pagination = ({ arr, onClick }) => {
  const unit = 10;
  const MAX_LENGTH = arr?.length;
  const SET = Math.floor(MAX_LENGTH / unit);

  const [pages, setPages] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (arr?.length < 10) {
      setPages(new Array(MAX_LENGTH).fill(0).map((_, i) => i + 1));
    } else {
      setPages(new Array(10).fill(0).map((_, i) => i + 1));
    }
  }, []);

  const runOnClick = el => {
    if (onClick) {
      onClick(el);
    }
  };

  const onClickLeft = () => {
    if (count === 0) return;
    if (count === SET) {
      const result = pages[0] - 10;
      const arrResult = new Array(10).fill(0).map((_, i) => result + i);
      setPages(arrResult);
      const resultCount = count - 1;
      setCount(resultCount);
      return;
    }
    const result = count - 1;
    setCount(result);
    const newArr = pages.map(e => e - 10);
    setPages(newArr);
  };

  const onClickRight = () => {
    if (count + 1 === SET) {
      const rest = MAX_LENGTH % unit;
      const result = pages.map(e => e + 10).filter((_, i) => i < rest);
      setPages(result);
      const countResult = count + 1;
      setCount(countResult);
      return;
    } else if (count === SET) return;
    const result = count + 1;
    setCount(result);
    const newArr = pages.map(e => e + 10);
    setPages(newArr);
  };

  const onChange = e => {
    console.log(e.target.options[e.target.options.selectedIndex].text);
  };

  if ((arr && typeof arr !== 'object') || (onClick && typeof onClick !== 'function')) return;
  return (
    <PaginationUI
      pages={pages}
      runOnClick={runOnClick}
      onClickLeft={onClickLeft}
      onClickRight={onClickRight}
      onChange={onChange}
    />
  );
};

export default Pagination;
