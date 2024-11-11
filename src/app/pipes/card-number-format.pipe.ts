import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumberFormat',
  standalone: true
})
export class CardNumberFormatPipe implements PipeTransform {

  transform(value: string): string {
    value = value.replace(/\D/g, '');

    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += '-';
      }
      formattedValue += value.charAt(i);
    }
    return formattedValue;
  }

}
