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
    expect(userAge.VenusAge).toEqual(15.50);
  })

  test("will display the users age in Mars Years", () => {
    const userAge = new EarthAge(25);
    expect(userAge.MarsAge).toEqual(47);
  })

  test("will display the users age in Jupiter Years", () => {
    const userAge = new EarthAge(25);
    expect(userAge.JupiterAge).toEqual(296.50);
  })

  test("will display how many years left the user has on Mercury", () => {
    const userAge = new EarthAge(25, 78.8);
    expect(userAge.MercuryYearsLeft).toEqual(12.92);
  })
53.9
  test("will display how many years left the user has on Venus", () => {
    const userAge = new EarthAge(25, 78.9);
    expect(userAge.VenusYearsLeft).toEqual(33.42);
  })

  test("will display how many years left the user has on Mars", () => {
    const userAge = new EarthAge(25, 53.9);
    expect(userAge.MarsYearsLeft).toEqual(101.32);
  })

  test("will display how many years left the user has on Jupiter", () => {
    const userAge = new EarthAge(25, 53.9);
    expect(userAge.JupiterYearsLeft).toEqual(639.25);
  })
})

