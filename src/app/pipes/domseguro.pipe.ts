import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private _domSanitizer: DomSanitizer) { }

  transform(value: any, url: string): /*any*/   SafeResourceUrl {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}