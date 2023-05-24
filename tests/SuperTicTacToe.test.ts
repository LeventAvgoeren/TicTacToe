import { SuperTicTacToe } from "../src/SuperTicTacToe";

//Konstruktor Test
test("size überprüfen", () => {
  let test = new SuperTicTacToe(3);
  expect(test.size).toBe(3);
})

test("size überprüfen", () => {
  let test = new SuperTicTacToe(10);
  expect(test.size).toBe(10);
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



//Setter Test
test("set Testen auf LEER ", () => {
  let LEER = " ";
  let actual = new SuperTicTacToe(3);
  expect(actual.set(1, 1, "X")).toBeTruthy();
})
test("set doppelt bei X ", () => {
  let actual = new SuperTicTacToe(3);
  let first = actual.set(1, 1, "X");
  first = actual.set(1, 1, "X");
  expect(first).toBeFalsy();
});
test("set doppelt bei O ", () => {
  let actual = new SuperTicTacToe(3);
  let first = actual.set(1, 1, "O");
  first = actual.set(1, 1, "O");
  expect(first).toBeFalsy();
});
test("set doppelt bei unterschiedlichen ", () => {
  let actual = new SuperTicTacToe(3);
  let first = actual.set(1, 1, "X");
  first = actual.set(1, 1, "O");
  expect(first).toBeFalsy();
});
test("set Sonderall x>size", () => {
  let actual = new SuperTicTacToe(3);
  expect(() => actual.set(4, 3, "X")).toThrow('Spielfeld übertreten');
})
test("set Sonderall x<0", () => {
  let actual = new SuperTicTacToe(3);
  expect(() => actual.set(-1, 4, "O")).toThrow('Spielfeld übertreten');
})
test("set Sonderall y>size", () => {
  let actual = new SuperTicTacToe(3);
  expect(() => actual.set(3, 4, "O")).toThrow('Spielfeld übertreten');
})
test("set Sonderall y<0", () => {
  let actual = new SuperTicTacToe(3);
  expect(() => actual.set(3, -1, "O")).toThrow('Spielfeld übertreten');
})



//Getter Test
test("get X ", () => {
  let actual = new SuperTicTacToe(3);
  actual.set(2, 2, "X");
  expect(actual.get(2, 2)).toBe("X");
})
test("get O", () => {
  let actual = new SuperTicTacToe(3);
  actual.set(2, 2, "O");
  expect(actual.get(2, 2)).toBe("O");
})
test("get LEER", () => {
  let actual = new SuperTicTacToe(3);
  let LEER = " ";
  expect(actual.get(2, 2)).toBe(LEER);
})
test("get Sonderfall x>size", () => {
  let actual = new SuperTicTacToe(3);
  expect(() => actual.get(4, 2)).toThrow('Bitte zahlen über 0 und unter size größe');
})
test("get Sonderfall x<0", () => {
  let actual = new SuperTicTacToe(3);
  expect(() => actual.get(-1, 2)).toThrow('Bitte zahlen über 0 und unter size größe');
})
test("get Sonderfall y>size", () => {
  let actual = new SuperTicTacToe(3);
  expect(() => actual.get(2, 4)).toThrow('Bitte zahlen über 0 und unter size größe');
})
test("get Sonderfall y<0", () => {
  let actual = new SuperTicTacToe(3);
  expect(() => actual.get(2, -1)).toThrow('Bitte zahlen über 0 und unter size größe');
})



//Gewinner Test
test("gewinner zeile 0",()=>{
let actual=new SuperTicTacToe(3);
actual.set(0, 0, "X")
actual.set(0, 1, "X")
actual.set(0, 2, "X")
expect(actual.gewinner()).toBe("X");
})
test("gewinner zeile 1",()=>{
  let actual=new SuperTicTacToe(3);
  actual.set(1, 0, "X")
  actual.set(1, 1, "X")
  actual.set(1, 2, "X")
  expect(actual.gewinner()).toBe("X");
  })
test("gewinner zeile 2",()=>{
    let actual=new SuperTicTacToe(3);
    actual.set(2, 0, "X")
    actual.set(2, 1, "X")
    actual.set(2, 2, "X")
    expect(actual.gewinner()).toBe("X");
})
test("kein gewinner zeile 2",()=>{
  let actual=new SuperTicTacToe(3);
  actual.set(2, 0, "X")
  actual.set(2, 1, "O")
  actual.set(2, 2, "X")
  expect(actual.gewinner()).toBe(null);
})

test("gewinner Spalte 0", () => {
  let actual = new SuperTicTacToe(3);
  actual.set(0, 0, "X");
  actual.set(1, 0, "X");
  actual.set(2, 0, "X");
  expect(actual.gewinner()).toBe("X");
});
test("kein gewinner Spalte 0", () => {
  let actual = new SuperTicTacToe(3);
  actual.set(0, 0, "O");
  actual.set(1, 0, "X");
  actual.set(2, 0, "X");
  expect(actual.gewinner()).toBe(null);
});
test("gewinner Spalte 1", () => {
  let actual = new SuperTicTacToe(3);
  actual.set(0, 1, "X");
  actual.set(1, 1, "X");
  actual.set(2, 1, "X");
  expect(actual.gewinner()).toBe("X");
});

test("gewinner Spalte 2", () => {
  let actual = new SuperTicTacToe(3);
  actual.set(0, 2, "X");
  actual.set(1, 2, "X");
  actual.set(2, 2, "X");
  expect(actual.gewinner()).toBe("X");
});


test("gewinner Diagonal oben links unten rechts", () => {
  let actual = new SuperTicTacToe(3);
  actual.set(0, 0, "X");
  actual.set(1, 1, "X");
  actual.set(2, 2, "X");
  expect(actual.gewinner()).toBe("X");
});
test("gewinner Diagonal unten rechts unten", () => {
  let actual = new SuperTicTacToe(3);
  actual.set(2, 2, "X");
  actual.set(1, 1, "X");
  actual.set(0, 0, "X");
  expect(actual.gewinner()).toBe("X");
});

test("gewinner Diagonal gespiegelt", () => {
  let actual = new SuperTicTacToe(3);
  actual.set(0, 2, "X");
  actual.set(1, 1, "X");
  actual.set(2, 0, "X");
  expect(actual.gewinner()).toBe("X");
});
test("gewinner Diagonal gespiegelt", () => {
  let actual = new SuperTicTacToe(3);
  actual.set(0, 2, "O");
  actual.set(1, 1, "O");
  actual.set(2, 0, "O");
  expect(actual.gewinner()).toBe("O");
});

test("kein gewinner diagonale", () => {
  let actual = new SuperTicTacToe(3);
  actual.set(2, 2, "O");
  actual.set(1, 1, "X");
  actual.set(0, 0, "O");
  expect(actual.gewinner()).toBe(null);
});
