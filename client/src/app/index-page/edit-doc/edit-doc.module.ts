import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDocComponent } from './edit-doc.component';
import { EditDocRoutingModule } from './edit.doc.routing.module';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ApplyStylesComponent } from './toolbar/apply-styles/apply-styles.component';



@NgModule({
  declarations: [EditDocComponent, ToolbarComponent, ApplyStylesComponent],
  imports: [
    CommonModule,
    EditDocRoutingModule,
    FormsModule
  ]
})
export class EditDocModule { }
