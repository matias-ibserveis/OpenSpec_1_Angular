# prompt1
Qwen, vamos a trabajar siguiendo la metodología OpenSpec. 

En este proyecto tenemos un archivo de tareas en la ruta '.qwen/skills/openspec-propose/skill.md'. Por favor, lee ese archivo para entender el contexto y las reglas de arquitectura del proyecto. 

Tu único objetivo en este turno es confirmarme que has leído el archivo y decirme cuál es la 'Tarea 1' que debemos empezar. No generes ningún código todavía.

# comandos en terminal
* 1. Instalar la herramienta de Angular de forma global (si el aula no la tiene)
npm install -g @angular/cli
* 2. Crear el nuevo proyecto de Angular (sin rutas para simplificar)
ng new mi-proyecto-angular --style=css --routing=false
A las preguntas, elegir:   NO SSR,  None IA
* 3. Entrar a la carpeta del proyecto recién creado
cd mi-proyecto-angular
* 4. Crear la carpeta para nuestros componentes organizados
mkdir -p src/app/components
* 5. Generar los dos componentes standalone usando el CLI de Angular
ng generate component components/navbar --standalone
ng generate component components/content --standalone


# prompt2
Qwen, estamos en modo OpenSpec: Apply. Vamos a resolver la Tarea 1: "Crear la estructura del componente navbar".
Por favor, dame el código que debo introducir en los archivos del componente. Recuerda que estamos en Angular actual con componentes Standalone.
Genera el código en bloques limpios para estos dos archivos:
1. src/app/components/navbar/navbar.html
2. src/app/components/navbar/navbar.css
Requisitos de diseño:
- Una barra de navegación moderna y minimalista con fondo oscuro.
- El título del lado izquierdo debe decir "FP Informática - SDD".
- En el lado derecho, tres enlaces simulados: "Inicio", "Componentes" y "OpenSpec".

Dame ÚNICAMENTE los bloques de código para esos dos archivos. No escribas explicaciones ni introduzcas código de otros componentes.

# prompt3:  Pedir código para archivo src/app/components/content/content.html   y .css


# Ejecutar nuevo prompt4 para que app.html tenga solo en su código, los dos componentes



## ACTUALIZAR ESTADO 
- openspec-propose.skills
actualizar el estado de las tareas modificando las casillas [ ] por [x] para reflejar el progreso real. El archivo debe quedar editado de la siguiente manera:
    ## Tareas del Proyecto 📝
    - [x] Tarea 1: Crear la estructura base del proyecto.
                   inicializar el componente de navegación `navbar` en la carpeta `components`.
    - [x] Tarea 2: Crear el componente de contenido principal `content` en la misma carpeta.
    - [x] Tarea 3: Ensamblar ambos componentes en el archivo raíz 
                   (`app.component.ts` y `app.component.html`) para mostrar el resultado final.

                   


# EJECUTAR en terminal  (dentro de la carpeta mi-proyecto-angular): 
  ng serve --open 
