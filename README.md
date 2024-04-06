<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Backend
Тестовое задание для Парадокс
Бэкенд: [Nest](https://github.com/nestjs/nest) .

ORM взаимодействия с бд: [typeorm](https://docs.nestjs.com/techniques/database#typeorm-integration)


## Пререквизиты:
Версия Node: 18.10.0
База данных: MySQL-8.0

## Порядок запуска:

1. Настроить базу данных в [app.module.ts](./src/app.module.ts): указать username, password, database
2. Выполнить последовательно команды указанные ниже:

```bash
# Установка зависимостей: 
$ npm install
```

```bash
# Запуск сервера в режиме разработки:
$ npm run start
```

```bash
# Сборка
$ npm run build
```
3. Положить папку [client](client) в папку [dist](dist)
4. Убедиться в том, что база данных запущена
5. Запустить скрипт приложения в терминале в папке [dist](dist):
```bash 
# Запуск приложения
$ node main.js
```
6. Приложение будет доступно по адресу http://localhost:3000/
* Документация по использованию приложения находится в репозитории [frontend](https://github.com/Septant/paradox-test-frontend/blob/master/README.md)

## Support
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
