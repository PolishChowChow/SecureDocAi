import { Component } from '@angular/core';
import { provideRouter, Route, RouterOutlet } from '@angular/router';
import { EditDocModule } from './edit-doc/edit-doc.module';
@Component({
  selector: 'app-index-page',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss',
})
export class IndexPageComponent {

}
