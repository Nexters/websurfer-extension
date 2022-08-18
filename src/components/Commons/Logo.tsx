import React from 'react';
import * as S from './Logo.styled';

import { FullLogo } from '@assets/img/svg-icon-paths';

type Props = {};

const Logo = (props: Props) => {
  return <S.Logo src={FullLogo} alt="full-logo"></S.Logo>;
};

export default Logo;
