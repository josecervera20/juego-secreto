# 🎯 Juego del Número Secreto

## 🎲 Descripción

¡Pon a prueba tu intuición con el **Juego del Número Secreto**\! Esta es una aplicación web interactiva donde tu misión es **adivinar un número generado aleatoriamente por la computadora**. Con cada intento, el juego te dará pistas claras, indicándote si tu número es mayor o menor que el secreto. ¡El objetivo es adivinarlo en la menor cantidad de intentos posible y desafiarte a mejorar tu marca personal\!

---

## ⚙️ Características Destacadas

- **Número Secreto Aleatorio**: El juego genera un número secreto único dentro del rango del 1 al 10 en cada partida.
- **Evita Repeticiones (Inteligente)**: Los números secretos no se repiten en una misma sesión hasta que todos los números posibles hayan sido utilizados, garantizando variedad en el juego.
- **Contador de Intentos**: Mantén un registro de cuántos intentos te toma adivinar el número.
- **Feedback Instantáneo**: Recibe mensajes claros sobre si tu número es mayor o menor que el secreto, guiándote en cada paso.
- **Mensaje de Victoria**: Al acertar, el juego te felicita y te informa en cuántos intentos lograste la victoria.
- **Reinicio Controlado**: El botón "Nuevo juego" solo se activa una vez que hayas adivinado el número, asegurando una experiencia de juego fluida.
- **Interfaz Intuitiva**: Toda la información y retroalimentación se muestra directamente en la pantalla para una interacción sencilla y amigable.

---

## 💻 Tecnologías Utilizadas

Este juego está construido con las tecnologías web fundamentales:

- **HTML**: Para estructurar la interfaz del juego.
- **CSS**: Para darle vida al diseño y los estilos visuales.
- **JavaScript**: La lógica principal detrás de la generación del número, la gestión de la interactividad y la retroalimentación al usuario.

---

## 🚀 Instalación y Ejecución Local

Para jugar o explorar el código en tu máquina, sigue estos sencillos pasos:

1.  **Clona el repositorio:** Abre tu terminal o línea de comandos y ejecuta:
    ```bash
    git clone https://github.com/josecervera20/juego-secreto.git
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd juego-secreto
    ```
3.  **Abre el juego en tu navegador:** Simplemente abre el archivo `index.html` directamente desde el explorador de archivos, o si prefieres la terminal:
    ```bash
    open index.html # Para macOS
    start index.html # Para Windows
    xdg-open index.html # Para Linux
    ```

---

## 🎮 Cómo Jugar

Una vez que tengas el juego abierto en tu navegador:

1.  **Ingresa un número** del 1 al 10 en el campo de texto.
2.  **Haz clic en "Intentar"** (o presiona Enter) para enviar tu suposición.
3.  **Lee las pistas**: El juego te dirá si el número secreto es mayor o menor que tu intento.
4.  **¡Adivina\!**: Cuando aciertes, verás un mensaje con el número de intentos que te tomó.
5.  **Juega de nuevo**: Haz clic en el botón **"Nuevo juego"** para empezar una partida fresca.

---

## 🖼️ Captura de Pantalla

## ![Captura de pantalla del Juego del Número Secreto](img/image.png)

## 📂 Estructura del Proyecto

```
juego-secreto/
├── index.html       # Estructura principal de la interfaz del juego
├── style.css        # Hoja de estilos para el diseño visual
├── app.js           # Lógica principal del juego (JavaScript)
└── img/             # Directorio para imágenes y assets visuales (ej. image.png)
```

---

## 🤝 Contribuciones

¡Las contribuciones son siempre bienvenidas\! Si tienes ideas para mejorar este juego, encuentras un error o quieres añadir nuevas funcionalidades, ¡no dudes en participar\!

1.  **Haz un Fork** del repositorio a tu cuenta de GitHub.
2.  **Crea una Rama:** Clona tu fork localmente y crea una nueva rama para tus cambios:
    ```bash
    git checkout -b feature/tu-mejora
    ```
    (o `bugfix/descripcion-del-bug` si es una corrección).
3.  **Realiza tus Cambios** y asegúrate de probarlos bien.
4.  **Haz Commit:** Guarda tus cambios con un mensaje claro y descriptivo:
    ```bash
    git commit -m 'feat: Añadir X característica'
    # o 'fix: Corregir error en Y'
    ```
5.  **Sube tus Cambios:** Empuja tu rama a tu repositorio bifurcado en GitHub:
    ```bash
    git push origin feature/tu-mejora
    ```
6.  **Abre un Pull Request**: Finalmente, ve a GitHub y crea un Pull Request hacia el repositorio original, explicando detalladamente tus cambios.

---

## 📄 Licencia

Este proyecto es de código abierto y se publica bajo la [Licencia MIT](LICENSE). Siéntete libre de usar, modificar y distribuir este código para tus propios proyectos.
