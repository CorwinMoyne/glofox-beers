import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderService {

  /**
   * builds a url with the provided params
   *
   * @param url the base url
   * @param values the param values to add to the base url
   */
  buildUrl(url: string, values?: string[]): string {
    if (values) {
      let i = values.length;
      while (i--) {
        url = url.replace(new RegExp('\\{' + i + '\\}', 'gm'), values[i]);
      }
    }
    return url;
  }
}
