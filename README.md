# [Дизайн-система Consta](https://consta.design/) | rcTreeAdapter

Этот адаптер стилизует дерево [rc-tree](https://github.com/react-component/tree) для [дизайн-системы Consta](https://consta.design/).

# Как использовать

## Установите пакет

```sh
# NPM
$ npm install @consta/rc-tree-adapter

# Yarn
$ yarn add @consta/rc-tree-adapter
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](https://consta.design/libs/portal/theme-themeabout).

### Можно использовать компоненты

Например, так:

```js
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { default as RCTree } from 'rc-tree';
import { rcTreeAdapter } from '@consta/rc-tree-adapter/rcTreeAdapter';

const data = [
  {
    key: '0-0',
    title: 'Ветка 1',
    children: [
      {
        key: '0-0-0',
        title: 'Ветка 1-1',
        children: [{ key: '0-0-0-0', title: 'Ветка 1-1-0' }],
      },
      {
        key: '0-0-1',
        title: 'Ветка 1-2',
        children: [
          { key: '0-0-1-0', title: 'Ветка 1-2-0' },
          { key: '0-0-1-1', title: 'Ветка 1-2-1', disableCheckbox: true },
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
];

const App = () => {
  const treeProps = rcTreeAdapter({ size: 's' });

  return (
    <RCTree
      {...treeProps}
      treeData={data}
      defaultExpandAll
      height={100}
      showIcon
    />
  );
};
```

или так:

```js
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { default as RCTree } from 'rc-tree';
import { cnRcTree } from '@consta/rc-tree-adapter/RcTree';

const Example = () => {
  const prefix = cnRcTree(
    {
      size: 's',
    },
    ['CustomTree'],
  );

  return <RCTree treeData={data} prefixCls={prefix} defaultExpandAll />;
};
```

## Документация

[Посмотреть документацию и примеры](https://consta.design/libs/rc-tree-adapter)

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Запуск локального сервера для разработки
$ yarn start

# Сборка пакета
$ yarn build

# Сборка стенда
$ yarn stand:build

# Запуск тестов
$ yarn test
```

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta.design/libs/portal/contributers-code).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется ПАО «Газпром нефть» на условиях открытой [лицензии MIT](https://consta.design/static/licence_mit.pdf).
