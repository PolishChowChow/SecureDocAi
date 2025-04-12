import { Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-doc',
  standalone: false,
  templateUrl: './edit-doc.component.html',
  styleUrl: './edit-doc.component.scss',
})
export class EditDocComponent {
  content = 'sss';
  sanitizer = inject(DomSanitizer);
  innerHTML: SafeHtml = '';
  isConfigChanged = true;
  contentList: SafeHtml[] = []
  config1 = (value: string) => {
    return `<span style="color: red">${value}</span>`;
  };
  config2 = (value: string) => {
    return `<span style="color: black">${value}</span>`;
  };
  currentConfig = this.config1
  updateConfig(){
    this.currentConfig = this.isConfigChanged ? this.config1 : this.config2
  }

  onTextChange(value: string): void {
    console.log(value);
    
    this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(
       this.currentConfig(value)
    );
  }
  handleClick(){
    console.log("clicked");
    console.log(this.contentList);
  
    this.contentList.push(this.sanitizer.bypassSecurityTrustHtml(this.currentConfig(this.content)))
    this.innerHTML = ""
    this.content = ""
    this.isConfigChanged = !this.isConfigChanged;
    this.updateConfig();
  }
  
}
