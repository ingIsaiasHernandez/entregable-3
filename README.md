# Entregable 3 - Todo API

## Objetivo

El alumno deberá crear una API para una aplicación de todo list, con usuarios y sus tareas

## Instrucciones

1.- Debes crear una API que pueda gestionar usuarios y sus tareas, cada tarea deberá tener su propia categoria. 

2.- Debrás incluir las siguientes tablas

- Users con los siguientes atributos
    - username
    - email
    - password
- todos con los siguietnes atributos
    - title
    - description
    - status
- categories
    - name

3.- Las tablas deben relacionarse de la siguiente manera

- Un usuario puede tener una o más tareas
- Una categoria puede pertenecer a una o mas tareas

4.- Los endpoints que debes crear son los siguientes: 

- un endpoint para crear usuarios
- un endpoint para que un usuario pueda crear tareas ( Cuando un usuario crea una tarea debe seleccionarse la categoria a la que esta pertenece)
- un endpoint para obtener todas las tareas de un usuario incluidas sus categorias
- un endpoint para que un usuario cambiar el status de una tarea (pendiente a completada) por defecto una tarea se crea con el status pendiente
- un endpoint que permita eliminar tareas

<aside>
📌 Tu decides las rutas donde estarán estos endpoints

</aside>

### Reto opcional

Crear una tabla de subcategorias para permitir que una tarea pueda tener una o mas subcategorias y una subcategoria pertenezca a una o más tareas 

Modificar el endpoint para crear una tarea que permita agregar las subcategorias de la tarea.

## Rubrica

- Sintaxis
    - El código debe tener la sintaxis correcta
        
        20%
        
- Estructura
    - Debe estar con la estructura de carpetas propuesta
        
        10%
        
- Funcionalidad
    - Al realizar las peticiones por un cliente como postman, no debe generar errores
        
        60%
        
- Código en ingles 10%
