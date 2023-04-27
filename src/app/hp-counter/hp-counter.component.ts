import { Component } from '@angular/core';

@Component({
  selector: 'app-hp-counter',
  templateUrl: './hp-counter.component.html',
  styleUrls: ['./hp-counter.component.scss']
})
export class HpCounterComponent {
    current = 20;
    max = 20;

}
