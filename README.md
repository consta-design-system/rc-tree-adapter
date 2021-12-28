# [Дизайн-система Consta](http://consta.gazprom-neft.ru/) | useRcTreeAdapter

Это компонент Tree для дизайн-системы Consta: дерево, подходит для создания иерархических структур. Компонент взят из библиотеки [rc-tree](https://github.com/react-component/tree) и адаптирован для [дизайн-системы Consta](https://consta.gazprom-neft.ru/).

# Как использовать

## Установите пакет

```sh
# NPM
$ npm install @consta/rc-tree-adapter

# Yarn
$ yarn add @consta/rc-tree-adapter
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](https://consta-uikit.vercel.app/?path=/docs/components-theme--playground).

### Можно использовать компоненты

Например, так:

```js
import { Theme, presetGpnDefault } from '@consta/uikit/Theme'
import { default as RCTree } from 'rc-tree'
import { useRcTreeAdapter } from '@consta/rc-tree-adapter/useRcTreeAdapter'

const data = [
  {
    key: '0-0',
    title: 'Ветка 1',
    children: [
      { key: '0-0-0', title: 'Ветка 1-1', children: [{ key: '0-0-0-0', title: 'Ветка 1-1-0' }] },
      {
        key: '0-0-1',
        title: 'Ветка 1-2',
        children: [
          { key: '0-0-1-0', title: 'Ветка 1-2-0', disableCheckbox: true },
          { key: '0-0-1-1', title: 'Ветка 1-2-1' },
          { key: '0-0-1-2', title: 'Ветка 1-2-2' },
          { key: '0-0-1-3', title: 'Ветка 1-2-3' },
          { key: '0-0-1-4', title: 'Ветка 1-2-4' },
          { key: '0-0-1-5', title: 'Ветка 1-2-5' },
          { key: '0-0-1-6', title: 'Ветка 1-2-6' },
          { key: '0-0-1-7', title: 'Ветка 1-2-7' },
          { key: '0-0-1-8', title: 'Ветка 1-2-8' },
          { key: '0-0-1-9', title: 'Ветка 1-2-9' },
        ],
      },
    ],
  },
]

const App = () => {
  const treeProps = useRcTreeAdapter({ treeData: data, defaultExpandAll: true })

  return <RCTree {...treeProps} />
}
```

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn, необходимые версии можно узнать в файле [package.json](./package.json) в блоке **engines**.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Сборка и старт Storybook
$ yarn start

# Сборка для production
$ yarn build

# Линтинг всех файлов
$ yarn lint

# Форматирование всех файлов prettier
$ yarn format

# Запуск юнит-тестов
$ yarn unit

# Запуск юнит-тестов, тестирование TS, линтинг файлов
$ yarn test
```

## Документация

[Посмотреть документацию и примеры](https://consta-tree.vercel.app/)

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta-uikit.vercel.app/?path=/docs/common-develop-contributors--page).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется ПАО «Газпром нефть» на условиях открытой [лицензии MIT](https://consta.gazprom-neft.ru/static/licence_mit.pdf).
