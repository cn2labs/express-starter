# 🔋 Express starter project

"Batteries included" Blank Theme für Express.js Projekte, mit vorangelegter Ordner-Struktur. Enthält bereits die folgenden Module:

- [Nano ID](https://github.com/ai/nanoid)
- [Express](https://github.com/expressjs/express)
- [CORS](https://github.com/expressjs/cors)
- [Morgan](https://github.com/expressjs/morgan)
- [dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://github.com/remy/nodemon)

## Ordner Struktur

- **routes**: Enthält alle API Routen
- **controllers**: Enthält alle Controller
- **utils**: Dort können Helfer-Funktionen abgelegt werden (Authentifizierung, Custom Errors usw.)
- **middlewares**: Enthält alle Middlewares (Auth, Error Handling usw.)

## Setup

1. `npm install` um alle notwendigen Pakete zu installieren
2. `npm update` um alle Pakete auf die aktuellste Version zu aktualisieren
3. .env.example in .env umbenennen und mit den gewünschten Parametern füllen
4. `npm run start` um den Nodemon Prozess zu starten
