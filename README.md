Task Generasi GIGIH 3 - Simple Spotify Playlist Server

Continuing previous session homework with this additional rule:
1. Make playlist as a model
2. Track song play count in the playlist
3. Add feature to Get list of songs to be sorted by most played


### Konfigurasi

Berikut ini adalah cara melakukan konfigurasi:

1. Clone repository `https://github.com/darul-eng/gg3-module-1.3.git` ini ke mesin lokal anda.
2. Buat file .env dari duplikasi file .env_example. Sesuaikan konfigurasi dengan kebutuhan anda.
3. run `npm install`  to installing package
4. run `npm start` to start app with nodemon

### Endpoints

Aplikasi ini memiliki endpoint sebagai berikut:

- `GET /api/song`: Get All Song without Query Parameter or with Query Paramater
- `POST /api/song`: Add New Song
- `GET /api/song/:id`: Get Detail of Song
- `POST /api/song/:id/play`: PLaying Song
- `POST /api/playlist`: Create New Playlist
- `GET /api/playlist/:id/play-count`: Get Song Play Count in Playlist
