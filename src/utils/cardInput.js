import React from 'react';

import useInput from '../hook/useInput';
import useAccount from '../hook/useAccount';

const CardInput = ({ onSubmitAccountNum, setIsOpenCardNum }) => {
  const [bankName, onChangeBankName] = useInput('');
  const [accountNum1st, onChangeAccountNum1st, , validError1st] = useAccount('');
  const [accountNum2nd, onChangeAccountNum2nd, , validError2nd] = useAccount('');
  const [accountNum3rd, onChangeAccountNum3rd, , validError3rd] = useAccount('');
  const [accountNum4th, onChangeAccountNum4th, , validError4th] = useAccount('');

  const onSubmitAccount = e => {
    e.preventDefault();
    const accountFullNum = accountNum1st + accountNum2nd + accountNum3rd + accountNum4th;
    onSubmitAccountNum(bankName, accountFullNum);
    setIsOpenCardNum(false);
  };

  return (
    <>
      <input
        type="text"
        placeholder="은행이름"
        defaultValue={bankName}
        onChange={onChangeBankName}
        required
      />
      <input type="number" defaultValue={accountNum1st} onChange={onChangeAccountNum1st} />
      <input type="number" defaultValue={accountNum2nd} onChange={onChangeAccountNum2nd} />
      <input type="number" defaultValue={accountNum3rd} onChange={onChangeAccountNum3rd} />
      <input type="number" defaultValue={accountNum4th} onChange={onChangeAccountNum4th} />
      {validError1st && validError2nd && validError3rd && validError4th ? (
        <button type="button" onClick={onSubmitAccount}>
          등록
        </button>
      ) : (
        <>
          <h3>계좌번호를 확인해주세요.</h3>
          <button disabled type="button">
            등록
          </button>
        </>
      )}
    </>
  );
};

export default CardInput;
