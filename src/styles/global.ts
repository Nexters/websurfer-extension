import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const global = css`
  ${emotionNormalize}
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  html,
  body {
    padding: 0;
    margin: 0;
    background: white;
    min-height: 100%;
  }
  * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', sans-serif;
    box-sizing: border-box;
  }
`;

export default global;
