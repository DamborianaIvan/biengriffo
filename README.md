# Biengriffo

Landing de una sola página para la presentación de Biengriffo. React + Vite, JavaScript/JSX, Tailwind CSS 4, Motion, Lucide, React Hook Form y Zod. Sin router, backend, base de datos ni estado global.

## Desarrollo

Requiere Node >=22.12.0.

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

`npm run build` genera `dist/`. En Vercel: framework Vite, instalación `npm ci`, build `npm run build`, salida `dist`. Las secciones usan anclas; no se necesitan reglas de reescritura SPA. Esta configuración asume publicación en la raíz del dominio.

## Contenido pendiente del cliente

| Contenido                                                                       | Dónde editar                                      |
| ------------------------------------------------------------------------------- | ------------------------------------------------- |
| Marca, descripción, WhatsApp, Instagram                                         | `src/data/site.js`                                |
| Nombre, biografía, experiencia verificable, foto y texto alternativo del asesor | `src/data/site.js`, objeto `advisor`              |
| Servicios y confirmación de disponibilidad                                      | `src/data/services.js`                            |
| Imágenes, títulos, categorías y proporciones de trabajos                        | `src/data/gallery.js`                             |
| Fotografías locales                                                             | `public/images/`                                  |
| Texto de portada y presentación                                                 | `src/sections/Hero.jsx`, `src/sections/About.jsx` |
| Colores, tipografía y responsive                                                | `src/styles/alien.css` y `src/index.css`                  |
| Title, descripción y Open Graph                                                 | `index.html`                                      |
| Privacidad                                                                      | `src/sections/Contact.jsx`                        |

- WhatsApp: solo dígitos internacionales (sin `+`, espacios ni guiones). Instagram: URL HTTPS completa del perfil. No hay destinos ficticios: los canales sin configurar muestran un aviso y el botón flotante de WhatsApp permanece oculto.
- Servicios: son propuestas, no ofertas confirmadas. Revisar los textos y cambiar `confirmed` a `true` únicamente con confirmación del cliente.
- Galería: son tres ilustraciones locales para mostrar la composición, **no trabajos reales**. Sustituirlas por imágenes propias o autorizadas; actualizar dimensiones y `alt`, y cambiar `placeholder` a `false`. `shape` admite `portrait` o `landscape`. Las categorías disponibles están en el mismo archivo.
- Perfil: no se inventaron certificaciones, resultados, años de experiencia ni testimonios. La biografía y el retrato pendientes están identificados.
- Fondos de «Sobre mí» y «Consulta»: fotografía de referencia de **Jave Lr**, obtenida en [Pexels](https://www.pexels.com/photo/kush-cannabis-plant-in-close-up-photography-10603478/). Se presenta con crédito como imagen ilustrativa, nunca como trabajo propio. Fuente: `https://images.pexels.com/photos/10603478/pexels-photo-10603478.jpeg`. Versiones WebP locales de 1800 y 800 px. Si se reemplaza, actualizar también el crédito visible y el texto alternativo.
- Fuente Manrope servida localmente; licencia SIL OFL en `public/fonts/OFL.txt`. No se consulta Google Fonts desde la web.

## Formulario: integración pendiente

Sin `VITE_CONTACT_ENDPOINT`, el botón **Revisar consulta** valida los campos e informa que no se realizó un envío. No almacena información ni simula éxito. El usuario conserva lo escrito si ocurre un error.

Para habilitar envíos:

1. Contratar/configurar un receptor de formularios o un endpoint externo.
2. Copiar `.env.example` a `.env.local` y completar `VITE_CONTACT_ENDPOINT` con su URL HTTPS pública, sin credenciales. En hosting, definir esa variable en el panel y reconstruir la aplicación.
3. El receptor debe aceptar `POST` JSON, permitir el origen real mediante CORS y responder con JSON `{ "success": true }` **solo cuando reciba correctamente la consulta**. Si el proveedor tiene otro formato, adaptar únicamente `sendContact` en `src/utils/contact.js` a su documentación. Un 200 o una respuesta HTML por sí solos no generan éxito.
4. Validar también del lado receptor y configurar control de abuso, límites de solicitudes y entrega de mensajes. Las claves de correo o servicios deben quedar en el receptor, nunca en variables `VITE_*`.
5. Completar el aviso de privacidad con responsable, contacto, proveedor, conservación y forma de solicitar acceso/eliminación de datos antes de habilitar el formulario.
6. Probar una entrega real y los casos de error con el proveedor elegido.

Cuerpo enviado:

```json
{
  "name": "Nombre de la persona",
  "contact": "persona@example.com",
  "type": "otra",
  "message": "Texto de la consulta."
}
```

El cliente usa un tiempo límite de 15 segundos. Un fallo de conexión, timeout, error HTTP o respuesta sin confirmación muestra un error; no borra los campos. No hay analítica ni cookies de seguimiento propias.

## Organización

- `src/components/layout/`: navegación responsive, footer, WhatsApp.
- `src/components/ui/`: Button, Reveal, SectionHeading y ServiceRow.
- `src/components/gallery/`: filtros, grid animado y lightbox con `<dialog>` nativo.
- `src/sections/`: las siete secciones de la landing.
- `src/data/`: configuración y contenido editable.
- `src/utils/`: enlaces, envío y esquema del formulario.
- `tests/`: validación y contrato del formulario, protección contra falsos éxitos y destinos de contacto.

## Accesibilidad y comportamiento

Anclas, enlace de salto, foco visible, formularios etiquetados, errores vinculados a campos, controles de 44 px, menú con Escape y estado expandido. Lightbox con foco contenido por el diálogo nativo, Escape, flechas, cierre, contador, retorno de foco y bloqueo del scroll. Respeta `prefers-reduced-motion` en los componentes React Bits y en CSS. Las imágenes de galería usan carga diferida.

## Dirección alien / ácida

Negro profundo, verde eléctrico y violeta. Hero tipográfico sin fotografía: «CULTIVO» ocupa la portada, acompañado de líneas verdes y violetas reactivas al mouse y una única llamada a consultar. Los textos describen el servicio sin promesas ni credenciales inventadas.

- React Bits: `Threads` (fondo WebGL) y `FadeContent` (secciones, galería y lightbox).
- Componentes instalados como código local en `src/components/reactbits/`, con licencia y notas de origen. FadeContent utiliza GSAP. El título permanece estable, sin descifrado de caracteres.
- El fondo se puede pausar; Threads deja de dibujar fuera de pantalla y en pestañas ocultas. El componente limita la resolución máxima a 1920 px y utiliza 65 líneas. En dispositivos táctiles el fondo se mueve de forma autónoma, sin interacción con el puntero.
- `prefers-reduced-motion` evita montar los efectos y muestra contenido estático. El fondo tiene un degradado de respaldo para dispositivos sin WebGL2.
- «Sobre mí» utiliza una fotografía de fondo con capa oscura: fija durante el scroll en escritorio con mouse y movimiento permitido; fondo normal en dispositivos táctiles y con movimiento reducido. La imagen queda limitada a esa sección.
- «Consulta» reutiliza la fotografía de cultivo con encuadre propio y una capa violeta oscura. El fondo acompaña al scroll y el formulario conserva su superficie opaca para facilitar la lectura.
- Filtros, lightbox, navegación y formulario conservan sus acciones. Las imágenes de muestra siguen identificadas.
- Threads se carga en un chunk separado; las dependencias de animación y React también se separan para evitar un único bundle grande.

## Antes de publicar la versión definitiva

- Completar los datos reales, servicios y fotos; revisar todos los avisos provisionales.
- Agregar `og:url`, canonical y URL absoluta de `og:image` en `index.html` cuando exista el dominio definitivo. `public/og-image.png` ya incluye una tarjeta de marca local.
- Configurar receptor y privacidad, o mantener el modo de revisión sin envío.
- Revisar visualmente en teléfono y escritorio, teclado completo, zoom al 200%, preferencias de movimiento reducido, filtros, apertura/cierre del lightbox, retorno de foco y errores/envío real.
- Esta implementación no publica automáticamente un sitio ni configura un servicio externo. El build queda listo para hosting estático.

## Verificación de esta entrega

Rediseño: build de producción correcto y 7 pruebas del formulario aprobadas. Render de React comprobado con 5 servicios desplegables, uno abierto inicialmente, un H1 único, anclas válidas y recursos locales presentes. Se revisó la estructura responsive en código. La revisión visual en navegador queda pendiente: el entorno de trabajo no dispone del controlador de navegador requerido para esa comprobación.
