<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Backend
Тестовое задание для Парадокс.
Бэкенд: [Nest](https://github.com/nestjs/nest) .

ORM взаимодействия с бд: [typeorm](https://docs.nestjs.com/techniques/database#typeorm-integration).


## Необходимые условия:
Версия Node: 18.10.0 <br> База данных: MySQL-8.0 - подготовленная к взаимодействию

## Порядок запуска:

1. Настроить базу данных в [app.module.ts](./src/app.module.ts): указать username, password, database.
2. Выполнить последовательно команды указанные ниже:

```bash
# Установка зависимостей: 
$ npm install
```

```bash
# Сборка
$ npm run build
```
3. Положить папку [client](client) в папку [dist](dist).
4. Убедиться в том, что база данных запущена.
* Для тестирования на windows использовались: [dbforge Studio for mySQL](http://www.devart.com/ru/dbforge/mysql/studio), а также [OpenServer](https://ospanel.io/).
5. Запустить скрипт приложения в терминале в папке [dist](dist):
```bash 
# Запуск приложения
$ node main.js
```
6. Приложение будет доступно по адресу http://localhost:3000/
* Документация по использованию приложения находится в репозитории [frontend](https://github.com/Septant/paradox-test-frontend/blob/master/README.md).


## Запуск в режиме разработки
* База данных должна быть запущена
```bash
# Запуск сервера в режиме разработки:
$ npm run start
```

## Запуск приложения на примере на Windows 10
* Установить [OpenServer](https://ospanel.io/)
* В трее кликнуть по иконке OpenServer, перейти в раздел "Настройки -> Модули". Выбрать MySQL-8.0-Win10, HTTP: Apache_2.4-PHP_7.0-7.1. Сохранить.
* Запустить
* Выполнить пункты 1-6 раздела `Порядок запуска`

## Лицензирование

Nest распространяется по лицензии [MIT](LICENSE).
