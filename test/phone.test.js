import { PhoneNum } from '../src/js/phone.js';

test("phone.js", () => {
  let phone = new PhoneNum(['+91-9892032349'],0);
  expect(phone.isPhone()).toBe(true);
});