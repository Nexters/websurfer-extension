// createApi를 import하기위해 React 엔트리 포인트 사용
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as T from './webSerfer.type';

// base URL과 엔드포인트들로 서비스 정의
export const webSerferApi = createApi({
  reducerPath: 'webSerferApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.websurfer.ga/' }),
  endpoints: (builder) => ({
    testGetPokemon: builder.query<T.testGetPokemonResponse, string>({
      query: (name) => `https://pokeapi.co/api/v2/pokemon/${name}`,
    }),
  }),
});

// 정의된 엔드포인트에서 자동으로 생성된 훅을 함수형 컴포넌트에서 사용하기 위해 export
export const { useTestGetPokemonQuery } = webSerferApi;
