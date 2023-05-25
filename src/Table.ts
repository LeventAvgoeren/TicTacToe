/**
 * Eine einfache, automatisch wachsende Tabelle mit Strings.
 * 
 * Begriffe:
 * - Spalte (Column): vertikal angeordnete Zellen
 * - Zeile (Row): horizontal angeordnete Zellen
 * - Zelle (Cell): ein Feld mit einem Wert (Value)
 * 
 * Eine Zelle ist eindeutig über Spalten- und Zeilennummer bestimmt. Die Indizes sind beginnen bei 1!
 * 
 * Nach außen sieht die Tabelle immer komplett gefüllt aus. Intern werden nur bei Bedarf
 * echte Zellen erzeugt.
 */
export class Table {

    /**
     * Erzeugt eine Tabelle.
     * Spalten und Zeilen werden beim Setzen von Text automatisch erzeugt. 
     * 
     * @param values Initiale Werte (äußeres Array enthält die Zeilen), optional!
     *      Achtung: Die Werte müssen werden kopiert! Dies ist bei einem mehrdimensionalen Array nicht trivial!
     * 
     * Bei der Deep Copy werden die Werte der obersten Ebene und auch alle 
     * darunterliegenden Objekte rekursiv kopiert. Dadurch entstehen 
     * separate und unabhängige Objekte, die ihre eigenen Speicherbereiche nutzen
     * 
     */
    values: string[][] = [];
    constructor(values?: string[][]) {
        //Wenn es undefined isrt wird ein fehler gewrofen wenn nicht wird eine deepCopy gemacht 
        if(values === undefined){
            throw new Error("bitte eine gültige eingabe")
        }
        else{
            this.values=values.map((deepCopy=> [...deepCopy]))
        }

    }
    /**
     * Nur für Tests!
     * @return Zweidimensionales Array mit Zeilen und Spalten.
     */
    get _rows() {
        return this.values // Feld muss noch geeignet angelegt werden.
    }

    /**
     * Setzt den Text in der Zelle mit gegebener Spalte und Zeile.
     * 
     * Falls col größer der aktuellen Spaltenzahl ist, werden entsprechend leere Spalten angefügt.
     * Falls row größer der aktuellen Zeilenzahl ist, werden entsprechend leere Zeilen angefügt.
     * 
     * @param col Spaltenindex, 1-basiert.
     * @param row  Zeilenindex, 1-basiert
     * @param text der zu setzende Text
     * @return Der Text, der vorher in der Zelle war (evtl. "", aber nie null oder undefined)
     */
    setCell(col: number, row: number, text: string): string {
        throw new Error("Function not implemented yet")
    }

    /**
     * Gibt den Text in gegebener Spalte und Zeile zurück.
     * Falls die Zeile oder Spalte nicht existiert, wird ein leerer String zurückgegeben.
     * 
     * @param col Spaltenindex, 1-basiert.
     * @param row Zeilenindex, 1-basiert.
     * @return der Text, evtl. leer ("") aber nie null oder undefined
     */
    getCell(col: number, row: number): string {
        throw new Error("Function not implemented yet")
    }

    /**
    * Fügt eine Zeile oberhalb von der angegebenen Zeile ein
    * und verschiebt die anderen Zeilen nach unten. D.h. danach
    * ist die neue Zeile  gerade an dem gegebenen Zeilenindex.
    * 
    * Falls der Zeilenindex größer-gleich als die aktuelle Anzahl an Zeilen ist,
    * wird nichts verändert.
    * 
    * @param row Zeilenindex, an der neue Zeile eingefügt werden soll, 1-basiert.
    * @return true, wenn tatsächlich eine Zeile eingefügt wurde.
    */
    insertRowBefore(row: number): boolean {
        throw new Error("Function not implemented yet")
    }

    /**
     * Löscht die angegebene Zeile, verschiebt also alle Zeilen unterhalb nach oben.
     * 
     * Falls der Zeilenindex größer der aktuellen Anzahl an Zeilen ist,
     * wird nichts verändert.
     * 
     * @param row Zeilenindex der zu löschenden Zeile, 1-basiert
     * @returns true, wenn tatsächlich etwas verändert wurde
     */
    deleteRow(row: number): boolean {
        throw new Error("Function not implemented yet")
    }

    /**
     * Fügt eine Spalte links von der angegebenen Stelle ein
     * und verschiebt die anderen Spalten nach rechts. D.h. danach
     * ist die neue Spalte gerade an dem gegebenen Spaltenindex.
     * 
     * Falls der Spaltenindex größer-gleich als die aktuelle Anzahl an Spalten ist,
     * wird nichts verändert.
     * 
     * @param col Spaltenindex, an der neue Spalte eingefügt werden soll, 1-basiert.
     * @return true, wenn tatsächlich eine Spalte eingefügt wurde.
     */
    insertColumnLeft(col: number): boolean {
        throw new Error("Function not implemented yet")
    }

    /**
     * Löscht die angegebene Spalte, verschiebt also alle Spalten rechts davon eins nach links.
     * 
     * Falls der Spaltenindex größer der aktuellen Anzahl an Spalten ist,
     * wird nichts verändert.
     * 
     * @param col Spaltenindex der zu löschenden Spalte, 1-basiert
     * @returns true, wenn tatsächlich etwas verändert wurde
     */
    deleteColumn(col: number): boolean {
        throw new Error("Function not implemented yet")
    }

}

