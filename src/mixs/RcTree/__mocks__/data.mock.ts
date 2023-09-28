export type Node = {
  key: string;
  title: string;
  visible?: boolean;
  children?: Node[];
  disableCheckbox?: boolean;
};

export const data: Node[] = [
  {
    key: '0-0',
    title: 'Ветка 1',
    children: [
      {
        key: '0-0-0',
        title: 'Ветка 1-1',
        children: [
          {
            key: '0-0-0-0',
            title: 'Ветка 1-1-0',
          },
        ],
      },
      {
        key: '0-0-1',
        title: 'Ветка 1-2',
        children: [
          {
            key: '0-0-1-0',
            title: 'Ветка 1-2-0',
            disableCheckbox: true,
          },
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
];
