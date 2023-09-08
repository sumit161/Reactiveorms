import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTenWords]',
})
export class TenWordsDirective {
  constructor() {}
  @HostListener('input', ['$event']) OnkeyUp(event: Event) {
    let inputControl = (event.target as HTMLTextAreaElement).value as string;
    let count = 0;
    for (let i = 0; i < inputControl.length; i++) {
      if (count === 3) {
        alert('error');
        (event.target as HTMLTextAreaElement).value = (event.target as HTMLTextAreaElement).value.slice(0,inputControl.length-2)
      } else if (inputControl[0] === ' ') {
        console.log('empty');
        (event.target as HTMLTextAreaElement).value = '';
      } else if (inputControl.includes('  ')) {
        console.log('double space');
        (event.target as HTMLTextAreaElement).value = inputControl.replace(
          /  /g,
          ' '
        );
      } else if (inputControl[i] === ' ') {
        count++;
      }
    }
  }
}
