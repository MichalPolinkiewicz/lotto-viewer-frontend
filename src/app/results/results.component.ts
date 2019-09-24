import { Component, OnInit, Input } from '@angular/core';
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
  }

  logResults() {
  }
}
