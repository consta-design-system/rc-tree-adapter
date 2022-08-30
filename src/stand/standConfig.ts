import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

const groups = [
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
    '[тут описание что это такое] Ультра топчик библиотеки с пацанскими кнопками и графиками, качай.',
});
