export interface UrlParams {
  [key: string]: string;
}

class URLUtil {
  public static parseUrlParams(): UrlParams {
    const urlParams: URLSearchParams = new URLSearchParams(
      window.location.search
    );
    const params: UrlParams = {};
    // @ts-ignore
    for (const [key, value] of urlParams) {
      params[key] = value;
    }
    return params;
  }
}

export default URLUtil;
