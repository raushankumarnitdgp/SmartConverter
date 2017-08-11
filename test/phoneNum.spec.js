import PhoneNum from './src/js/phone.js';

describe('Phone Num..', () => {
  it('Converts phone num', () => {
    const phone = new PhoneNum('9892032342');
    expect(phone.convert()).toBe('');
  });
});
