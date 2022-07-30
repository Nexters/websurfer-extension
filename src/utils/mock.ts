import { format } from 'date-fns';
import { LogoIcon } from '../assets/img/svg-icon-paths';

interface historyItem {
  id: string;
  lastVisitTime: number;
  title: string;
  typedCount: number;
  url: string;
  visitCount: number;
}

const chromeHistory: historyItem[] = [
  {
    id: '372094',
    lastVisitTime: 1658991303280.114,
    title: 'chrome.history - Chrome Developers',
    typedCount: 0,
    url: 'https://developer.chrome.com/docs/extensions/reference/history/#method-search',
    visitCount: 3,
  },
  {
    id: '369562',
    lastVisitTime: 1658991285698.318,
    title: 'chrome.history - Chrome Developers',
    typedCount: 0,
    url: 'https://developer.chrome.com/docs/extensions/reference/history/',
    visitCount: 4,
  },
  {
    id: '375920',
    lastVisitTime: 1658991283988.566,
    title: 'chrome history api - Google 검색',
    typedCount: 0,
    url: 'https://www.google.com/search?q=chrome+history+api&oq=chrome+history+api&aqs=chrome.0.69i59j0i512j0i5i30.1972j0j1&sourceid=chrome&ie=UTF-8',
    visitCount: 2,
  },
  {
    id: '367011',
    lastVisitTime: 1658991241067.7021,
    title: 'Settings',
    typedCount: 0,
    url: 'chrome-extension://aceedphljoofldblhdgjcbebjelgdcog/options.html',
    visitCount: 214,
  },
  {
    id: '375919',
    lastVisitTime: 1658991110575.623,
    title: "잠실 찾은 '이 선수' 주목!...한국은 205cm 포프를 막아야한다",
    typedCount: 0,
    url: 'https://sports.news.naver.com/news?oid=445&aid=0000062562',
    visitCount: 1,
  },
  {
    id: '118850',
    lastVisitTime: 1658991106407.848,
    title: '배구 : 네이버 스포츠',
    typedCount: 0,
    url: 'https://sports.news.naver.com/volleyball/index',
    visitCount: 414,
  },
  {
    id: '375916',
    lastVisitTime: 1658991077392.8152,
    title: '기록/순위, 야구 : 네이버 스포츠',
    typedCount: 0,
    url: 'https://sports.news.naver.com/kbaseball/record/index?category=kbo&year=2022&type=pitcher&playerOrder=w',
    visitCount: 1,
  },
  {
    id: '375915',
    lastVisitTime: 1658991075373.1238,
    title: '기록/순위, 야구 : 네이버 스포츠',
    typedCount: 0,
    url: 'https://sports.news.naver.com/kbaseball/record/index?category=kbo&year=2022&type=pitcher&playerOrder=sv',
    visitCount: 1,
  },
  {
    id: '319430',
    lastVisitTime: 1658991006228.0322,
    title: '기록/순위, 야구 : 네이버 스포츠',
    typedCount: 0,
    url: 'https://sports.news.naver.com/kbaseball/record/index?category=kbo',
    visitCount: 4,
  },
  {
    id: '119028',
    lastVisitTime: 1658991004300.15,
    title: '야구 : 네이버 스포츠',
    typedCount: 0,
    url: 'https://sports.news.naver.com/kbaseball/index',
    visitCount: 109,
  },
  {
    id: '123615',
    lastVisitTime: 1658991002720.419,
    title: '스포츠홈 : 네이버 스포츠',
    typedCount: 0,
    url: 'https://sports.news.naver.com/index',
    visitCount: 680,
  },
  {
    id: '282',
    lastVisitTime: 1658991000994.166,
    title: 'NAVER',
    typedCount: 2383,
    url: 'https://www.naver.com/',
    visitCount: 3211,
  },
  {
    id: '375911',
    lastVisitTime: 1658990993306.61,
    title: '이우찬 : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%B4%EC%9A%B0%EC%B0%AC',
    visitCount: 1,
  },
  {
    id: '685',
    lastVisitTime: 1658990954681.535,
    title: 'Daum',
    typedCount: 1007,
    url: 'https://www.daum.net/',
    visitCount: 1100,
  },
  {
    id: '691',
    lastVisitTime: 1658990950320.783,
    title: '받은메일함 | Daum 메일',
    typedCount: 450,
    url: 'https://mail.daum.net/',
    visitCount: 468,
  },
  {
    id: '375910',
    lastVisitTime: 1658990847810.872,
    title: 'Frontend Software Engineer | 레몬베이스',
    typedCount: 0,
    url: 'https://www.wanted.co.kr/wd/88272',
    visitCount: 1,
  },
  {
    id: '18447',
    lastVisitTime: 1658990828878.3728,
    title: '채용 정보 | 원티드',
    typedCount: 0,
    url: 'https://www.wanted.co.kr/wdlist/518/669?country=kr&job_sort=job.latest_order&years=3&locations=all',
    visitCount: 170,
  },
  {
    id: '210067',
    lastVisitTime: 1658990826126.1548,
    title: '프론트엔드 개발자 채용 정보 | 원티드',
    typedCount: 0,
    url: 'https://www.wanted.co.kr/wdlist/518/669?country=kr&job_sort=company.response_rate_order&years=3&locations=all',
    visitCount: 152,
  },
  {
    id: '1926',
    lastVisitTime: 1658990826040.8909,
    title: '프론트엔드 개발자 채용 정보 | 원티드',
    typedCount: 0,
    url: 'https://www.wanted.co.kr/wdlist/518/669',
    visitCount: 183,
  },
  {
    id: '372159',
    lastVisitTime: 1658990817590.373,
    title: '원티드 - 나다운 일의 시작',
    typedCount: 0,
    url: 'https://www.wanted.co.kr/status/applications?q&start_date=&end_date=',
    visitCount: 16,
  },
  {
    id: '362915',
    lastVisitTime: 1658990817522.63,
    title: '원티드 - 나다운 일의 시작',
    typedCount: 0,
    url: 'https://www.wanted.co.kr/status/applications',
    visitCount: 30,
  },
  {
    id: '1599',
    lastVisitTime: 1658990813688.373,
    title: '원티드 - 나다운 일의 시작',
    typedCount: 14,
    url: 'https://www.wanted.co.kr/',
    visitCount: 368,
  },
  {
    id: '271',
    lastVisitTime: 1658990801301.933,
    title: 'Instagram',
    typedCount: 1,
    url: 'https://www.instagram.com/',
    visitCount: 6584,
  },
  {
    id: '375909',
    lastVisitTime: 1658990784914.788,
    title: 'Notion for Startups',
    typedCount: 0,
    url: 'https://www.notion.so/startups',
    visitCount: 3,
  },
  {
    id: '375906',
    lastVisitTime: 1658990716782.0588,
    title: '마이.카츄 🇰🇷(@my_kachu) • Instagram 사진 및 동영상',
    typedCount: 0,
    url: 'https://www.instagram.com/my_kachu/',
    visitCount: 4,
  },
  {
    id: '375908',
    lastVisitTime: 1658990713183.445,
    title: '마이.카츄 🇰🇷(@my_kachu) • Instagram 사진 및 동영상',
    typedCount: 0,
    url: 'https://www.instagram.com/my_kachu/followers/',
    visitCount: 1,
  },
  {
    id: '375907',
    lastVisitTime: 1658990709257.887,
    title: '마이.카츄 🇰🇷(@my_kachu) • Instagram 사진 및 동영상',
    typedCount: 0,
    url: 'https://www.instagram.com/my_kachu/following/',
    visitCount: 1,
  },
  {
    id: '375904',
    lastVisitTime: 1658990464773.0562,
    title: '위니아',
    typedCount: 0,
    url: 'https://www.winia.com/main',
    visitCount: 1,
  },
  {
    id: '375900',
    lastVisitTime: 1658990462108.254,
    title: '대유위니아 : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%8C%80%EC%9C%A0%EC%9C%84%EB%8B%88%EC%95%84&oquery=%EC%9C%84%EB%8B%88%EC%95%84&tqi=hX4Ykwp0JywsshjKdLhssssssfl-269380',
    visitCount: 1,
  },
  {
    id: '375899',
    lastVisitTime: 1658990447790.1152,
    title: '위니아 : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%9C%84%EB%8B%88%EC%95%84&oquery=%EB%A7%8C%EB%8F%84&tqi=hX4Yhwp0YihssMGxzsZssssssHd-186941',
    visitCount: 1,
  },
  {
    id: '375898',
    lastVisitTime: 1658990435599.3308,
    title: '만도 : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%A7%8C%EB%8F%84+&oquery=%EB%A7%8C%EB%8F%84+%EC%B1%84%EC%9A%A9&tqi=hX4Ynsp0Yihssn5aelGssssstHZ-380423',
    visitCount: 1,
  },
  {
    id: '375897',
    lastVisitTime: 1658990413149.88,
    title: '만도 채용',
    typedCount: 0,
    url: 'https://mando.saramin.co.kr/_service/mando/apply_site/apply/recruit_default.asp',
    visitCount: 1,
  },
  {
    id: '375895',
    lastVisitTime: 1658990399817.3909,
    title: '인재채용 > 채용공고 - MANDO',
    typedCount: 0,
    url: 'https://www.mando.com/recruit/recruit12.jsp',
    visitCount: 1,
  },
  {
    id: '375893',
    lastVisitTime: 1658990396013.5989,
    title: '만도 채용 : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EB%A7%8C%EB%8F%84+%EC%B1%84%EC%9A%A9',
    visitCount: 1,
  },
  {
    id: '1834',
    lastVisitTime: 1658990390915.5159,
    title: '네이버 뉴스',
    typedCount: 0,
    url: 'https://news.naver.com/',
    visitCount: 2143,
  },
  {
    id: '278',
    lastVisitTime: 1658990167419.167,
    title: 'Facebook',
    typedCount: 1797,
    url: 'https://www.facebook.com/',
    visitCount: 3839,
  },
  {
    id: '375892',
    lastVisitTime: 1658989877433.948,
    title:
      "매물로 나온 '왓챠'…경영권 매각 '카드'까지 꺼내들었다 [Geeks' Briefing]",
    typedCount: 0,
    url: 'https://n.news.naver.com/article/015/0004729918?sid=105',
    visitCount: 1,
  },
  {
    id: '274708',
    lastVisitTime: 1658989876911.5159,
    title: '한국경제 :: 네이버뉴스',
    typedCount: 0,
    url: 'https://media.naver.com/press/015?sid=105#lnb',
    visitCount: 67,
  },
  {
    id: '375891',
    lastVisitTime: 1658989841425.2578,
    title: '"카톡으로 보험 상담 통했죠"…연금·대출 상품도 곧 출시',
    typedCount: 0,
    url: 'https://n.news.naver.com/article/015/0004730287?sid=105',
    visitCount: 1,
  },
  {
    id: '375890',
    lastVisitTime: 1658989807459.077,
    title: '11억하던 성북구 아파트가 8억…집값 무섭게 떨어진다',
    typedCount: 0,
    url: 'https://n.news.naver.com/article/015/0004730265?cds=news_media_pc',
    visitCount: 1,
  },
  {
    id: '375889',
    lastVisitTime: 1658989790979.4941,
    title: '다나, 27kg 뺐다고 자랑 한 달째…이슈몰이 언제까지? :: 네이버 TV연예',
    typedCount: 0,
    url: 'https://entertain.naver.com/ranking/read?oid=311&aid=0001481713',
    visitCount: 1,
  },
  {
    id: '375888',
    lastVisitTime: 1658989788437.301,
    title:
      "이정재, '8년 연인♥' 임세령 얼마나 좋으면…대상 부회장이 '헌트'에? \"특별히 감사\" [종합] :: 네이버 TV연예",
    typedCount: 0,
    url: 'https://entertain.naver.com/ranking/read?oid=117&aid=0003629790',
    visitCount: 1,
  },
  {
    id: '356',
    lastVisitTime: 1658989784745.058,
    title: '네이버 TV연예',
    typedCount: 0,
    url: 'https://entertain.naver.com/home',
    visitCount: 484,
  },
  {
    id: '375887',
    lastVisitTime: 1658989772455.6821,
    title:
      'Setting up the project on local environment · Wiki · Adriel / Adriel_Server · GitLab',
    typedCount: 0,
    url: 'https://gitlab.com/adriel2/adriel_server/-/wikis/Setting-up-the-project-on-local-environment',
    visitCount: 1,
  },
  {
    id: '375886',
    lastVisitTime: 1658989709188.459,
    title: '2기 신도시 너무 하락하는데요 : 네이버 카페',
    typedCount: 0,
    url: 'https://cafe.naver.com/jaegebal/3904150',
    visitCount: 1,
  },
  {
    id: '129729',
    lastVisitTime: 1658989698122.181,
    title: '네이버 카페',
    typedCount: 0,
    url: 'https://section.cafe.naver.com/ca-fe/',
    visitCount: 30,
  },
  {
    id: '356930',
    lastVisitTime: 1658989463617.5898,
    title: '[Banking] Product Engineer(Front-End)',
    typedCount: 0,
    url: 'https://kcd.career.greetinghr.com/o/12901',
    visitCount: 4,
  },
  {
    id: '356928',
    lastVisitTime: 1658989442306.741,
    title: '[Community] Product Engineer(Front-End)',
    typedCount: 0,
    url: 'https://kcd.career.greetinghr.com/o/27903',
    visitCount: 4,
  },
  {
    id: '375885',
    lastVisitTime: 1658989431507.6958,
    title: '인재영입 | 한국신용데이터',
    typedCount: 0,
    url: 'https://kcd.co.kr/recruit?search=&category=engineering',
    visitCount: 1,
  },
  {
    id: '375884',
    lastVisitTime: 1658989428094.475,
    title: '인재영입 | 한국신용데이터',
    typedCount: 0,
    url: 'https://kcd.co.kr/recruit?search=&category=%EC%A0%84%EC%B2%B4',
    visitCount: 1,
  },
  {
    id: '375883',
    lastVisitTime: 1658989428090.966,
    title: '인재영입 | 한국신용데이터',
    typedCount: 0,
    url: 'https://kcd.co.kr/recruit?type=%EC%A0%84%EC%B2%B4',
    visitCount: 3,
  },
  {
    id: '261',
    lastVisitTime: 1658989400298.43,
    title: '업데이트 | LinkedIn',
    typedCount: 0,
    url: 'https://www.linkedin.com/feed/',
    visitCount: 427,
  },
  {
    id: '256',
    lastVisitTime: 1658989399392.0032,
    title: 'LinkedIn',
    typedCount: 306,
    url: 'https://www.linkedin.com/',
    visitCount: 609,
  },
  {
    id: '375881',
    lastVisitTime: 1658989355551.38,
    title:
      'react-dates/react-dates: An easily internationalizable, mobile-friendly datepicker library for the web',
    typedCount: 0,
    url: 'https://github.com/react-dates/react-dates',
    visitCount: 1,
  },
  {
    id: '375880',
    lastVisitTime: 1658989344765.369,
    title: 'Search · react calendar',
    typedCount: 0,
    url: 'https://github.com/search?o=desc&q=react+calendar&s=stars&type=Repositories',
    visitCount: 1,
  },
  {
    id: '375879',
    lastVisitTime: 1658989338424.029,
    title: 'Search · react calendar',
    typedCount: 0,
    url: 'https://github.com/search?q=react+calendar',
    visitCount: 1,
  },
  {
    id: '325',
    lastVisitTime: 1658989332533.62,
    title: 'GitHub',
    typedCount: 76,
    url: 'https://github.com/',
    visitCount: 264,
  },
  {
    id: '375878',
    lastVisitTime: 1658989312371.7761,
    title: 'react calendar - Google 검색',
    typedCount: 0,
    url: 'https://www.google.com/search?q=react+calendar&oq=react+calendar&aqs=chrome.0.0i131i433i512j0i512l6j69i60.3408j0j1&sourceid=chrome&ie=UTF-8',
    visitCount: 2,
  },
  {
    id: '375231',
    lastVisitTime: 1658989190537.0159,
    title: 'Team.샤카샤카 – Figma',
    typedCount: 0,
    url: 'https://www.figma.com/file/hWSNbIX1vWuVyWN9PqWoxm/Team.%EC%83%A4%EC%B9%B4%EC%83%A4%EC%B9%B4?node-id=241%3A7733',
    visitCount: 12,
  },
  {
    id: '375877',
    lastVisitTime: 1658989179670.9658,
    title: 'Team.샤카샤카 – Figma',
    typedCount: 0,
    url: 'https://www.figma.com/file/hWSNbIX1vWuVyWN9PqWoxm/Team.%EC%83%A4%EC%B9%B4%EC%83%A4%EC%B9%B4?node-id=241%3A7640',
    visitCount: 1,
  },
  {
    id: '375876',
    lastVisitTime: 1658989112532.744,
    title: '코미코',
    typedCount: 0,
    url: 'https://www.comico.kr/',
    visitCount: 2,
  },
  {
    id: '375874',
    lastVisitTime: 1658989097020.946,
    title: '코미코 : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%BD%94%EB%AF%B8%EC%BD%94&oquery=nhn&tqi=hX4pTsp0Yidssh1SlS0ssssssDC-024676',
    visitCount: 1,
  },
  {
    id: '375873',
    lastVisitTime: 1658988959825.851,
    title: '콘텐츠퍼스트 : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%BD%98%ED%85%90%EC%B8%A0%ED%8D%BC%EC%8A%A4%ED%8A%B8&oquery=%ED%83%9C%ED%94%BC%ED%88%B0&tqi=hX4pBwp0J14ssi5m16dssssssIZ-174990',
    visitCount: 1,
  },
  {
    id: '375871',
    lastVisitTime: 1658988948461.4648,
    title: 'Attention Required! | Cloudflare',
    typedCount: 0,
    url: 'https://namu.wiki/w/Tappytoon',
    visitCount: 2,
  },
  {
    id: '375872',
    lastVisitTime: 1658988947990.677,
    title: 'Attention Required! | Cloudflare',
    typedCount: 0,
    url: 'https://namu.wiki/w/Tappytoon?__cf_chl_rt_tk=yGUmFY1Zuu1J739Xivvjk.uGo2iS.GVgmzOYX3bOR84-1658988947-0-gaNycGzNC5E',
    visitCount: 1,
  },
  {
    id: '375869',
    lastVisitTime: 1658988943417.166,
    title: '태피툰 : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%ED%83%9C%ED%94%BC%ED%88%B0',
    visitCount: 1,
  },
  {
    id: '375868',
    lastVisitTime: 1658988907601.0361,
    title: "NHN '포켓코믹스', 프랑스서 10일 연속 웹툰앱 매출 1위 | 연합뉴스",
    typedCount: 0,
    url: 'https://www.yna.co.kr/view/AKR20220727054000017?input=1195m',
    visitCount: 1,
  },
  {
    id: '375865',
    lastVisitTime: 1658988888900.462,
    title: 'nhn : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=nhn&oquery=nhn%EC%B1%84%EC%9A%A9&tqi=hX4Fylp0J1ZssNZ%2F60KssssstVh-492910',
    visitCount: 2,
  },
  {
    id: '375866',
    lastVisitTime: 1658988882444.749,
    title: 'nhn한국사이버결제 : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?sm=tab_sug.top&where=nexearch&query=nhn%ED%95%9C%EA%B5%AD%EC%82%AC%EC%9D%B4%EB%B2%84%EA%B2%B0%EC%A0%9C&oquery=nhn&tqi=hX4pMsp0JXVssAW%2FZQ8ssssssao-058107&acq=nhn%ED%95%9C%EA%B5%AD&acr=1&qdt=0',
    visitCount: 1,
  },
  {
    id: '368434',
    lastVisitTime: 1658988789638.35,
    title: 'NHN 채용 공고(법인별 공고)',
    typedCount: 0,
    url: 'https://recruit.nhn.com/ent/recruitings?type=company',
    visitCount: 3,
  },
  {
    id: '375864',
    lastVisitTime: 1658988723504.7222,
    title: '픽셀릭(릴레잇) - 기업정보 - THE VC',
    typedCount: 0,
    url: 'https://thevc.kr/pixelic',
    visitCount: 3,
  },
  {
    id: '375862',
    lastVisitTime: 1658988717608.2139,
    title: '픽셀릭 : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%ED%94%BD%EC%85%80%EB%A6%AD&oquery=pixelic&tqi=hX4oQwp0YiRssTVOkAsssssstQ8-499120',
    visitCount: 1,
  },
  {
    id: '375861',
    lastVisitTime: 1658988680593.556,
    title:
      'Relate 릴레잇: 지속적인 성장을 위한 영업 관리 CRM & 세일즈 협업 소프트웨어',
    typedCount: 0,
    url: 'https://www.relate.kr/',
    visitCount: 1,
  },
  {
    id: '375859',
    lastVisitTime: 1658988671573.7778,
    title: 'pixelic : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=pixelic',
    visitCount: 1,
  },
  {
    id: '375858',
    lastVisitTime: 1658988626635.8572,
    title:
      ':: 크레이지풋볼 :: `선수 영입 부족` 불만 폭발해 단장이랑 한판 붙은 세리에 감독 ㄷㄷㄷㄷ',
    typedCount: 0,
    url: 'https://www.worldsoccer.co.kr/news/board_list_view.php?gisa_uniq=20220728131436&fbclid=IwAR1wEBWTAcXgdksu_srmNwfApV-klYYzhRQVJntBISmcbaSU5wdh0H3kgfc',
    visitCount: 1,
  },
  {
    id: '368435',
    lastVisitTime: 1658988556176.5598,
    title: 'NHN 채용공고',
    typedCount: 0,
    url: 'https://recruit.nhn.com/ent/recruitings/20002360',
    visitCount: 2,
  },
  {
    id: '364068',
    lastVisitTime: 1658988536901.6199,
    title: '개발 부문 채용',
    typedCount: 0,
    url: 'https://www.nhncloud-seasonrecruit.com/dev',
    visitCount: 6,
  },
  {
    id: '368432',
    lastVisitTime: 1658988533141.403,
    title: 'NHN Cloud 시즌채용 SUMMER',
    typedCount: 0,
    url: 'https://www.nhncloud-seasonrecruit.com/',
    visitCount: 4,
  },
  {
    id: '368430',
    lastVisitTime: 1658988524286.084,
    title: 'NHN 채용',
    typedCount: 0,
    url: 'https://recruit.nhn.com/ent/index',
    visitCount: 2,
  },
  {
    id: '375854',
    lastVisitTime: 1658988493329.218,
    title: '세상과 호흡하는 기술, NHN',
    typedCount: 0,
    url: 'https://www.nhn.com/ko/index.nhn',
    visitCount: 1,
  },
  {
    id: '375851',
    lastVisitTime: 1658988490606.739,
    title: 'nhn채용 : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=nhn%EC%B1%84%EC%9A%A9&oquery=%EC%B9%B4%EC%B9%B4%EC%98%A4%EC%97%94%ED%84%B0%ED%85%8C%EC%9D%B8%EB%A8%BC%ED%8A%B8+%EC%B1%84%EC%9A%A9&tqi=hX4FUsp0YiRssTF34rhssssstLC-224239',
    visitCount: 1,
  },
  {
    id: '375850',
    lastVisitTime: 1658988429688.966,
    title:
      '"게 섯거라 라인망가" 약진하는 NHN 코미코...웹툰한류 대표주자로 \'우뚝\'  < 콘텐츠 < 뉴스 < 기사본문 - 테크M',
    typedCount: 0,
    url: 'https://www.techm.kr/news/articleView.html?idxno=99866&fbclid=IwAR1SF-J9DlibyFC_S9A4FpRBtKXYKdQOA2dl0Rr02HUWVWa7NCYhsTzZs1Y',
    visitCount: 1,
  },
  {
    id: '355672',
    lastVisitTime: 1658988393776.763,
    title: '영입공고 | 영입정보 | 카카오엔터테인먼트',
    typedCount: 0,
    url: 'https://kakaoent.recruiter.co.kr/app/jobnotice/list',
    visitCount: 5,
  },
  {
    id: '355671',
    lastVisitTime: 1658988384130.357,
    title: '카카오엔터테인먼트 채용',
    typedCount: 0,
    url: 'https://kakaoent.recruiter.co.kr/appsite/company/index',
    visitCount: 4,
  },
  {
    id: '375847',
    lastVisitTime: 1658988380516.562,
    title: '카카오엔터테인먼트 채용 : 네이버 통합검색',
    typedCount: 0,
    url: 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%B9%B4%EC%B9%B4%EC%98%A4%EC%97%94%ED%84%B0%ED%85%8C%EC%9D%B8%EB%A8%BC%ED%8A%B8+%EC%B1%84%EC%9A%A9',
    visitCount: 1,
  },
  {
    id: '375846',
    lastVisitTime: 1658988316202.927,
    title: '14.5억→12억 된 아파트 집주인, 月 260만원씩 30년 받는 비결',
    typedCount: 0,
    url: 'https://n.news.naver.com/article/015/0004730081?cds=news_media_pc',
    visitCount: 1,
  },
  {
    id: '375845',
    lastVisitTime: 1658988308799.96,
    title: '김용진 경기도부지사, 도의회 국민의힘 대표와 만찬서 술잔 던져 파문',
    typedCount: 0,
    url: 'https://n.news.naver.com/article/032/0003162995?cds=news_media_pc',
    visitCount: 1,
  },
  {
    id: '84661',
    lastVisitTime: 1658988283299.991,
    title: '받은편지함 (380) - beomyeon.kim@gmail.com - Gmail',
    typedCount: 0,
    url: 'https://mail.google.com/mail/u/2/#inbox',
    visitCount: 163,
  },
  {
    id: '1078',
    lastVisitTime: 1658988270414.886,
    title: '받은편지함 (3,138) - beom911@gmail.com - Gmail',
    typedCount: 0,
    url: 'https://mail.google.com/mail/u/0/#inbox',
    visitCount: 66,
  },
  {
    id: '63127',
    lastVisitTime: 1658988233119.6,
    title: '홈 | 다음스포츠',
    typedCount: 0,
    url: 'https://sports.daum.net/',
    visitCount: 84,
  },
  {
    id: '375844',
    lastVisitTime: 1658988229108.638,
    title:
      "[시승기] 쌍용차 '렉스턴 스포츠 칸' | 국방부가 선택한 픽업트럭..야전 적합성 뛰어나",
    typedCount: 0,
    url: 'https://auto.v.daum.net/v/20220725180131571',
    visitCount: 1,
  },
  {
    id: '375843',
    lastVisitTime: 1658988179258.6519,
    title: '\'대박\' 토레스 주역 쌍용차 이강 상무 "축배는 아직..점수는 95점"',
    typedCount: 0,
    url: 'https://auto.v.daum.net/v/20220727061006659',
    visitCount: 1,
  },
  {
    id: '375842',
    lastVisitTime: 1658988080187.33,
    title: '아이오닉6와 모델3 비교해보니, 가격 차이는 2천만원 이상',
    typedCount: 0,
    url: 'https://auto.v.daum.net/v/1y9J2aHRZE',
    visitCount: 1,
  },
  {
    id: '168620',
    lastVisitTime: 1658987665349.28,
    title: '네이버 부동산',
    typedCount: 0,
    url: 'https://new.land.naver.com/interests',
    visitCount: 126,
  },
  {
    id: '112192',
    lastVisitTime: 1658987663005.1729,
    title: '네이버 부동산',
    typedCount: 201,
    url: 'https://land.naver.com/',
    visitCount: 203,
  },
  {
    id: '368279',
    lastVisitTime: 1658987641087.165,
    title: 'Team.샤카샤카 – Figma',
    typedCount: 0,
    url: 'https://www.figma.com/file/hWSNbIX1vWuVyWN9PqWoxm/Team.%EC%83%A4%EC%B9%B4%EC%83%A4%EC%B9%B4?node-id=41%3A110',
    visitCount: 54,
  },
  {
    id: '367531',
    lastVisitTime: 1658987636315.124,
    title: 'Team.샤카샤카 – Figma',
    typedCount: 0,
    url: 'https://www.figma.com/file/hWSNbIX1vWuVyWN9PqWoxm/Team.%EC%83%A4%EC%B9%B4%EC%83%A4%EC%B9%B4',
    visitCount: 15,
  },
  {
    id: '367530',
    lastVisitTime: 1658987628358.434,
    title: 'Recently viewed – Figma',
    typedCount: 0,
    url: 'https://www.figma.com/files/recent?fuid=607463783759858123',
    visitCount: 31,
  },
  {
    id: '190713',
    lastVisitTime: 1658987465380.083,
    title: 'Adriel App - Your Marketing Command Center',
    typedCount: 0,
    url: 'https://app.adriel.com/#/connection?accountId=15167&planType=A',
    visitCount: 53,
  },
  {
    id: '195816',
    lastVisitTime: 1658987465317.7668,
    title: 'Adriel App - Your Marketing Command Center',
    typedCount: 0,
    url: 'https://app.adriel.com/#/connection?accountId=15167',
    visitCount: 48,
  },
];

interface IrefinedItem extends historyItem {
  lastVisitDate: string;
  icon: string;
}

const refinedList: IrefinedItem[] = chromeHistory.map((v) => {
  return {
    ...v,
    lastVisitDate: format(v.lastVisitTime, 'yyyy.MM.dd'),
    icon: LogoIcon,
  };
});

export { refinedList as chromeHistory, IrefinedItem };