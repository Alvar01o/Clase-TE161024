/**
 * Ejercicio: Gestión de una Biblioteca
 * Enunciado: Crea un sistema para gestionar una biblioteca que permita ingresar y mostrar información sobre los libros disponibles. Cada libro debe tener un identificador único, un título, un autor, y una cantidad disponible en la biblioteca. El sistema debe permitir agregar libros y mostrar la lista completa de libros en la biblioteca.
 * 
 * Pasos a Realizar:
 * Definir Interfaces:
 * 
 * Define una interfaz Book con las siguientes propiedades:
 * id (número): Identificador único del libro.
 * title (cadena): Título del libro.
 * author (cadena): Autor del libro.
 * quantity (número): Cantidad disponible en la biblioteca.
 * Define una interfaz Library que contenga una propiedad:
 * books (arreglo de Book): Un arreglo que almacene todos los libros de la biblioteca.
 * Implementar Funciones:
 * 
 * Crea una función addBook(library: Library, book: Book): void que tome un objeto de tipo Library y un objeto de tipo Book, y agregue el libro al arreglo de libros de la biblioteca.
 * Implementa una función displayBooks(library: Library): void que muestre en la consola la lista de libros en la biblioteca, incluyendo el título, el autor y la cantidad de cada libro.
 * Crear un Objeto de Tipo Library:
 * 
 * Inicializa un objeto de tipo Library que contenga un arreglo vacío para almacenar los libros.
 * Agregar Libros:
 * 
 * Utiliza la función addBook para agregar al menos cinco libros a la biblioteca. Asegúrate de usar diferentes títulos y autores.
 * Mostrar Libros:
 * 
 * Llama a la función displayBooks para mostrar en la consola la lista completa de libros disponibles en la biblioteca.
 */