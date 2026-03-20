import Cliente from "./Cliente";
import Produto from "./Produto";

class Venda {
    private _codigo: number;
    private _data: number;
    private _cliente: Cliente;
    private _produtos: Produto[];

    constructor(codigo: number, data: number, cliente: Cliente, produtos: Produto[]){
        this._cliente = cliente;
        this._codigo = codigo;
        this._data = data;
        this._produtos = produtos;
    }

    public calcular_total(): number {
        let soma: number = 0;
        for(let i: number = 0; i < this._produtos.length; i++) {
            soma += this._produtos[i].valor;
        }
        return soma;
    }

    public get codigo(): number {
      return this._codigo;
    }
    public set codigo(value: number) {
      this._codigo = value;
    }

    public get data(): number {
      return this._data;
    }
    public set data(value: number) {
      this._data = value;
    }

    public get cliente(): Cliente {
      return this._cliente;
    }
    public set cliente(value: Cliente) {
      this._cliente = value;
    }

    public get produtos(): Produto[] {
      return this._produtos;
    }
    public set produtos(value: Produto[]) {
      this._produtos = value;
    }
}