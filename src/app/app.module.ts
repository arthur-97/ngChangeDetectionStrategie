import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultRootComponent } from './default-root/default-root.component';
import { DefaultParentAComponent } from './default-parent-a/default-parent-a.component';
import { DefaultParentBComponent } from './default-parent-b/default-parent-b.component';
import { DefaultChildAComponent } from './default-child-a/default-child-a.component';
import { DefaultChildBComponent } from './default-child-b/default-child-b.component';
import { OnpushRootComponent } from './onpush-root/onpush-root.component';
import { OnpushParentAComponent } from './onpush-parent-a/onpush-parent-a.component';
import { OnpushParentBComponent } from './onpush-parent-b/onpush-parent-b.component';
import { OnpushChildAComponent } from './onpush-child-a/onpush-child-a.component';
import { OnpushChildBComponent } from './onpush-child-b/onpush-child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultRootComponent,
    DefaultParentAComponent,
    DefaultParentBComponent,
    DefaultChildAComponent,
    DefaultChildBComponent,
    OnpushRootComponent,
    OnpushParentAComponent,
    OnpushParentBComponent,
    OnpushChildAComponent,
    OnpushChildBComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
