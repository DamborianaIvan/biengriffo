# React Bits

Código del repositorio oficial https://github.com/DavidHDev/react-bits.
Licencia original: LICENSE.md en esta carpeta.

- Threads.jsx y Threads.css: src/content/Backgrounds/Threads/, obtenido el 14 de octubre de 2026.
- FadeContent.jsx: src/content/Animations/FadeContent/, obtenido el 14 de octubre de 2026.

Adaptaciones locales:
- FadeContent acepta `as` para conservar botones nativos en la galería.
- Threads ignora punteros táctiles y movimientos mientras está pausado.
- Reveal omite los efectos cuando se solicita movimiento reducido, incluso ante cambios de preferencia durante la sesión.

Usar estos componentes como base para nuevos efectos. GSAP y ScrollTrigger son dependencias de FadeContent.
