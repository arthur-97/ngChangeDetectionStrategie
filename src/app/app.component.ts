import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'ngChangeDetectionComponentLifeCycle';

  public data = {
    string: 'string',
    array: [1, 2, 3, 4, 5],
  }

  public boolean = false;

  constructor() { }

  ngOnInit() {
    // setInterval(()=>{}, 1000)
    // const subscription = interval(1000).subscribe();
    // const timeout = (setTimeout as any).__zone_symbol__OriginalDelegate;
    // timeout(() => null, 500);
  }

  public changeString(): void {
    this.data.string = 'new string';
  }

  public changeArray(): void {
    this.data.array[this.data.array.length - 1] = 0;
  }

  public changeData(): void {
    this.data = {
      string: 'string of new data',
      array: [-1, -2, -3, -4, -5],
    }
  }

  public changeBoolean(): void {
    this.boolean = !this.boolean;
  }

}
