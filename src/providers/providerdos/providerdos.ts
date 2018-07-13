import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * 
 * @ignore
 */
@Injectable()
export class ProviderdosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProviderdosProvider Provider');
  }

}
