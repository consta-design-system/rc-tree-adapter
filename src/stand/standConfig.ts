import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta rc-tree-adapter',
  id: 'rc-tree-adapter',
  groups: [
    {
      title: 'Документация',
      id: 'docs',
      initialOpen: true,
    },
    {
      title: 'Миксины',
      id: 'mixs',
      initialOpen: true,
    },
    {
      title: 'Адаптеры',
      id: 'adapters',
      view: 'card',
      initialOpen: true,
    },
  ],
  group: 'Адаптеры',
  image,
  description:
    'Адаптер для дерева из библиотеки rc-tree. Подходит для создания иерархических структур.',
});
