import { webSerferApi } from './webSerfer';
import * as T from './webSerfer.type';

const authApi = webSerferApi.injectEndpoints({
  endpoints: (builder) => ({
    getHistoryList: builder.query<T.HistoryListReponse, T.HistoryListRequest>({
      query: (body) => ({
        url: `/histories`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetHistoryListQuery } = authApi;
