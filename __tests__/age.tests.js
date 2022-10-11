import { EarthAge, roundTwoDecimal } from './../src/EarthAge.js'

describe ('EarthAge', () => {

  test("display the users Age on Earth as 25", () => {
    const userAge = new EarthAge(25);
    expect(userAge.Age).toEqual(25);
  });