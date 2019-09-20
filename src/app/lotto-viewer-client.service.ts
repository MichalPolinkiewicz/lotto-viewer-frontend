import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LottoViewerClientService {

  constructor(private httpClient: HttpClient) { }

  getResults(){
    return this.httpClient.get('http://localhost:9091/results');
  }

  getGameResult(){}

  checkNumbers(){}
}
