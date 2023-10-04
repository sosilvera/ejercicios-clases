class Auto {
    constructor(marca, modelo, color, motor = null, cantidad_puertas = null, tipo_traccion = null, anno_fabricacion = null) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = 0;
        this.motor = motor;
        this.cantidad_puertas = cantidad_puertas;
        this.tipo_traccion = tipo_traccion;
        this.anno_fabricacion = anno_fabricacion;
    }

    acelerar(incremento) {
        this.velocidad += incremento;
        console.log(`El auto ahora va a ${this.velocidad} km/h.`);
    }

    frenar(decremento) {
        this.velocidad -= decremento;
        console.log(`El auto ahora va a ${this.velocidad} km/h.`);
    }

    setMotor(motor) {
        this.motor = motor;
    }

    getMotor() {
        return this.motor;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    setCantidadPuertas(cantidad_puertas) {
        this.cantidad_puertas = cantidad_puertas;
    }

    getCantidadPuertas() {
        return this.cantidad_puertas;
    }

    setTipoTraccion(tipo_traccion) {
        this.tipo_traccion = tipo_traccion;
    }

    getTipoTraccion() {
        return this.tipo_traccion;
    }

    setAnnoFabricacion(anno_fabricacion) {
        this.anno_fabricacion = anno_fabricacion;
    }

    getAnnoFabricacion() {
        return this.anno_fabricacion;
    }
}

// Exportar la clase para que pueda ser importada en otros archivos
module.exports = Auto;