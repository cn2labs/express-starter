# 🔋 Express starter project

"Blank Theme" für Express.js Projekte, mit vorangelegter Ordner-Struktur. Enthält bereits die folgenden Module:

- [Nano ID](https://github.com/ai/nanoid)
- [Express](https://github.com/expressjs/express)
- [CORS](https://github.com/expressjs/cors)
- [Nodemon](https://github.com/remy/nodemon)

## Ordner Struktur

- **api**: Enthält alle API Routen
- **db**: Enthält die DB-Logik (Controller, ggf. Models)
- **utils**: Dort können Helfer-Funktionen abgelegt werden

## Setup

1. `npm install` um alle notwendigen Pakete zu installieren
2. `npm update` um alle Pakete auf die aktuellste Version zu aktualisieren
3. .env.example in .env umbenennen und mit den gewünschten Parametern füllen
4. `npm run start` um den Nodemon Prozess zu starten
