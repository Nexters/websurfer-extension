export interface TokenRequestParam {
  email: string;
  googleTokenId: string;
}

export interface TokenResponse {
  access: string;
  refresh: string;
}

export interface UserEntity {
  id?: number;
  name?: string;
  createAt?: string; //Date;
}

export type EntityFilter =
  | 'equal' //값 비교
  | 'not' //일치하지 않는 entity 탐색
  | 'like' //입력한 문자열로 시작하는 값 탐색
  | 'include' //입력한 문자열 포함 하는 값
  | 'in' // 입력된 배열에 포함되는 값
  | 'notIn' // 입력된 배열에 포함되지 않는 값
  | 'between' //두 값 사이에 속하는 값
  | 'mt' //more than(초과)
  | 'mte' //more than or equal(이상)
  | 'lt' //less than(미만)
  | 'lte' //less than or equal (이하)
  | 'isNull'; //nullish 비교 연산
// Entity filter 문서 참고 (https://www.notion.so/Entity-filter-1449297f64ed45ec83db48b150694328)

interface IWebSite {
  id: number;
  createdAt: string;
  updatedAt: string;
  achievementId: number | null;
  name: string;
  hostname: string;
  faviconUrl: string | null;
}
export interface HistoryEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  user: UserEntity;
  userId: number;

  href: string;

  title?: string;
  description?: string;
  duration: number;
  website: IWebSite;
}

export interface HistoryListRequest extends UserEntity {
  filter?: EntityFilter;
  startDate: Date | undefined;
  endDate: Date | undefined;
  keyword: string;
}
export type HistoryListReponse = HistoryEntity[];

export type CreateHistoryParamType = {
  href: string;
  title: string;
};

export type IncreaseDurationParamType = {
  id: number;
  seconds: number;
};
