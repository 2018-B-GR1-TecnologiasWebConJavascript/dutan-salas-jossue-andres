module.exports = class Celular {
    idCelular: number;
    descCelular: string;
    precioCelular: number;

    constructor(idCelular: number, descripcion: string, precioCelular: number) {
        this.idCelular = idCelular;
        this.descCelular = descripcion;
        this.precioCelular = precioCelular;
    }
}