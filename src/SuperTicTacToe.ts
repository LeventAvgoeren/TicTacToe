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
     */
    constructor(size: number) {
        throw new Error("Function not implemented yet")
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
     */
    public set(x: number, y: number, stein: Spieler): boolean {
        throw new Error("Function not implemented yet")
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
     */
    public get(x: number, y: number): Spieler|Leer {
        throw new Error("Function not implemented yet")
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
        throw new Error("Function not implemented yet")
    }

}