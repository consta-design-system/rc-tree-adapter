import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta rc-tree-adapter',
  id: 'rc-tree-adapter',
  groups: [
    {
      title: 'Документация',
      id: 'docs',
    },
    {
      title: 'Миксины',
      id: 'mixs',
    },
    {
      title: 'Адаптеры',
      id: 'adapters',
      view: 'card',
    },
  ],
  group: 'Адаптеры',
  image,
  description:
    'Адаптер для дерева из библиотеки rc-tree. Подходит для создания иерархических структур.',
});
