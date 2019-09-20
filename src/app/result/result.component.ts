import { Component, OnInit } from '@angular/core';
import { LottoViewerClientService } from '../lotto-viewer-client.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  results: Object
  result: Object
  selected: string;

  constructor(private service: LottoViewerClientService) { }

  ngOnInit() {
    this.service.getResults().subscribe(r => this.results = r)
  }

  onSelectedGame(){
    this.service.getResult(this.selected).subscribe(r => this.result = r)
  }
}
