import { useEffect, useState } from 'react';
import PaginationUI from './presenter';

/**
 * Desc
 *  페이지네이션 한 페이지 당 10개의 배열 요소 포함
 * Props
 *  arr : Pagination을 사용할 배열
 *  onClick : 각 페이지를 눌렀을 때 실행할 함수,
 *            Number 타입의 클릭한 page 수를 함수의 인자로 받아서 실행된다.
 */
const Pagination = ({ arr, onClick }) => {
  const UNIT = 10;
  const MAX_LENGTH = arr?.length;
  const SET = Math.floor(MAX_LENGTH / UNIT);
  const SET_COUNT = Math.floor(Math.floor(MAX_LENGTH / UNIT) / UNIT);
  const REST = Math.floor(SET % UNIT);

  const [pages, setPages] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (MAX_LENGTH < 100) {
      if (MAX_LENGTH % 10 === 0) {
        setPages(new Array(SET).fill(0).map((_, i) => i + 1));
      } else {
        setPages(new Array(SET + 1).fill(0).map((_, i) => i + 1));
      }
    } else {
      setPages(new Array(10).fill(0).map((_, i) => i + 1));
    }
  }, [MAX_LENGTH, SET]);

  const onClickLeft = () => {
    if (count === 0) return;
    if (count === SET_COUNT) {
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
    if (count + 1 === SET_COUNT) {
      if (MAX_LENGTH % 100 === 0) return;
      if (MAX_LENGTH % 10 === 0) {
        const result = pages.map(e => e + 10).filter((_, i) => i < REST);
        setPages(result);
        const countResult = count + 1;
        setCount(countResult);
        return;
      }
      const result = pages.map(e => e + 10).filter((_, i) => i < REST + 1);
      setPages(result);
      const countResult = count + 1;
      setCount(countResult);
      return;
    } else if (count === SET_COUNT) {
      return;
    }
    const result = count + 1;
    setCount(result);
    const newArr = pages.map(e => e + 10);
    setPages(newArr);
  };

  const runOnClick = el => {
    if (onClick) {
      onClick(el);
    }
  };

  if (!arr || typeof arr !== 'object' || (onClick && typeof onClick !== 'function')) return <></>;
  return (
    <PaginationUI
      pages={pages}
      onClickLeft={onClickLeft}
      onClickRight={onClickRight}
      runOnClick={runOnClick}
    />
  );
};

export default Pagination;
