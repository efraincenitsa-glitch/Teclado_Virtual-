# Teclado Virtual JEA (PWA) — Paquete TODO-EN-UNO v2

Cambios (Opción A):
- Teclas **negras** con `z-index:3` por encima de las blancas.
- Teclas **blancas** en `z-index:1`.
- Efecto de tecla **.playing** usa `box-shadow` (se evita crear stacking context con `filter`).
- Teclado levantado visualmente (`bottom:18px` y altura `.kbd` 280px).

Incluye:
- `index.html`, `manifest.webmanifest`, íconos 3D realistas (`icon-1024.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `maskable-512x512.png`, `favicon-32x32.png`, `favicon-16x16.png`).
- Service Worker embebido para uso **offline**.

## Publicación en GitHub Pages
1) Crea un repo (p. ej. `teclado-virtual-jea`).
2) Sube todos los archivos de esta carpeta a `main`.
3) Settings → Pages → Source: `Deploy from a branch` → `main` → `/root` → Save.
4) Abre la URL en Safari (iPhone) → Compartir → **Añadir a pantalla de inicio**.
