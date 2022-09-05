import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

const groups = [
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
  },
] as const;

export const { createStand } = createConfig({
  title: 'Consta rc-tree-adapter',
  id: 'rc-tree-adapter',
  groups,
  group: 'Адаптеры',
  image,
  description:
    'Адаптер для дерева из библиотеки rc-tree. Подходит для создания иерархических структур.',
});
