<div align="center">
    <img src="./Cecilia_Perdomo.png" alt="Banner Cecilia Perdomo">
</div>

# Brasaland  
Cadena de restaurantes a la parrilla, Colombia + Florida

## 🎯 El Desafío
Tu empresa lleva años operando exitosamente de forma tradicional, pero el mundo ha cambiado. Los clientes buscan información en línea antes de tomar decisiones. Los competidores ya tienen presencia digital. Y tu empresa, a pesar de su experiencia y calidad, sigue siendo invisible en internet.

La dirección ha decidido iniciar la transformación digital. Tu tarea es construir el primer punto de contacto digital de la empresa: un sitio web público profesional que presente lo que hacen y capture información de personas interesadas a través de un formulario de aplicación o registro.

Este sitio debe funcionar en cualquier dispositivo, cumplir con estándares de accesibilidad web, estar optimizado para motores de búsqueda, y presentar una experiencia de usuario pulida y profesional. No es solo "una página bonita" — es el primer paso hacia la modernización de una empresa que quiere seguir siendo relevante.

### Instrucciones
Como sabes, hemos decidido dar el salto a lo digital. Necesitamos lanzar nuestro sitio web público lo antes posible. Revisa el CONTEXT.md para entender exactamente qué hace nuestra empresa y qué información necesitamos capturar de las personas interesadas.

El sitio debe tener dos partes:

1. **Landing page**: Una página de presentación con:
    - Encabezado con navegación clara
    - Sección hero que explique qué hacemos y por qué nos deberían elegir
    - Sección destacando nuestras características principales o beneficios clave (basados en nuestra experiencia en el sector)
    - Información de contacto o llamado a la acción
    - Pie de página profesional
2. **Formulario de aplicación/registro**: Una página separada donde las personas puedan:
    - Completar sus datos personales
    - Proporcionar la información específica que necesitamos (ver CONTEXT.md)
    - Enviar su aplicación (no necesitas conectarlo a nada todavía, solo validar los datos)

#### Requisitos técnicos que debes cumplir:
- Responsive: debe verse bien en móvil, tablet y escritorio
- Accesible: usa HTML semántico, etiquetas ARIA cuando sea necesario, y atributos alt en imágenes
- Optimizado para SEO: implementa Schema.org para marcar la información de la empresa
- Validación completa del formulario con JavaScript — todos los campos deben validarse antes de "enviar"
- Mensajes de error claros cuando algo no esté correcto
- Usa Tailwind CSS para todo el diseño. No quiero ver CSS personalizado escrito a mano a menos que sea absolutamente necesario.

## Estructura básica

- /
- ├── index.html (landing page)
- ├── application.html (formulario de aplicación/registro)
- ├── styles.css (solo si Tailwind CDN no es suficiente)
- └── validation.js (lógica de validación del formulario)

## Live version
Para ver el proyecto en vivo 🌐
- **Opción 1**: Servidor HTTP simple
```bash
cd apps/web
python -m http.server 8000
```
- **Opción 2**: Live Server (Si usas extensión de VS Code)
    - Instala la extensión "Live Server"
    - Click derecho en index.html → "Open with Live Server"

## Desarrollo web
💻 [Cecilia Perdomo](https://portfolio-cecilia.vercel.app/) - 12 de Abril de 2026