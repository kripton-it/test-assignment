## 1. SPA

На основе React, разработать SPA для отображения информации с сервера (описание ниже) и содержащее следующие страницы:


### Список книг

Отображает все книги возвращаемые с API:
- Краткая информация должна обрезать до 200 символов.
- Название книги и изображение должны быть ссылками ведущими на страницу книги
- Состояние голосования должно отображаться, но реализовавывать функционал голосования не нужно.

### Страница книги

Отображает информации об одной книги, необходимо выделить изображение книги и отобразить полное описание.

Функционал голосования реализовывать **НЕ** нужно, интерфейс должен отображать только голосовали за книгу или нет.

**Важная информация:**
- Добавить покрытие тестами на своё усмотрение;
- Можно использовать Typescript;
- Необходимо использовать препроцессоры или css-in-js библиотеки
- Все необходимые зависимости должны устанавливаться с помощью команды `yarn` или `npm install`. Приложение должно запускаться с помощью `yarn start` или `npm start`.

#### Дополнительно

- Реализовать текстовый поиск по названию и описанию книги
- Добавить пагинацию

### Сервер

Для реализации SPA предоставляется простой веб-сервер.
Всё необходимое для работы сервера находится в директории `server/`

```bash
yarn install
```

или

```bash
npm install
```

Запуск сервера:

```bash
yarn server
```

или

```bash
npm run server
```

Сервер использует `3000` порт.

#### Доступные эндпоинты

#### http://localhost:3000/books

Возвращает список книг с дополнительной информацией

#### http://localhost:3000/books/SLUG

Возвращает информацию о конкретной книге по её SLUG (404 если отсутствует)
