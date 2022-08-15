export interface TokenRequestParam {
  email: string;
  googleTokenId: string;
}

export interface TokenResponse {
  access: string;
  refresh: string;
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

export interface UserEntity {
  id: number;
  name?: string;
  createAt: string; //Date;
  updatedAt: string;
  email: string;
  googleIdToken: string;
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

export interface DailyReportEntity {
  user: UserEntity;
  userId: number;
  totalDuration: number; //그날 사용한 총 시간(초)
  duration0: number; //0~1시
  duration1: number; //2~3시
  duration2: number; //4~5시
  duration3: number; //6~7시
  duration4: number; //8~9시
  duration5: number; //10~11시
  duration6: number; //12~13시
  duration7: number; //14~15시
  duration8: number; //16~17시
  duration9: number; //18~19시
  duration10: number; //20~21시
  duration11: number; //22~23시
  date: string; //날짜 (2022-08-14)
}

export interface BaseIdEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface WebsiteEntity extends BaseIdEntity {
  achievementId: number;
  name: string;
  hostname: string;
  faviconUrl: string;
}

export interface AchievementEntity {
  websites: WebsiteEntity[];
  name: string;
  color: string;
  imageUrl: string;
  cardImageUrl: string;
  category: string;
}

interface IWebSite {
  id: number;
  createdAt: string;
  updatedAt: string;
  achievementId: number | null;
  name: string;
  hostname: string;
  faviconUrl: string | null;
}

export interface HistoryListRequest extends UserEntity {
  filter?: EntityFilter;
  startDate: Date | undefined;
  endDate: Date | undefined;
  keyword: string | undefined;
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

export interface StatResponse {
  lastUpdatedAt: Date;

  daiilyReports: DailyReportEntity[];

  achievement: AchievementEntity;

  mostVisitedWebsites: { website: WebsiteEntity; amount: number }[];
  mostDurationWebsites: { website: WebsiteEntity; amount: number }[];

  todayDuration: number;
  totalDuration: number;
  morningDuration: number;
  daytimeDuration: number;
  dinnerDuration: number;
  nightDuration: number;

  duration0: number;
  duration1: number;
  duration2: number;
  duration3: number;
  duration4: number;
  duration5: number;
  duration6: number;
  duration7: number;
  duration8: number;
  duration9: number;
  duration10: number;
  duration11: number;
}
