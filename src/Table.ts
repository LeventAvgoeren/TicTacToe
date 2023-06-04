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
        //Wenn ein Value vorhanden dann mach eine deepCopy vom 2D Array
        if(values){
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
        if(col<0 ||row<0){
            throw new Error("Bitt positve zahl eingeben ")
        }
        //setzten col und row auf -1 damit wir 0 kriegen 
         col=col-1;
         row=row-1;
        //falls zeilen anzahl kleiner ist werden immer mehr arrays rein gepusht
        while(this.values.length<=row){
            this.values.push([]);
        }
        //Falls spalten anzahl kleiner ist als row dann packe ich leere strings und ein zeilen rein 
        while (this.values[0].length<=col) {
            this.values.forEach((pusher)=>{
                pusher.push("");
            });
        }
        //speichere alten wert ab um ihn zu returnen ||falls es den nicht gibt return leeren string
        let oldText=this.values[row][col]||"";
        //setze neuen text  
        this.values[row][col] =text;
        return oldText;
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
         col=col-1;
         row=row-1;
        //Wenn es ausserhalb leigt dann gib leeren string zurück 
        if(row>this.values.length && col >this.values.length){
            return "";
        }
        else{
            return this.values[row][col]|| "";
        }
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
   //reihe setzen
    insertRowBefore(row: number): boolean {
         row= row-1;
        //Falls der Zeilenindex größer-gleich als die aktuelle Anzahl an Zeilen ist
        if(row>=this.values.length|| row<=0){
            return false;
        }
        else{  
            //anfang,wieviel wir entfernen wollen und was wir rein machen wollen
            this.values.splice(row,0,[]);
            return true;
        }
        
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
    //reihe löschen
    deleteRow(row: number): boolean {
         row= row-1;
        if(row>=this.values.length || row<=0){
            return false;
        }
        else{
            //anfang undwieviel wir löschen wollen 
            this.values.splice(row,1);
            return true ;
        }
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
    //spalte hinzufügen
    insertColumnLeft(col: number): boolean {
         col=col-1;
        //Gucken nach ob col über die größe geht oder ob es eine negative zahl ist 
        if(col>=this.values.length ||col<0){
            return false;
        }
        else{
            this.values.forEach((column)=>{
                 column.splice(col,0,"");
            }) 
            return true;
        }
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
    //spalte löschen 
    deleteColumn(col: number): boolean {
         col=col-1
        //checken ob es über das feld geht und ob negative zahl
        if(col>this.values[0].length||col<=0){
            return false
        }
        else{
            this.values.forEach((spalteDeleten)=>{
                spalteDeleten.splice(col,1)
            })
            return true; 
        }
    }

}