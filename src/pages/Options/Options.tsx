import React, { useState } from 'react';

import Main from '@components/Main/Main';

interface Props {
  title: string;
}

const Options = (props: Props) => {
  const [hasData, setHasData] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  return isLoggedIn ? (
    <>
      hasData ? <Main />: <>데이터가 없습니다.</>
    </>
  ) : (
    <>로그인하세요.</>
  );
};

export default Options;
