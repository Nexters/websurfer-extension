import React, { useState } from 'react';
import { RootState } from '../../redux/store';

import { useDispatch, useSelector } from 'react-redux';

import MainTitle from '../../components/Main/MainContent/MainTitle';
import TotalTime from '../../components/Main/MainContent/TotalTime';
import MainTopNav from '../../components/Main/MainContent/MainTopNav';
import MainHistory from '../../components/Main/MainHistory/MainHistory';
import SurffingTime from '../../components/Main/MainContent/SurffingTime';
import MostVisitWebSite from '../../components/Main/MainContent/MostVisitWebSite';

import * as S from './Options.styled';
import * as Grid from '../../components/Grid/Grid.styled';
import Main from './Main';
import Landing from './Landing';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return isLoggedIn ? <Main /> : <Landing />;
};

export default Options;
