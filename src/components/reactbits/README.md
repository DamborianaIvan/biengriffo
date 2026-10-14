# React Bits

Código obtenido el 14 de octubre de 2026 desde el repositorio oficial:
https://github.com/DavidHDev/react-bits

- src/content/Backgrounds/Aurora/Aurora.jsx y Aurora.css
- src/content/TextAnimations/DecryptedText/DecryptedText.jsx
- src/content/Animations/FadeContent/FadeContent.jsx

Licencia original: LICENSE.md en esta carpeta.

Adaptaciones locales:
- FadeContent acepta `as` para conservar botones nativos en la galería.
- DecryptedText conserva el texto original en su alternativa para lectores de pantalla.
- Aurora elimina sus recursos sin forzar pérdida de contexto, para admitir el ciclo de efectos de React StrictMode.
- Reveal omite las animaciones cuando se solicita movimiento reducido, incluso ante cambios de preferencia durante la sesión.

Usar estos componentes como base para nuevos efectos. Motion es una dependencia de DecryptedText; GSAP y ScrollTrigger son dependencias de FadeContent.
