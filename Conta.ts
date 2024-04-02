import { colors } from "../util/Colors";

export abstract class Conta {

    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;
    static numero: string;
    listaContas: any;

    constructor(_numero: number, _agencia: number, _tipo: number, _titular: string, _saldo: number) {
        this._numero = _numero;
        this._agencia = _agencia;
        this._tipo = _tipo;
        this._titular = _titular;
        this._saldo = _saldo;
    }

    public get numero(): number {
        return this._numero;
    }

    public set numero(value: number) {
        this._numero = value;
    }

    public get agencia(): number {
        return this._agencia;
    }

    public set agencia(value: number) {
		this._agencia = value;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public set tipo(value: number) {
		this._tipo = value;
    }

    public get titular(): string {
        return this._titular;
    }

    public set titular(value: string) {
		this._titular = value;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public set saldo(value: number) {
		this._saldo = value;
    }

    //MÉTODOS

    public sacar(valor: number): boolean{

        if (this._saldo >= valor) {
            this._saldo = this._saldo - valor;
            return false;
        }

        console.log("\n Saldo Insuficiente!");
        return false;
    }

    public depositar(valor: number): void{
        this._saldo = this._saldo + valor; // Mudar
    }

    public visualizar(): void{

        let tipo: string = "";

        switch(this._tipo){
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
        }
    

    
        console.log("\n\n*****************************************************");
        console.log("Dados da Conta:");
        console.log("*****************************************************");
        console.log("Numero da Conta: " + this._numero);
        console.log("Agência: " + this._agencia);
        console.log("Tipo da Conta: " + tipo);
        console.log("Titular: " + this._titular);
        console.log("Saldo: " + this._saldo.toFixed(2));

    }
} 
