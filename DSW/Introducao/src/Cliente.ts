import Endereco from "./Endereco";
import Telefone from "./Telefone"

export default class Cliente{
    private _nome: string;
    private _sexo: string;
    private _data_nascimento: number;
    private _cpf: number;
    private _endereco: Endereco;
    private _telefone: Telefone[];

    constructor(nome:string, sexo:string, data_nascimento:number, cpf:number, endereco:Endereco, telefone:Telefone[]){
        this._cpf = cpf;
        this._data_nascimento = data_nascimento;
        this._endereco = endereco;
        this._nome = nome;
        this._sexo = sexo;
        this._telefone = telefone;
    }

    public get nome(): string {
      return this._nome;
    }
    public set nome(value: string) {
      this._nome = value;
    }

    public get sexo(): string {
      return this._sexo;
    }
    public set sexo(value: string) {
      this._sexo = value;
    }

    public get data_nascimento(): number {
      return this._data_nascimento;
    }
    public set data_nascimento(value: number) {
      this._data_nascimento = value;
    }

    public get cpf(): number {
      return this._cpf;
    }
    public set cpf(value: number) {
      this._cpf = value;
    }

    public get endereco(): Endereco {
      return this._endereco;
    }
    public set endereco(value: Endereco) {
      this._endereco = value;
    }

    public get telefone(): Telefone[] {
      return this._telefone;
    }
    public set telefone(value: Telefone[]) {
      this._telefone = value;
    }
}