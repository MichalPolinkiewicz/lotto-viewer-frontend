import { Component, OnInit } from '@angular/core';
import { LottoViewerClientService } from '../lotto-viewer-client.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: Object;

  constructor(private service: LottoViewerClientService) { }

  ngOnInit() {
    this.service.getResults().subscribe(r => this.results = r);
    console.log("results fetched");
  }

  logResults(){
    console.log(this.results);
  }
}
