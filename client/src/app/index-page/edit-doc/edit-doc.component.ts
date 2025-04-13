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
  getCaretNode() {
    const selection = window.getSelection();
    const node = selection?.getRangeAt(0).startContainer;
    return node;
  }
  ngAfterViewInit(): void {
    this.editorRef.nativeElement.innerHTML = `<span style="color: red" contenteditable="true">`;
  }

  handleEditorClick() {
    this.editorRef.nativeElement.contentEditable = 'true';
  }

  toggleParser() {
    console.log('btn');
    console.log(this.editorRef.nativeElement.innerText);

    console.log(this.editorRef.nativeElement.innerHTML);
    // this.editorRef.nativeElement.innerHTML = this.editorRef.nativeElement.innerHTML.replace("<div>", "")

    this.editorRef.nativeElement.innerHTML += `</span><span display="inline-block" style="color: ${this.randomizeColor()}; font-size: ${this.randomizeSize()}px;" contenteditable="true">s`;
    // this.editorRef.nativeElement.innerHTML = this.editorRef.nativeElement.innerHTML.replace("<div>", "<br />")
    // this.editorRef.nativeElement.innerHTML = this.editorRef.nativeElement.innerHTML.replace("</div>", "")

    this.setCaretToEnd(this.editorRef.nativeElement);
    this.editorRef.nativeElement.innerHTML.replace('<div>', '');
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
  toggleFloat() {
    const selection = window.getSelection();

    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      let caretNode = range.startContainer;
      let el: HTMLElement;
      if (caretNode.nodeType === Node.TEXT_NODE) {
        if (!caretNode.parentElement) {
          return;
        }
        el = caretNode.parentElement;
        el.style.display = 'block';
        el.style.textAlign =  el.style.textAlign === 'left' ? 'right' : 'left';
      }
    }
  }
}
