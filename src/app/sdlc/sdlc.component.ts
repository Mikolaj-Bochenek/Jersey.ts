import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sdlc',
  templateUrl: './sdlc.component.html',
  styleUrls: ['./sdlc.component.css']
})
export class SdlcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCalc(form: NgForm): void {
    const distortedNumber = 3;
    const distortedRange = 4;
    const frameSize = 3;
    let lastDistorted = null;
    let current = 1;
    let global = 1;
    let done = false;
    let currentChanged = false;
    while (true && !done) {
      currentChanged = false;
      if (lastDistorted) {
        current = lastDistorted;
      }
      for (let i = 0; i < frameSize; i++) {
        if (((global - distortedNumber) % distortedRange) === 0) {
          console.log('distorted', current);
          lastDistorted = current; // 15
          currentChanged = true;
        } else {
          console.log(current);
        }
        if (i === 2 && currentChanged === false) {
          lastDistorted = null;
        }
        if (current === 16) {
          console.log('exit');
          done = true;
          break;
        }
        current++;
        global++;
      }
    }
    console.log('global', global);
  }

}
