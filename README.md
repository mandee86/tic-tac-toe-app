# Amőba játék

Technológiák - React (https://github.com/facebook/create-react-app)

A projekt futtatásához Node.js és npm szükséges.

## How to

Töltse le vagy klónozza a respository-t (git clone https://github.com/mandee86/tic-tac-toe-app.git). Ezt követően a projekt gyökérkönyvtárából telepítse a dependency-ket, devDependency-ket és indítsa el a szervert.

**Telepítés**

```sh
$ npm install
```

Ha valami nem jó, törölje a node_modules mappát, és futtassa újra az npm installt.
Ha így is hibát dob, győződjünk meg arról, hogy a Node, npm globálisan is telepítve van:

```sh
$ node -v
$ npm -v
```

Ha nincs telepítve:

```sh
$ npm install npm -g
$ https://nodejs.org/en/download
```
**Telepítse és indítsa el a szervert**

```sh
$ npm install -g json-server
$ json-server --watch db.json --port 3004
```

**Futtassa az alkalmazást a böngészőben**

```sh
$ npm start

Nyissa meg a http://localhost:3000 a böngészőben.
```

**Jelentkezzen be a játékba**

```sh
Felhasználónév: User1
Jelszó: 12345
```

# Felhasznált technológiák

**React**
Azért esett a választásom a React-re, mert komponens alapú felépítése lehetővé teszi, hogy moduláris és újrafelhasználható kódot hozzunk létre, így a kód átláthatóbb, karbantarthatóbb lesz, és időt spórol meg számunkra. Másik előnye, hogy segítségével SPA alkalmazásokat lehet készíteni, ezáltal az üzleti logika jobban elkülöníthető, amely struktúrált kódot biztosít számunkra. A renderelési idõ csökkentése érdekében pedig Virtual DOM-ot használ, a lehető legkevesebb DOM-manipulációt végzi el, annak érdekében, hogy a komponenseket naprakészen tartsa. (A DOM-módosítások lelassítják a rendszereket, a DOM virtualizálásával ezek a változtatások minimalizálódnak).

**SCSS**
Az SCSS használatával számos további funkciót adhatunk a CSS-hez, többek közôtt:

### változó

lehetővé teszi egy érték, és ezeknek a változóknak az újrafelhasználását

### nesting

könnyen olvasható CSS kódot tesz lehetõvé

### mixins

olyanok, mint a függvények, értéket és paramétereket vehetnek fel, beleértve az alapértelmezett értékeket is.

### extend

lehetővé teszi CSS-tulajdonságok megosztását, akkor hasznos, ha szinte azonos stílusú elemek vannak, amik csak néhány apró részletben különböznek egymástól.
Mindezek a kiegészítő funkciók sokkal könnyebbé és gyorsabbá tehetik a CSS írását a hagyományos CSS-hez képest.

**Kiegészítô package-k**

### json-server

Segítségével egy teljes fake REST API-t tudunk létrehozni.

### axios

egy Javascript-könyvtár, amely lehetôvé HTTP-kérések küldését a böngészőből, egyszerűen azonnal visszaadja a várt adatobjektumot ( nem kell a HTTP-kérés eredményeit átadnuk a .json() metódusnak) és a HTTP-kéréssel kapcsolatos bármilyen hiba azonnal végrehajtja a .catch() blokkot.

### node-sass

lehetővé teszi az .scss fájlok fordítását css-re
react-router-dom: SPA-k létrehozására szolgál (azaz olyan alkalmazásokhoz, amelyek sok oldalt tartalmaznak, de az oldalt soha nem frissítik, ehelyett a tartalom dinamikus lekérése történik az URL alapján). Vagyis lehetővé teszi a dinamikus útválasztás megvalósítását, oldalak megjelenítését és a felhasználók számára a navigálást egy webes alkalmazásban.

### react-toastify

lehetővé teszi értesítéseket hozzáadását az alkalmazáshoz, egyszerűen beállítható, és könnyen testreszabható

### uuid

egyedi azonosítók véletlenszerű létrehozására szolgál
