import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-default-root',
  templateUrl: './default-root.component.html',

})
export class DefaultRootComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public readonly title = 'default-root';

  @Input() data;
  @Input() boolean;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) { }

  ngOnChanges() {
    console.log(`${this.title.toUpperCase()} - ngOnChanges`);
  }

  ngOnInit() {
    console.log(`${this.title.toUpperCase()} - ngOnInit`);
  }

  ngDoCheck() {
    const timeout = (setTimeout as any).__zone_symbol__OriginalDelegate;
    timeout(this.markElement.bind(this), 150);
    console.log(`${this.title.toUpperCase()} - ngDoCheck`);
  }

  ngAfterContentInit() {
    console.log(`${this.title.toUpperCase()} - ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`${this.title.toUpperCase()} - ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`${this.title.toUpperCase()} - ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`${this.title.toUpperCase()} - ngAfterViewChecked`);
  }

  ngOnDestroy() {
    console.log(`${this.title.toUpperCase()} - ngOnDestroy`);
  }

  private markElement(): void {
    this.elementRef.nativeElement.parentElement.style.backgroundColor = 'gold';
    const timeout = (setTimeout as any).__zone_symbol__OriginalDelegate;
    timeout(() => this.elementRef.nativeElement.parentElement.style.backgroundColor = 'bisque', 300);
  }

}
