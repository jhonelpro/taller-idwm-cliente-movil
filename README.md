# Taller IDWM Cliente Movil

El objetivo de este documento es proporcionar instrucciones detalladas para clonar, configurar y ejecutar un proyecto basado en Ionic desde un repositorio remoto en GitHub. Sigue los pasos a continuación para levantar el proyecto correctamente.


## Clonar el repositorio

Para clonar un repositorio debes acceder a la dirección de github donde esta alojado el repositorio. 

<img src="https://drive.google.com/uc?export=view&id=11EZ8iK_pIHX_Sx66Ju_mUNHQaVL4hLyF" alt="Repositorio GitHub" width="850"/>

Hacer clic en el boton verde que dice codigo, y copiar el enlace https.

<img src="https://drive.google.com/uc?export=view&id=1FSJeRAGrD8goeLLIzMbxLQgEIOlmbmBR" alt="Repositorio/Codigo GitHub" width="450"/>

Ahora, es necesario crear una carpeta en cualquier dirección que deseas almacenar el proyecto.

Despues, haz click derecho sobre la carpeta  y selecciona abrir en terminal.

<img src="https://drive.google.com/uc?export=view&id=1svstl1CkoRq30wl20-3LR4lxb5cB9NXh" alt="Abrir con terminal" width="450"/>

Para clonar el repositorio en la carpeta que creaste, en la terminal ingresa el comando "git clone" seguido de un espacio y la dirección del repositorio (La cual copiaste anteriormente). 

````
git clone https://github.com/jhonelpro/taller-idwm-cliente-movil.git
````

> [!NOTE]
> Presiona enter, y espera a que termine de clonar el repositorio.

Luego, ingresa el comando "code ." para abrir Visual Studio Code.

````
code .
````

> [!NOTE]
> Presiona enter, y espera a que abra la aplicacion de vscode.

## Instalar dependencias

Una vez dentro de Visual Studio Code abre una terminal en este, presionando las teclas "Ctrl + Shift + `", o tambien puedes ir a la parte superior de vscode, seleccionar los 3 puntitos "...", luego "Terminal", y "New Terminal".

<img src="https://drive.google.com/uc?export=view&id=1vlOWIl9QsAydtAeePWJHbUGt18aAzoES" alt="Abrir terminal en vscode" width="550"/>

Ahora en la terminal accede a la raiz del proyecto con el siguiente comando:

````
cd <nombre-del-repositorio>
````

> [!NOTE]
> Tambien puedes acceder a la raiz del proyecto, ingresando 'cd', despues presionando la tecla Tab, y presiona la tecla Enter para finalizar.

Verifica si esta en la rama main del proyecto, a travez del siguiente codigo en la terminal.

````
git checkout main
````

Si no estuvieras en la rama main del proyecto, el codigo anterior te llevara a la rama.


Para restaurar las dependencias del proyecto, ingresa el siguiente comando en la terminal:

````
npm install
````

## Ejecutar la aplicacion

Finalmente para ejecutar la aplicacion, debes ingresar el siguiente comando en la terminal:

````
ionic serve
````

Abre tu navegador en http://localhost:8100 para ver la aplicación en ejecución.

