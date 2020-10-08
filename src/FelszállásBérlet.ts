import Felszállás from "./Felszállás";

export default class FelszállásBérlet extends Felszállás {
    private _típus: string;
    private _érvényes: Date;

    public get érvényesFelszállás(): boolean {
        //gey napnyi ezredmásodperc hozzáadása
        const érvényességLejár: number = this._érvényes.valueOf() + 24 * 60 * 60 * 1000;
        return this._idő.valueOf() < érvényességLejár;
    }
    constructor(sor: string) {
        super(sor); //ősosztály konstruktorát hívja
        const m: string[] = sor.split(" ");
        this._típus = m[3];
        const év: number = parseInt(m[4].substr(0, 4));
        const hónap: number = parseInt(m[4].substr(4, 2)) - 1;
        const nap: number = parseInt(m[4].substr(6, 2));
        this._érvényes = new Date(év, hónap, nap);
    }
}
