# 1. Instalar la herramienta de Angular de forma global (si el aula no la tiene)
npm install -g @angular/cli

# 2. Crear el nuevo proyecto de Angular (con estilos CSS estándar y sin rutas para simplificar)
ng new mi-proyecto-angular --style=css --routing=false

A las preguntas, elegir:   NO SSR,  None IA

# 3. Entrar a la carpeta del proyecto recién creado
cd mi-proyecto-angular

# 4. Crear la carpeta para nuestros componentes organizados
mkdir -p src/app/components

# 5. Generar los dos componentes standalone usando el CLI de Angular
ng generate component components/navbar --standalone
ng generate component components/content --standalone