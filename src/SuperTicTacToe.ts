/**
 * Hilfstyp für Spielsteine / Helper type for stones of players.
 */
type Spieler = "X" | "O";
/**
 * Typ für leeres Feld / Type for empty field.
 */
type Leer = " "
/**
 * Leers Feld / empty field
 */
const LEER: Leer = " ";

/**
 * Tic-tac-toe-Spiel. 
 * Die beiden Spieler werden mit Steinen entweder als Kreuz "X" oder Kreis "O" (Typ {@link Spieler}) dargestellt.
 * 
 * --------------------
 * Game of tic-tac-toe.
 * The players are represented with a cross "X" or circle "O" (type {@link Spieler}.
 */
export class SuperTicTacToe {

    // Felddeklarationen nach Bedarf / Field declarations as needed
    spielfeld: string[][] = [];
    size: number;

    /**
     * Erstellt ein leeres `size` x `size`-Felder großes Spielfeld.
     * Alle Felder sind mit {@link LEER} belegt.
     * 
     * Verwenden Sie zum Initialisieren unbedingt Schleifen!
     * Eine Lösung, die nur ein Literal zuweist, wird nicht akzeptiert.
     * -----------------
     * Creates a new `size` x `size` playing field (spielfeld).
     * All fields are to be set to {@link LEER}.
     * 
     * @param size Größe des Spielfelds, muss >0 sein / size of the playing field, must be > 0
     * [LEER,LEER,LEER],
     * [LEER,LEER,LEER],
     * [LEER,LEER,LEER]
     * arrays werden hinterinander gestapelt mit dem push weil immer ein neues gepsut wird 
     */
    constructor(size: number) {
        this.size = size;
        if (size <= 0) {
            throw new Error("Bitte zahlen über 0 benutzen");
        }
        for (let index = 0; index < size; index++) {
            this.spielfeld.push([]);
            for (let j = 0; j < size; j++) {
                this.spielfeld[index].push(LEER);
            }
        }
    }


    /**
     * Setzt ein Feld entweder mit "X" oder mit "O".
     * Ein Feld kann nur gesetzt werden, wenn dieses {@link LEER} ist.
     * Achtung: Hier ist nur zu prüfen, ob das Feld noch leer ist. Es ist nicht zu prüfen, ob der Spieler an der Reihe ist oder ob es einen Gewinner gibt.
     * -----------------
     * Sets a field either with an "X" or with an "O".
     * A field can only be set if it is {@link LEER}.
     * Attention: Only check if the field is empty. Do not check if it is the player's turn or if there is a winner.
     * 
     * @param x x-Koordinate, muss zwischen 0 (inkl.) und size (exklusive) sein / x-coordinate, must be between 0 (incl.) and size (excl.)
     * @param y y-Koordinate, muss zwischen 0 (inkl.) und size (exklusive) sein / x-coordinate, must be between 0 (incl.) and size (excl.)
     * @param stein "X" oder Kreis "O" (Typ {@link Spieler})
     * @return true, wenn Feld gesetzt werden konnte
     * Gucken nach ob der gestzte  punkt im spielfeld ist 
     * Gucken dann ob die stelle leer ist wenn ja wird sie ersetzt mit dem stein 
     * andern falls return false 
     */
    public set(x: number, y: number, stein: Spieler): boolean {

        if (x > this.size || x < 0 || y > this.size || y < 0) {
            throw new Error("Spielfeld übertreten");
        }

        else if (this.spielfeld[x][y] === LEER) {
            this.spielfeld[x][y] = stein;
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Gibt die Belegung eines Felds zurück.
     *  
     * ----------------
     * Returns the current value of a field.
     * 
     * @param x x-Koordinate, muss zwischen 0 (inkl.) und size (exklusive) sein / x-coordinate, must be between 0 (incl.) and size (excl.)
     * @param y y-Koordinate, muss zwischen 0 (inkl.) und size (exklusive) sein / x-coordinate, must be between 0 (incl.) and size (excl.)
     * @return "X", "O" oder {@link LEER} (" ")
     * Gucke nach ob x & y in dem array sind 
     * Gucke dann ob der angegebene array spot gleich einer der zeichen ist wenn ja wird wert retuned 
     */
    public get(x: number, y: number): Spieler | Leer {
        if (x > this.size || x < 0 || y > this.size || y < 0) {
            throw new Error("Bitte zahlen über 0 und unter size größe");
        }
        else if (this.spielfeld[x][y] === "X") {
            return "X";
        }
        else if (this.spielfeld[x][y] === "O") {
            return "O";
        }
        else {
            this.spielfeld[x][y] === LEER
            return LEER;
        }

    }

    /**
     * Falls es einen Gewinner gibt, wird dieser zurückgegeben. Falls es keinen Gewinner gibt,
     * wird null zurückgegeben.
     * 
     * Ein Spieler hat gewonnen, wenn er alle Felder einer Reihe, einer Spalte oder diagonal
     * von links-oben nach recht-unten oder von rechts-oben nach links-unten besetzt hat.
     * 
     * --------------------
     * If there is a winner, it is returned. Otherwise, null is returned.
     * 
     * A player has won, if she has set all fields in a row, a column or diagonally from top-left to bottom-right or
     * top-right to bottom-left.
     * 
     * @return "X", "O" oder null
     */
    public gewinner(): Spieler | null {
        //zeilen gewinner ermitteln every guckt nur nach ob alle werte aus dem array 
        //für die function true zurück gibt wenn ja return X oder O 
        for (let index = 0; index < this.spielfeld.length; index++) {
            let elementZeile = this.spielfeld[index];
            if (elementZeile.every(a => a === "X")) {
                return "X";
            }
            else if (elementZeile.every(a => a === "O")) {
                return "O"
            }
        }
        //Gucken ob die spalten gleich sind
        //spalten array inerhalt schleife packen damit für jede spalte ein leeres vorhanden ist 
        for (let i = 0; i < this.spielfeld.length; i++) {
            let spalte = [];
            for (let j = 0; j < this.spielfeld.length; j++) {
                let elementSpalte = this.spielfeld[j][i]
                spalte.push(elementSpalte);
            }
            if (spalte.every(a => a === "X")) {
                return "X";
            }
            else if (spalte.every(a => a === "O")) {
                return "O";
            }
        }

        //gespiegelt 
        let diagonale1 = [];
        let diagonale2 = [];

        for (let i = 0; i < this.spielfeld.length; i++) {
            diagonale1.push(this.spielfeld[i][i]);
            diagonale2.push(this.spielfeld[i][this.spielfeld.length - 1 - i]);
        }

        if (diagonale1.every(a => a === "X") || diagonale2.every(a => a === "X")) {
            return "X";
        } else if (diagonale1.every(a => a === "O") || diagonale2.every(a => a === "O")) {
            return "O";
        }

        return null; // Kein Gewinner gefunden
    }

}
