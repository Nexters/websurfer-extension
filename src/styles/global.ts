import { css } from '@emotion/react';
import { normalize } from 'polished';

const global = css`
  ${normalize()}
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  html,
  body {
    padding: 0;
    margin: 0;
    background: white;
    min-height: 100%;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: -0.2px;
  }
  * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', sans-serif;
    box-sizing: border-box;
  }

  p {
    margin: 0;
  }
`;

export default global;
