import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appInputView]'
})
export class InputViewDirective {
  inputValue: string;
  @Output() inputValueChange: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: InputEvent) {
    this.setInputValue(event.target['value']);
  }

  setInputValue(value: string) {
    this.inputValue = value;
    this.inputValueChanged();
  }

  inputValueChanged() {
    this.inputValueChange.emit(this.inputValue);
  }

}
