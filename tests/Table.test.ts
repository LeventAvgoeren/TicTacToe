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

test("Überschreiben von einem bestehendem wert", () => {
  const table = new Table([["a", "b"], 
                           ["c", "d"]]);
  const oldText = table.setCell(2, 2, "x");
  expect(oldText).toBe("d");
  expect(table._rows).toStrictEqual([["a", "b"], 
                                     ["c", "x"]]);
});
test("Tabelle erweitern", () => {
  const table = new Table([["a", "b"], 
                           ["c", "d"]]);
  table.setCell(3, 3, "x");
  expect(table._rows).toStrictEqual([["a", "b"], 
                                     ["c", "d"],
                                     [,,"x"   ]]);
});
test("Gibt nie null oder undefined zurück, auch wenn in einer Zelle noch kein Text vorhanden ist", () => {
  const table = new Table();
  const oldText = table.setCell(2, 2, "x");
  expect(oldText).not.toBeUndefined();
  expect(oldText).not.toBeNull();
  expect(oldText).toBe(" ");
});
test("gibt den wert zurück ", () => {
  const table = new Table([["a", "b"], ["c", "d"]]);
  expect(table.getCell(1, 1)).toBe("a");
});

test("Gibt einen leeren String zurück wenn die Zeile oder Spalte nicht existiert", () => {
  const table = new Table();
  expect(table.getCell(3, 3)).toBe(" ");
});
test("Gibt einen leeren String zurück wenn die Zelle noch nicht gesetzt wurde", () => {
  const table = new Table();
  table.setCell(2, 2, "");
  expect(table.getCell(2, 2)).toBe(" ");
});







test('paltziert ein leeres array', () => {
        let table = new Table([
          ["1", "2", "3"], 
          ["4", "5", "6"], 
          ["7", "8", "9"]]);
        let result = table.insertRowBefore(2);
        expect(result).toEqual(true);
        expect(table._rows).toEqual([
          ["1", "2", "3"], 
          [], 
          ["4", "5", "6"], 
          ["7", "8", "9"]]);
    });
test('nicht platzieren von einem leeren array', () => {
        let table = new Table([
        ["1", "2", "3"], 
        ["4", "5", "6"], 
        ["7", "8", "9"]]);
        let result = table.insertRowBefore(5);
        expect(table._rows).toEqual([
        ["1", "2", "3"], 
        ["4", "5", "6"], 
        ["7", "8", "9"]]);
});
test('löscht zeile', () => {
  let table = new Table([
    ["1", "2", "3"], 
    ["4", "5", "6"], 
    ["7", "8", "9"]]);
  let result = table.deleteRow(2);
  expect(table._rows).toEqual([
    ["1", "2", "3"], 
    ["7", "8", "9"]]);
});
test('nicht deleten', () => {
  let table = new Table([
    ["1", "2", "3"], 
    ["4", "5", "6"], 
    ["7", "8", "9"]]);
  let result = table.deleteRow(5);
  expect(table._rows).toEqual(
    [["1", "2", "3"], 
    ["4", "5", "6"], 
    ["7", "8", "9"]]);
});
test("nicht 0 zeile löschen", () => {
  let table = new Table(
    [["1", "2", "3"], 
    ["4", "5", "6"], 
    ["7", "8", "9"]]);
  let result = table.deleteRow(0);
  expect(table._rows).toEqual(
    [["1", "2", "3"], 
    ["4", "5", "6"], 
    ["7", "8", "9"]]);
});
test("false soll eintreffen über array hinaus ", () => {
  let table = new Table(
    [["1", "2", "3"], 
     ["4", "5", "6"], 
     ["7", "8", "9"]]);
  let result = table.insertColumnLeft(4);
  expect(table._rows).toEqual(
    [["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]]);
});
test('should insert a column at the specified index', () => {
  let table = new Table([["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]);
  let result = table.insertColumnLeft(2);
  expect(table._rows).toEqual([["1", " ", "2", "3"], ["4", " ", "5", "6"], ["7", " ", "8", "9"]]);
});
test("Spalte löschen",()=>{
  let table = new Table(
  [["1", "2", "3"], 
   ["4", "5", "6"], 
   ["7", "8", "9"]]);
  let result = table.deleteColumn(2);
  expect(table._rows).toEqual(
    [["1", "3"], 
     ["4", "6"], 
     ["7", "9"]]);
});
test("Nichts soll gelöscht werden ",()=>{
  let table = new Table([["1", "2", "3"], 
                         ["4", "5", "6"],
                         ["7", "8", "9"]]);
  let result = table.deleteColumn(5);

  expect(result).toBe(false);
  expect(table._rows).toEqual(
  [["1", "2", "3"], 
   ["4", "5", "6"], 
   ["7", "8", "9"]]);
});

// Ergänze hier die Tests für Table