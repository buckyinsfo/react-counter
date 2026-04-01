# React Counter

A small React demo app migrated from Create React App to Vite.

## Scripts

- `npm run dev`: start the Vite dev server
- `npm run build`: create a production build in `dist/`
- `npm run preview`: preview the production build locally
- `npm test`: run the Vitest smoke test once

## Notes

- Static assets still live in `public/`.
- The app keeps its existing React 16 runtime for now so the bundler migration stays low risk.
- The old CRA service worker wiring was removed during the migration.
