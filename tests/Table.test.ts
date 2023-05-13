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

// Ergänze hier die Tests für Table