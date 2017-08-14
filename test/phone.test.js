import { PhoneNum } from '../src/js/phone.js';

global.PhoneNum=PhoneNum;
test("phone.js", () => {
  let phone = new PhoneNum('09892032349');
  expect(phone.convert()).toBe(true);
});