#!/usr/bin/env sh

# Detener el script si ocurre algún error
set -e

# Construir el sitio VitePress
npm run docs:build

# Ir a la carpeta generada
cd docs/.vitepress/dist

# Inicializar un nuevo repositorio Git
git init
git add -A
git commit -m 'deploy'

# Hacer push al branch gh-pages en tu repositorio
git push -f https://github.com/Blasrange/Smart_Support_Desk.git main:gh-pages

# Volver al directorio anterior
cd -