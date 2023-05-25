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
test("throw error", () => {
    expect(() => new Table()).toThrow("bitte eine gültige eingabe");
  });
// Ergänze hier die Tests für Table