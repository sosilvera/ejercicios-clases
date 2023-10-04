from auto import Auto

# Instanciación de un objeto de la clase 'Auto' con atributos adicionales
mi_auto = Auto(marca="Toyota", modelo="Corolla", color="azul")
mi_auto.set_motor("Motor V6")
mi_auto.set_cantidad_puertas(4)
mi_auto.set_tipo_traccion("Tracción delantera")
mi_auto.set_anno_fabricacion(2022)

# Accediendo y mostrando los atributos adicionales
print(f"Mi auto tiene un motor {mi_auto.get_motor()}, {mi_auto.get_cantidad_puertas()} puertas, tracción {mi_auto.get_tipo_traccion()}, y fue fabricado en el año {mi_auto.get_anno_fabricacion()}.")