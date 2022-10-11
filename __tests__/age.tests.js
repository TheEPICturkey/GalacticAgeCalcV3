import { EarthAge, roundTwoDecimal } from './../src/EarthAge.js'

describe ('EarthAge', () => {

  test("display the users Age on Earth as 25", () => {
    const userAge = new EarthAge(25);
    expect(userAge.Age).toEqual(25);
  });

  test("Will display users age in Mercury Years", () => {
    const userAge = new EarthAge(25);
    expect(userAge.MercuryAge).toEqual(6);
  })

  test("will display the users age in Venus Years", () => {
    const userAge = new EarthAge(25);
    expect(userAge.VenusAge).toEqual(15.5);
  })
  