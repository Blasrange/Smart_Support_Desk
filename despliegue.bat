@echo off
echo ====== Construyendo sitio VitePress ======
call npm run docs:build

cd docs/.vitepress\dist

echo ====== Inicializando Git y haciendo commit ======
git init
git add -A
git commit -m "deploy"

echo ====== Haciendo push a gh-pages ======
git push -f https://github.com/Blasrange/Smart_Support_Desk.git main:gh-pages

cd ../..

echo ====== ¡Despliegue completo! ======
pause
