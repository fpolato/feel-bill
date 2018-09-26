import { TipoFattura } from 'tipo-fattura';

export class Fattura {
    constructor(
        private _codCliente?: string,
        private _codFattura?: number,
        private _progressivo?: number,
        private _data?: string,
        private _ragioneSociale?: string,
        private _indirizzo?: string,
        private _piva?: string,
        private _email?: string,
        private _tipoFattura?: TipoFattura
    ) { }

    public get tipoFattura(): TipoFattura {
        return this._tipoFattura;
    }
    public set tipoFattura(value: TipoFattura) {
        this._tipoFattura = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get piva(): string {
        return this._piva;
    }
    public set piva(value: string) {
        this._piva = value;
    }
    public get indirizzo(): string {
        return this._indirizzo;
    }
    public set indirizzo(value: string) {
        this._indirizzo = value;
    }
    public get ragioneSociale(): string {
        return this._ragioneSociale;
    }
    public set ragioneSociale(value: string) {
        this._ragioneSociale = value;
    }
    public get data(): string {
        return this._data;
    }
    public set data(value: string) {
        this._data = value;
    }
    public get progressivo(): number {
        return this._progressivo;
    }
    public set progressivo(value: number) {
        this._progressivo = value;
    }
    public get codFattura(): number {
        return this._codFattura;
    }
    public set codFattura(value: number) {
        this._codFattura = value;
    }
    public get codCliente(): string {
        return this._codCliente;
    }
    public set codCliente(value: string) {
        this._codCliente = value;
    }
}
