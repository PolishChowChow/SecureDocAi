import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDocComponent } from './edit-doc.component';
import { EditDocRoutingModule } from './edit.doc.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditDocComponent],
  imports: [
    CommonModule,
    EditDocRoutingModule,
    FormsModule
  ]
})
export class EditDocModule { }
