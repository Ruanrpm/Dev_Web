export default class Produto {
    private _codigo: number;
    private _descricao: string;
    private _valor: number;

    constructor(codigo:number, descricao:string, valor:number){
        this._codigo = codigo;
        this._descricao = descricao;
        this._valor = valor;
    }

    public get codigo(): number {
      return this._codigo;
    }
    public set codigo(value: number) {
      this._codigo = value;
    }

    public get descricao(): string {
      return this._descricao;
    }
    public set descricao(value: string) {
      this._descricao = value;
    }

    public get valor(): number {
      return this._valor;
    }
    public set valor(value: number) {
      this._valor = value;
    }
}