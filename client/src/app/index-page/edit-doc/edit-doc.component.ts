import { sanitizeIdentifier } from '@angular/compiler';
import {
  Component,
  ElementRef,
  inject,
  input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-doc',
  standalone: false,
  templateUrl: './edit-doc.component.html',
  styleUrl: './edit-doc.component.scss',
})
export class EditDocComponent implements AfterViewInit {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  isFloatLeft = false;
  setCaretToEnd(element: HTMLElement): void {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false);
    selection?.removeAllRanges();
    selection?.addRange(range);
  }
  ngAfterViewInit(): void {
    this.editorRef.nativeElement.innerHTML = `<div style="color: red" contenteditable="true">`
  }

  handleEditorClick() {
    this.editorRef.nativeElement.contentEditable = 'true';
  }

  toggleParser() {
    console.log('btn');
    this.isFloatLeft = !this.isFloatLeft;
    this.editorRef.nativeElement.innerHTML += `</div><div style="display: inline; color: ${this.randomizeColor()}; font-size: ${this.randomizeSize()}px; text-align: ${
      this.isFloatLeft ? 'left' : 'right'
    }" contenteditable="true">s`;
    this.editorRef.nativeElement.innerHTML
    this.setCaretToEnd(this.editorRef.nativeElement);
  }
  randomizeSize() {
    return (Math.random() * 30 + 10).toFixed(0);
  }
  randomizeColor() {
    const num1 = (Math.random() * 255).toFixed(0);
    const num2 = (Math.random() * 255).toFixed(0);
    const num3 = (Math.random() * 255).toFixed(0);
    return `rgb(${num1}, ${num2}, ${num3})`;
  }
  randomizeFloating() {}
}
