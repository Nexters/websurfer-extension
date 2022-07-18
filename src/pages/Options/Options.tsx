import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      {title} Options page {count}
    </div>
  );
};

export default Options;
