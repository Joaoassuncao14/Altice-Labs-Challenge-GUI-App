import { Component, OnInit } from '@angular/core';
import { CalculeSequenceService } from 'src/app/services/calcule-sequence.service';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.scss']
})
export class InputValueComponent implements OnInit{

  numb!: number;
  result?: any;

  constructor(
    private calculeSequenceService: CalculeSequenceService
    ){}

  ngOnInit(): void {}

  getResult(){
    if(typeof this.numb !== 'number'){
      alert('Invalid input')
      return;
    }
    
    this.calculeSequenceService.getLabseqResult(this.numb).subscribe(
      response => this.result = response,
      error => console.error(error)
    );
    
  }

  clearResult(){
    this.result = null
  }

}
