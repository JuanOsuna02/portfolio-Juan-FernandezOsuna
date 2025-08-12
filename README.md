# 💼 Portfolio Web – Juan Cruz

Proyecto personal como estudiante. Realizado como trabajo final para el curso de fullstack web. El objetivo es mostrar mis trabajos, experiencia y contacto con un diseño **oscuro**, acentos **verdes** y tipografías de **Google Fonts** (*Space Grotesk* + *IBM Plex Mono*).  
Stack simple: **HTML + Tailwind CSS (CDN) + JavaScript**.

---

## 🎯 Objetivo
Aplicar y practicar:

✅ Maquetación responsiva (Tailwind)  
✅ Tipografías externas (Google Fonts)  
✅ HTML semántico por secciones  
✅ Navegación por anclas y **scroll suave**  
✅ Validación **básica** de formulario con feedback visual en el botón

---

## 🌟 Características
- **Header fijo** con navegación a secciones.
- **Hero** con fondo SVG decorativo (ondas/triángulos verde–cian).
- **Presentación**: tarjeta con CTA y **foto de perfil** con `ring` + *hover*.
- **Proyectos**: grilla responsive con cards (título, imagen, link “Ver online”).
- **Experiencia / Habilidades**: listas claras, íconos/emoji.
- **Contacto**: formulario con validación en JS (nombre, email, mensaje).  
  - Si hay error, el botón de enviar se pone rojo y muestra alerta.
  - Si todo está bien, el botón vuelve a verde y muestra alerta de éxito.
- **Footer** con GitHub y **Descargar CV**.

---

## 🧰 Tecnologías utilizadas
- **HTML5**
- **Tailwind CSS** (CDN)
- **JavaScript** (vanilla)
- **Google Fonts**: *Space Grotesk*, *IBM Plex Mono*
- **Git & GitHub**

> No usa frameworks ni build: se abre directo en el navegador.

---

## 🎨 Estilo y tipografías
- Fondo: gradiente `#18181b → #23272f` + `bg-neutral-900`
- Verde principal: `green-400 / green-600 / green-700`
- Cian decorativo en SVG: `#22d3ee`
- Texto: `text-gray-100 / text-gray-300`
- Títulos en *IBM Plex Mono*, resto en *Space Grotesk*

---

## 📁 Estructura del proyecto
```
portfolio/
├── index.html
├── js/
│   └── app.js
├── img/
│   ├── FotoPefil.jpeg
│   ├── CapturaTarjetaPers.png
│   ├── CapturaRestaurante.png
│   └── CapturaFlex.png
├── CV_Juan_Cruz_Fernandez_Osuna.pdf
└── README.md
```

---

## 🧩 Secciones
1) **Inicio / Hero** – título + badge “J” + SVG decorativo  
2) **Presentación** – sobre mí + BOTON “Ver mis proyectos” + foto  
3) **Proyectos** – 3 cards con imagen, descripción y link a GitHub Pages  
4) **Experiencia** – PROCLOR, Curso Full Stack, UTN Paraná  
5) **Habilidades** – Frontend, Herramientas, Soft Skills  
6) **Contacto** – Formulario con validaciones mínimas y feedback visual en el botón  
7) **Footer** – GitHub y enlace a **CV**  

---

## 🧠 Funcionalidades JS (resumen)
- **Scroll suave** para `a[href^="#"]` → `scrollIntoView({behavior: "smooth"})`
- **Validación** del formulario:
  - Nombre ≥ 3 caracteres  
  - Email contiene `@` y `.`  
  - Mensaje ≥ 10 caracteres  
  - Si hay errores, el botón de enviar se pone rojo y muestra `alert`
  - Si está todo bien, el botón vuelve a verde y muestra `alert` de éxito
- **Animación de botones**: todos los botones y enlaces principales se agrandan al pasar el mouse (`hover:scale-105` con Tailwind)

---

## 📱 Responsividad
- Grillas adaptativas: `sm:grid-cols-2`, `lg:grid-cols-3`
- Imágenes con `object-cover` y `aspect-video`
- Tipografía y espaciado ajustados a cada breakpoint

---

## 🚀 Cómo usarlo
1. Cloná/descargá el repo  
2. Abrí `index.html` en el navegador  
3. (Opcional) Servidor local:
   - VSCode **Live Server**, o  
   - `python -m http.server 5500` → `http://localhost:5500`

### Despliegue (recomendado)
**GitHub Pages**  
Settings → Pages → *Deploy from branch* → `main` → `/root` → **Save**.

---

## 🛠️ Personalización rápida
- **Marca/Nav**: cambia `JuanCruz.dev` y los `href` del menú  
- **Colores**: buscá utilidades `green-*`, `neutral-*`, `gray-*`  
- **Proyectos**: actualizá imágenes y links “Ver online”  
- **CV**: reemplazá `CV_Juan_Cruz_Fernandez_Osuna.pdf` y el texto del footer

---

## 📄 Licencia
Uso **personal/educativo**.

## 👤 Autor
**Juan Cruz Fernandez Osuna**  
GitHub: `github.com/JuanOsuna02`