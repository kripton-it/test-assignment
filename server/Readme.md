### Сервер

Для реализации SPA предоставляется простой веб-сервер.
Всё необходимое для работы сервера находится в директории `server/`

```bash
yarn install
```

or

```bash
npm install
```

Запуск сервера:

```bash
yarn server
```

or

```bash
npm run server
```

Сервер использует `3000` порт.

#### Доступные эндпоинты

#### http://localhost:3000/books

Возвращает список книг с дополнительной информацией

#### http://localhost:3000/books/SLUG

Возвращает информацию о конкретной книге по её SLUG (404 если отсутствует)