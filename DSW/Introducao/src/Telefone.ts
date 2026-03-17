export default class Telefone{
    private _ddd: string;
    private _numero: number;
    private _tipo: string;

    constructor(ddd:string, numero:number, tipo:string) {
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }
}