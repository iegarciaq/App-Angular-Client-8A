import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialComponentsModule } from '../material-components.module';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialComponentsModule
  ],
  exports: [ToolbarComponent]
})
export class SharedModule { }
