import { IWebSite } from '@redux/webSerfer.type';

const NoDataFavicon = './assets/basic_favicon_32.png';

export const refinedFaviconUrl = (website: IWebSite): string => {
  const faviconUrl = website?.faviconUrl;

  return faviconUrl &&
    !faviconUrl?.startsWith('/images') &&
    !faviconUrl?.endsWith('undefined')
    ? faviconUrl
    : NoDataFavicon;
};
