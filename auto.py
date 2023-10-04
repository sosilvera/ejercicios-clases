class Auto:
    def __init__(self, marca, modelo, color, motor=None, cantidad_puertas=None, tipo_traccion=None, anno_fabricacion=None):
        self.marca = marca
        self.modelo = modelo
        self.color = color
        self.velocidad = 0
        self.motor = motor
        self.cantidad_puertas = cantidad_puertas
        self.tipo_traccion = tipo_traccion
        self.anno_fabricacion = anno_fabricacion

    def acelerar(self, incremento):
        self.velocidad += incremento
        print(f"El auto ahora va a {self.velocidad} km/h.")

    def frenar(self, decremento):
        self.velocidad -= decremento
        print(f"El auto ahora va a {self.velocidad} km/h.")

    def set_motor(self, motor):
        self.motor = motor

    def get_motor(self):
        return self.motor

    def set_color(self, color):
        self.color = color

    def get_color(self):
        return self.color

    def set_cantidad_puertas(self, cantidad_puertas):
        self.cantidad_puertas = cantidad_puertas

    def get_cantidad_puertas(self):
        return self.cantidad_puertas

    def set_tipo_traccion(self, tipo_traccion):
        self.tipo_traccion = tipo_traccion

    def get_tipo_traccion(self):
        return self.tipo_traccion

    def set_anno_fabricacion(self, anno_fabricacion):
        self.anno_fabricacion = anno_fabricacion

    def get_anno_fabricacion(self):
        return self.anno_fabricacion
