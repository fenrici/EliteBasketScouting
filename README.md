# Elite Basket Scouting

Una plataforma web profesional para programas de entrenamiento de baloncesto de élite en Madrid, España.

## 🏀 Descripción

Elite Basket Scouting es una web moderna y responsive que ofrece programas de entrenamiento profesional de baloncesto para jugadores que buscan dar el salto al baloncesto profesional europeo. La plataforma está inspirada en Elite Futbol Scouting pero adaptada específicamente para el baloncesto.

## ✨ Características

- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Múltiples Idiomas**: Soporte para español e inglés
- **Programas Variados**: Desde 1 semana hasta 1 año de entrenamiento
- **Formulario de Contacto**: Sistema de solicitudes integrado
- **Animaciones Suaves**: Efectos visuales modernos y atractivos
- **SEO Optimizado**: Estructura semántica y meta tags apropiados
- **Paleta Elegante**: Colores negro, dorado y blanco para un aspecto premium

## 🎨 Programas Disponibles

1. **Programa Master (1 Semana)** - €3.500
2. **Programa Pro (15 Días)** - €5.400 ⭐ Más Popular
3. **Programa Élite (1 Mes)** - €7.900
4. **Programa Avanzado (2 Meses)** - €10.200
5. **Programa Superior (3 Meses)** - €12.500
6. **Programa Premium (1 Año)** - €25.500

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Estilos avanzados con variables CSS y Grid/Flexbox
- **JavaScript ES6+**: Funcionalidad interactiva y dinámica
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografías Montserrat y Playfair Display

## 📁 Estructura del Proyecto

```
EliteBasketScouting/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── images/             # Directorio de imágenes
├── README.md           # Documentación
└── .gitignore          # Archivos ignorados por Git
```

## 🚀 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/elite-basket-scouting.git
   cd elite-basket-scouting
   ```

2. **Abrir en el navegador**:
   - Simplemente abre `index.html` en tu navegador web
   - O usa un servidor local:
     ```bash
     python -m http.server 8000
     # Luego visita http://localhost:8000
     ```

## 🎯 Funcionalidades Principales

### Navegación
- Menú responsive con toggle móvil
- Scroll suave entre secciones
- Navegación activa destacada

### Programas
- Tarjetas interactivas con hover effects
- Programa destacado (15 días)
- Precios y características detalladas

### Formulario de Contacto
- Validación de campos
- Estados de carga
- Simulación de envío

### Internacionalización
- Cambio de idioma en tiempo real
- Traducciones completas ES/EN
- Persistencia de idioma seleccionado

## 🎨 Paleta de Colores Elegante

- **Primario**: #000000 (Negro elegante)
- **Secundario**: #ffd700 (Dorado premium)
- **Acento**: #1a1a1a (Negro suave)
- **Oscuro**: #000000 (Negro puro)
- **Claro**: #ffffff (Blanco puro)
- **Dorado Claro**: #fff8dc (Dorado suave)
- **Dorado Medio**: #ffd700 (Dorado vibrante)
- **Dorado Oscuro**: #b8860b (Dorado profundo)
- **Gris**: #666666 (Gris elegante)

## 📱 Responsive Design

La web está optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #000000;
    --secondary-color: #ffd700;
    --gold-light: #fff8dc;
    --gold-medium: #ffd700;
    --gold-dark: #b8860b;
    /* ... más variables */
}
```

### Agregar Nuevos Programas
Modifica la sección de programas en `index.html` y agrega las traducciones correspondientes en `script.js`.

### Cambiar Imágenes
Reemplaza las imágenes en el directorio `images/` manteniendo los mismos nombres de archivo.

## 📧 Integración Backend

Para integrar con un backend real, modifica la función de envío del formulario en `script.js`:

```javascript
// Reemplazar la simulación actual con una llamada real
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    // Manejar respuesta
});
```

## 🌐 Despliegue

### GitHub Pages
1. Sube el código a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará disponible en `https://tu-usuario.github.io/elite-basket-scouting`

### Netlify
1. Conecta tu repositorio de GitHub
2. Configura el directorio de build (si aplica)
3. Despliega automáticamente

### Vercel
1. Importa el proyecto desde GitHub
2. Configura las opciones de build
3. Despliega con un clic

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- **Email**: info@elitebasketscouting.com
- **Teléfono**: +34 600 000 000
- **Dirección**: Madrid, España

## 🙏 Agradecimientos

- Inspirado en [Elite Futbol Scouting](https://elitefutbolscouting.com)
- Iconos de [Font Awesome](https://fontawesome.com)
- Fuentes de [Google Fonts](https://fonts.google.com)

---

**Elite Basket Scouting** - Desarrollando el futuro del baloncesto profesional 🏀 