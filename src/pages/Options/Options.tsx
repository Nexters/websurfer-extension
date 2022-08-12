import React, { useEffect, useState } from 'react';

import Main from '@components/Main/Main';

interface Props {
  title: string;
}

const Options = (props: Props) => {
  const [hasData, setHasData] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const PrintMainComponent = (): React.ReactElement => {
    if (navigator.onLine) {
      if (isLoggedIn) {
        if (hasData) {
          return <Main />;
        } else {
          return <>데이터가 없습니다.</>;
        }
      } else {
        return <>로그인하세요.</>;
      }
    }
    return <>인터넷에 연결되어 있지 않습니다.</>;
  };

  return PrintMainComponent();
};

export default Options;
