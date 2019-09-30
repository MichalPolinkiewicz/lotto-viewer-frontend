import { Component, OnInit, Input } from '@angular/core';
import { LottoViewerClientService } from '../lotto-viewer-client.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-number-check',
  templateUrl: './number-check.component.html',
  styleUrls: ['./number-check.component.css']
})
export class NumberCheckComponent implements OnInit {

  messageForm: FormGroup
  numbers: Object
  results: Object
  selected: number;
  numbersOfInput: number = -1;
  numbersOfExtraInput: number = -1;
  checked: boolean = false;
  invalid: boolean = false;
  counts: Object;

  inputNumberForGame: { [key: number]: number } = {
    0: 6, //lotto
    1: 4, //lotto plus
    2: 0, //mini
    3: 0, //kaskada 1
    4: 0,  // kaskada 2
    5: 0, //mm1
    6: 0, //mm2
    7:2, //extra pensja
    8: 0, //ss1
    9:0, //ss2
    10:5, //ej
  }

  extraInputNumberForGame: {[key:number]:number} = {
    7 : 1,
    10: 2,
    5: 1,
    6: 1
  }

  constructor(private service: LottoViewerClientService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.service.getResults().subscribe(r => this.results = r)
    this.checked = false;
    this.invalid = false;
  }

  get userNumbers(): FormArray { return this.messageForm.get('userNumbers') as FormArray; }
  get extraNumbers(): FormArray {return this.messageForm.get('extraNumbers') as FormArray;}

  onSelectedGame() {
    this.numbersOfInput = this.inputNumberForGame[this.selected]
    this.numbersOfExtraInput = this.extraInputNumberForGame[this.selected]
    
    this.invalid = false;
    this.checked = false;
    
    this.messageForm = this.formBuilder.group({
      userNumbers: new FormArray(
        this.createUserInputsArray(this.numbersOfInput),
        Validators.required),
        
        extraNumbers: new FormArray(
          this.createUserInputsArray(this.numbersOfExtraInput),
          Validators.required
        )
    });
  }

  createUserInputsArray(size: number) {
    let out = []
    let i = 0
    while (i < size) {
      out.push(new FormControl('', Validators.required));
      i++
    }
    return out;
  }

  onCheckGame() {
    if (this.messageForm.value.userNumbers.invalid | this.messageForm.value.extraNumbers.invalid)  {
      console.log("invalid33")
      this.invalid = true;
      return
    }
    this.checked = true;
    this.invalid = false;
    this.service.checkNumbers(this.selected.toString(), this.messageForm.value.userNumbers, this.messageForm.value.extraNumbers).subscribe(n => this.counts = n)
  }

}
