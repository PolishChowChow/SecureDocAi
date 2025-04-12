import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDocComponent } from './edit-doc.component';

const routes: Routes = [
  { path: '', component: EditDocComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDocRoutingModule {}
