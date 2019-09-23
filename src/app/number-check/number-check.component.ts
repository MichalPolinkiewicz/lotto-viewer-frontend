import { Component, OnInit, Input } from '@angular/core';
import { LottoViewerClientService } from '../lotto-viewer-client.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-number-check',
  templateUrl: './number-check.component.html',
  styleUrls: ['./number-check.component.css']
})
export class NumberCheckComponent implements OnInit {

  numbers: Object
  results: Object
  selected: number;
  numbersOfInput: number = -1;

  counts: Object

  inputNumberForGame: { [key: number]: number } = {
    0: 6, //lotto
    1: 4,
    2: 8
  }

  messageForm: FormGroup

  constructor(private service: LottoViewerClientService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.service.getResults().subscribe(r => this.results = r)
  }

  get userNumbers(): FormArray { return this.messageForm.get('userNumbers') as FormArray; }

  onSelectedGame() {
    this.numbersOfInput = this.inputNumberForGame[this.selected]
    this.messageForm = this.formBuilder.group({
      userNumbers: new FormArray(
        this.createUserInputsArray(),
        Validators.required),
    });
    console.log(this.numbersOfInput)
  }

  createUserInputsArray() {
    let out = []
    let i = 0
    while (i < this.numbersOfInput) {
      out.push(new FormControl());
      i++
    }
    return out;
  }

  onCheckGame() {
    if (this.messageForm.invalid) {
      return
    }
    this.service.checkNumbers(this.selected.toString(), this.messageForm.value.userNumbers).subscribe(n => this.counts = n)
    console.log('counts: ' + this.counts)
  }

}
