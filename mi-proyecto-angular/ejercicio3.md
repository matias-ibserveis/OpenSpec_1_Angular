3. Ejercicio Práctico: Añadir un nuevo componente (Botón) con OpenSpec
Vamos a añadir un componente Botón interactivo. 
Siguiendo el flujo que ya hemos aprendido (Humano prepara -> IA rellena -> Humano audita):

Paso A: Registrar el nuevo objetivo en el artefacto (openspec-propose/skills.md)
Abrir el archivo openspec-propose/skills.md y añadir la siguiente nueva tarea al final del archivo:

- [ ] Tarea 4: Crear e integrar un componente de botón interactivo (`app-button`) que incremente un contador usando la Signal del componente raíz.


Paso B: El alumno crea la estructura en la Terminal
Se eejcuta el siguiente código para crear las carpetas del componente:
` ng generate component components/button --standalone `


Paso C: El Prompt para Qwen (Pedir el código)
Pedir a Qwen que genere únicamente el código del botón con un diseño moderno:
# prompt:
Qwen, estamos en modo OpenSpec: Apply. Vamos a resolver la Tarea 4: "Crear el componente botón interactivo".
Genera el código exclusivo para:
1. src/app/components/button/button.component.html -> Un botón estilizado que diga "¡Haz clic aquí!" y que use el evento (click).
2. src/app/components/button/button.component.ts -> El componente Standalone que emita un evento hacia el padre o maneje una acción sencilla.
Dame solo los bloques de código limpios, sin explicaciones.



Paso D: Actualizar el artefacto y cerrar
- Copiar el código en archivo correspondiente components/button   (.html, .ts)
- Añade la etiqueta <app-button></app-button> en el app.html (añadiéndolo también en los imports del .ts como te diste cuenta antes), 
- verifica que funciona en el navegador 
- Marca la tarea con [x] en el skills.md