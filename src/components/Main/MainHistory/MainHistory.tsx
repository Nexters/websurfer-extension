import React from 'react';

type Props = {
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  isFocus: boolean;
};

const MainHistory = (props: Props) => {
  return (
    <div>
      <button onClick={() => props.setIsFocus(!props.isFocus)}>버튼</button>
    </div>
  );
};

export default MainHistory;
