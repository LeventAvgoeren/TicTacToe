import { SuperTicTacToe } from "../src/SuperTicTacToe";

//Konstruktor Test
test("size überprüfen", () => {
  let test = new SuperTicTacToe(3);
  expect(test.size).toBe(3);
})
test("Alles auf LEER überprüfen", () => {
  let actuel = new SuperTicTacToe(3);
  let LEER = " ";

  const expected = [
    [LEER, LEER, LEER],
    [LEER, LEER, LEER],
    [LEER, LEER, LEER]
  ];
  expect(actuel.spielfeld).toEqual(expected)
})
test("Konstruktor Sonderfall <0", () => {
  expect(() => new SuperTicTacToe(-1)).toThrow('Bitte zahlen über 0 benutzen');
})