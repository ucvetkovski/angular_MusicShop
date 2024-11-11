import { CardNumberFormatPipe } from './card-number-format.pipe';

describe('CardNumberFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new CardNumberFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
