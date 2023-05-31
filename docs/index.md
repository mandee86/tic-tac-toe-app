# Dokumentáció

## Az alkalmazás

Az alkalmazás egy böngészőben futtatható amőba játék, melynek elindításához a felhasználónak egy felhasználónév jelszó párossal
kell belépnie. Induláskor a pálya mérete, a játékosok neve és a játékosok által használt jel megadható. A játékosok ugyanabban a böngészőablakban játszanak, és a játék során egy felirat jelzi, hogy melyik játékos léphet következőnek. Akinek először összejön egymás mellett (vízszintesen, függőlegesen vagy átlósan) 5 jel, az győzött, a győztes neve pedig egy modalban jelenik meg. Gombnyomásra a játék újra indítható, és új beállítások adhatók meg.

## Technológiák

React, SCSS, axios, json-server

## Szerver

Ay alkalmazás localhost-n fut

## Backend API

Nincs backend, helyette a alkalmazás a json-server package-t használja fake API létrehozására.

## Mappa struktúra

```sh
tic-tac-toe-app
├───docs
│ ├───index.md # Documentation data
├───node modules # Dependencies
│ ───package.json # npm dependencies and run scripts
│ ───.gitignore #
│ ───db.json # Imitate database
│ ───README.md # Documentation
├───public
│ ├──index.html # Entry point of application
├───src
│ ───App.scss # Application stylesheet
│ ───App.js # App component (Router for views)
│ ───index.js # React starting point
│ ───helpers.js # Helper functions
│ ───vars.scss # Style variables (colors, fonts)
│ ├───components # UI Components used
│ │ ├───Button # Customizable button component
│ │ ├───Modal
│ │ │ ───Modal.js # General modal component
│ │ │ ───ModalConfirm.js # Modal component for user confirmation
│ ├───modules # views of the Application
│ │ ├───Board
│ │ │ ───Board.js # View for game
│ │ │ ───Board.scss # Board stylesheet
│ │ │ ───BoardButtons.js # Buttons of the game (restart, reset, quit) component
│ │ │ ───Players.js # Players of the game component
│ │ │ ───Squares.js # Squares of the board component
│ │ ├───GameSettings
│ │ │ ───BoardForm.js # Settings form component of the board
│ │ │ ───GameSettings.js # View for settings of the game (players, board)
│ │ │ ───GameSettings.scss # GameSettings stylesheet
│ │ │ ───PlayerForm.js # Settings form component of players
│ │ ├───Login
│ │ │ ───Login.js # View for login (username, password)
│ │ │ ───Login.scss # Login stylesheet
│ │ ├───NotFound
│ │ │ ───NotFound.js # View for not found page
│ │ │ ───NotFound.scss # NotFound stylesheet
│ │ ───Protected.js # Protected component (for protected routes)
│ ├───services # Data manipulation
```

## Frontend architektúra

<img src="[https://your-image-url.type](https://github.com/mandee86/tic-tac-toe-app/blob/main/public/img/frontend-architecture.webp)" width="400" />

Amikor a felhasználó interakcióba lép az alkalmazással, az alkalmazás a megfelelő modulhoz irányítja őt. Minden modul bizonyos funkciókat és üzleti logikát tartalmaz. Ezenkívül minden modulnak lehetősége van az alkalmazási réteg használatával API-n keresztül kommunikálni a backenddel.

Az alkalmazás teljes kódja az src mappában található.

Minden modul, amely egy útvonalnak felel meg, a modules mappában található. A modulok nagy, logikával rendelkező UI komponensek. A modulok használhatnak komponenseket, de más modulokat nem.

Az újrafelhasználható UI komponensek (amelyek többsége nem tartalmaz semmilyen különleges logikát) a components mappában találhatók.

A services mappában találhatók olyan üzleti logikai függvények, amelyeket a modulok használnak.

Az assets-eket (pl. képek, betűtípusok) a public mappa tartalmazza.
