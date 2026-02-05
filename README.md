# Teclado Virtual JEA (PWA) — v4

Novedades:
- **Capas separadas** para teclas: `whites` (z-index 1) y `blacks` (z-index 3). Las negras quedan **siempre arriba**.
- Efecto `.playing` con **box-shadow** (sin `filter`) para evitar conflictos de apilamiento.
- Bloque **“Notas de la canción”** que muestra la secuencia (en **Do‑Re‑Mi** si activas el switch o en EN si lo desactivas).
- **Cache bust** del Service Worker (`keyboard-app-v4`) y versionado `?v=4` para evitar versiones viejas.

Incluye: `index.html`, `manifest.webmanifest`, íconos 3D (`icon-1024.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `maskable-512x512.png`, `favicon-32x32.png`, `favicon-16x16.png`).

## Publicar en GitHub Pages
1) Crea un repo (p. ej. `teclado-virtual-jea`).
2) Sube todo el contenido a `main`.
3) Settings → Pages → Source: `Deploy from a branch` → `main` → `/root` → Save.
4) Abre la URL en Safari (iPhone) → Compartir → **Añadir a pantalla de inicio**.
