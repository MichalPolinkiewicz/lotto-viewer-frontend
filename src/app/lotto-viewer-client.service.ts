import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LottoViewerClientService {

  constructor(private httpClient: HttpClient) { }

  getResults() { return this.httpClient.get('http://localhost:9091/results'); }
  
  getResult(id: string) { return this.httpClient.get('http://localhost:9091/results/' + id) }

  checkNumbers(id: string, numbers: string[], extra: string[]) {
    let header = new HttpHeaders()
    header.set('status-code', '200')
    header.set('Content-Type', 'application/x-www-form-urlencoded');
    header.set('Origin', 'http://localhost:4200');

    var res = numbers.map(function (v) { return parseInt(v, 10); });

    var ex = extra.map(function (v) { return parseInt(v, 10); });

    return this.httpClient.post('http://localhost:9091/check', {
      "gameID": parseInt(id),
      "userNumbers": res,
      "extra": ex
    }, { headers: header })
  }
}
