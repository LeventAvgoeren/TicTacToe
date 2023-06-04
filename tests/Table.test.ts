import { Table } from "../src/Table"
import "./toAlmostEqual"

/**
 * Demo-Test um Custom-Matcher toAlmostEqual zu zeigen.
 */
test("Zeilen- und Spalten -- extern vs. intern", () => {
    const table = new Table();
    table.setCell(3, 2, "x");
    expect(table._rows).toAlmostEqual([
        // .      1  2   3 
        /* 1 */ [        ], 
        /* 2 */ [ , , "x"]])
})
test("Konstruktor test ",()=>{
  const test = [
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
      ['G', 'H', 'I'],
    ];
  let table=new Table(test);

  expect(table._rows).toStrictEqual(test);
})


test("Zeilen- und Spalten -- extern vs. intern", () => {
  const table = new Table();
  table.setCell(4,2, "x");
  expect(table._rows).toAlmostEqual([
      // .      1  2   3 
      /* 1 */ [       ], 
      /* 2 */ [,,,"x" ]])
})

test("Setze Text in eine vorhandene Zelle", () => {
  const table = new Table([["a", "b"], ["c", "d"]]);
  const oldText = table.setCell(2, 1, "x");
  expect(oldText).toBe("b"); // Der vorherige Text in der Zelle sollte "b" sein
  expect(table._rows).toStrictEqual([["a", "x"], ["c", "d"]]); // Die Tabelle sollte aktualisiert werden
});

test("Setze Text in eine neue Zelle außerhalb des aktuellen Bereichs", () => {
  const table = new Table([["a", "b"], 
  ["c", "d"]]);

  expect(table._rows).toStrictEqual([
    ["a", "b"],
    ["c", "d"],
  ]); // Ursprüngliche Struktur der Tabelle

  const oldText = table.setCell(3, 3, "x");
  expect(oldText).toBe(""); // Da die Zelle leer war, sollte der vorherige Text ein leerer String sein

  expect(table._rows).toAlmostEqual([
    ["a", "b", ""],
    ["c", "d", ""],
    ["", "", "x"],
  ]); // Die Tabelle sollte aktualisiert und erweitert werden
});

test("<0 setCell",()=>{
  let table=new Table([["a","b"]])
  expect(()=>table.setCell(-1, 3,"r")).toThrow("Bitt positve zahl eingeben ")
})
test("Gibt nie null oder undefined zurück, auch wenn in einer Zelle noch kein Text vorhanden ist", () => {
  const table = new Table();
  const oldText = table.setCell(2, 2, "x");
  expect(oldText).not.toBeUndefined();
  expect(oldText).not.toBeNull();
  expect(oldText).toBe("");
});
test("gibt den wert zurück ", () => {
  const table = new Table([["a","b"], ["c","d"]]);
  expect(table.getCell(1, 1)).toBe("a");
});

test("Gibt einen leeren String zurück wenn die Zeile oder Spalte nicht existiert", () => {
  const table = new Table();
  expect(table.getCell(3, 3)).toBe("");
});
test("Gibt einen leeren String zurück wenn die Zelle noch nicht gesetzt wurde", () => {
  const table = new Table();
  table.setCell(2, 2, "");
  expect(table.getCell(2, 2)).toBe("");
});







test('paltziert ein leeres array', () => {
        let table = new Table([
          ["a", "s", "d"], 
          ["k", "l", "f"], 
          ["j", "h", "g"]
        ]);
        let result = table.insertRowBefore(2);
        expect(result).toEqual(true);
        expect(table._rows).toEqual([
          ["a", "s", "d"], 
          [],
          ["k", "l", "f"], 
          ["j", "h", "g"]
        ]);
    });
test('nicht platzieren von einem leeren array', () => {
        let table = new Table([
          ["a", "s", "d"], 
          ["k", "l", "f"], 
          ["j", "h", "g"]
        ]);
        let result = table.insertRowBefore(5);
        expect(table._rows).toEqual([
          ["a", "s", "d"], 
          ["k", "l", "f"], 
          ["j", "h", "g"]
        ]);
});
test('löscht Zeile', () => {
  let table = new Table([
    ["a", "s", "d"], 
    ["k", "l", "f"], 
    ["j", "h", "g"]
  ]);
  let result = table.deleteRow(2);
  expect(table._rows).toEqual([
    ["a", "s", "d"], 
    ["j", "h", "g"]
  ]);
});

test('nicht deleten', () => {
  let table = new Table(
    [["a", "s", "d"], 
    ["k", "l", "f"], 
    ["j", "h", "g"]]);
  let result = table.deleteRow(5);
  expect(table._rows).toEqual(
    [["a", "s", "d"], 
    ["k", "l", "f"], 
    ["j", "h", "g"]]);
});
test("nicht 0 zeile löschen", () => {
  let table = new Table(
    [["a", "s", "d"], 
    ["k", "l", "f"], 
    ["j", "h", "g"]]);
  let result = table.deleteRow(0);
  expect(table._rows).toEqual(
    [["a", "s", "d"], 
     ["k", "l", "f"], 
     ["j", "h", "g"]]);;
});
test("Insert column false soll eintreffen über array hinaus ", () => {
  let table = new Table(
    [["a", "s", "d"], 
     ["k", "l", "f"], 
     ["j", "h", "g"]]);
  let result = table.insertColumnLeft(4);
  expect(table._rows).toEqual(
    [["a", "s", "d"], 
    ["k", "l", "f"], 
    ["j", "h", "g"]]);
});


test('InsertColumn " hinzufügen an 2 stelle', () => {
  let table = new Table(
    [["x", "y", "z"], 
    ["o", "i", "u"], 
    ["p", "a", "s"]]);
  let result = table.insertColumnLeft(2);
  expect(table._rows).toEqual(
    [["x", "", "y", "z"], 
    ["o", "", "i", "u"],
    ["p", "", "a", "s"]]);
});

test("löscht Spalte", () => {
  let table = new Table([
    ["a", "s", "d"], 
    ["k", "l", "f"], 
    ["j", "h", "g"]
  ]);
  let result = table.deleteColumn(2);
  expect(table._rows).toEqual([
    ["a", "d"], 
    ["k", "f"], 
    ["j", "g"]
  ]);
});

test("Nichts soll gelöscht werden ",()=>{
  let table = new Table([
    ["a", "s", "d"], 
    ["k", "l", "f"], 
    ["j", "h", "g"]
  ]);
  let result = table.deleteColumn(5);

  expect(result).toBe(false);
  expect(table._rows).toEqual([
      ["a", "s", "d"], 
      ["k", "l", "f"], 
      ["j", "h", "g"]
    ]);
});

// Ergänze hier die Tests für Table