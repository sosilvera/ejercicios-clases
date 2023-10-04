// Importar la clase Auto desde el archivo auto.js
const Auto = require('./auto');

// Instanciación de un objeto de la clase 'Auto' con atributos adicionales
const miAuto = new Auto("Toyota", "Corolla", "azul");
miAuto.setMotor("Motor V6");
miAuto.setCantidadPuertas(4);
miAuto.setTipoTraccion("Tracción delantera");
miAuto.setAnnoFabricacion(2022);

// Accediendo y mostrando los atributos adicionales
console.log(`Mi auto tiene un motor ${miAuto.getMotor()}, ${miAuto.getCantidadPuertas()} puertas, tracción ${miAuto.getTipoTraccion()}, y fue fabricado en el año ${miAuto.getAnnoFabricacion()}.`);
