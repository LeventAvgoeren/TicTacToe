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
// Ergänze hier die Tests für Table