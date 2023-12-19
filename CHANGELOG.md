# Changelog

## v3.0.0 (19/12/2023)
Самое важное:
- Сторонние зависимости перенесены в `peerDependencies`. Установить их вы сможете самостоятельно, полный список доступен [здесь](https://github.com/consta-design-system/rc-tree-adapter/blob/master/package.json) 
- Добавлена поддержка `@consta/uikit` `v5.0.0`

---

- [chore: update uikit version (#41)](https://github.com/consta-design-system/rc-tree-adapter/commit/0df71fb76d53a9405c2d1ec62467af15348e4154) - [@gizeasy](https://github.com/gizeasy)
- [chore(utils): added status classNames (#40)](https://github.com/consta-design-system/rc-tree-adapter/commit/bc746cdd9ee8e6eee437e84ad875d849367b6072) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v2.1.1 (07/10/2023)
Самое важное:

- Исправлено поведение дефолтного `switcherIcon` при разворачивании дерева
- Доработаны стили для узла дерева

---

- [fix(rcTreeAdapter): fixed icon behavior and tree node styles (#39)](https://github.com/consta-design-system/rc-tree-adapter/commit/e74a9ed63b625e2afdca35082c768b25afba4a97) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v2.1.0 (06/10/2023)
Самое важное:

- Убрали свойство `withNestedLines`, теперь отрисовка линий наследования будет производиться через свойство `showLine` в компоненте `rc-tree`
- Переписаны стили, теперь маски иконок из миксина не конфликтуют с пользовательскими иконками

---

- [chore(rc-tree): update version (#38)](https://github.com/consta-design-system/rc-tree-adapter/commit/ad6fb9f6fb7009fbd69e3a057f6c0ecec5edb551) - [@N1MBER](https://github.com/N1MBER)
- [refactor(RcTreeAdapter): rewrite styles / types and docs (#37)](https://github.com/consta-design-system/rc-tree-adapter/commit/911f1a95ae77a96c8ca5d5c54afb2774fdd90a17) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v2.0.3 (31/08/2023)
Самое важное:
- Добавили модификацию `withNestedLines`

---

- [feat(rcTreeAdapter): add prop withNestedLines (#36)](https://github.com/consta-design-system/rc-tree-adapter/commit/db38b93e87004b689223cf5877e6c246c039821d) - [@N1MBER](https://github.com/N1MBER)
- [chore: edit deploy config and codeowners (#35)](https://github.com/consta-design-system/rc-tree-adapter/commit/b99eb7532287220e9de256202cd9f5a28ae848f4) - [@gizeasy](https://github.com/gizeasy)
- [docs(standConfig): add figmaUrl (#34)](https://github.com/consta-design-system/rc-tree-adapter/commit/dd526962f758997adc232dcdf0f058aa9dd7798f) - [@gizeasy](https://github.com/gizeasy)
- [docs(standConfig): add figmaUrl (#34)](https://github.com/consta-design-system/rc-tree-adapter/commit/38d7b736ea248505e087c4886e454174588f7268) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v2.0.2 (23/05/2023)
Запускать локальный сервер разработки и сборку пакетов теперь можно и на ОС Windows.

---

- [chore: configure build for windows (#33)](https://github.com/consta-design-system/rc-tree-adapter/commit/c2d2e4c57c4d5ff3c2e8d316b1807545c984a10c) - [@gizeasy](https://github.com/gizeasy)
- [docs(rc-tree-adapter): add aliases (#32)](https://github.com/consta-design-system/rc-tree-adapter/commit/95aa272c5c0c63ce01e575dacd561660dcd7eadb) - [@N1MBER](https://github.com/N1MBER)
- [chore: update @consta/stand](https://github.com/consta-design-system/rc-tree-adapter/commit/c7499074523285ca171a8f184d84979290d0487b) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v2.0.1 (30/11/2022)
- [fix(prefix): add prefix for class names (#30)](https://github.com/consta-design-system/rc-tree-adapter/commit/a103f7060ebc1ae3bdfb9d786415fd1373a7ccc0) - [@N1MBER](https://github.com/N1MBER)
- [docs(portal): readme, stand, version (#29)](https://github.com/consta-design-system/rc-tree-adapter/commit/ff991842a75f7c6f15692ebf6f8d5e5bce06c3e9) - [@arhayka](https://github.com/arhayka)
- [docs: readme, links, and menu (#28)](https://github.com/consta-design-system/rc-tree-adapter/commit/733e0a80fd6cd9b9df9f530a9a01e5bb817d15aa) - [@arhayka](https://github.com/arhayka)
- [chore(deps): update @consta/uikit](https://github.com/consta-design-system/rc-tree-adapter/commit/6d77975de15ca6a2a8780d914c6f708539412b01) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v2.0.0 (29/09/2022)
- [chore(stand): new stand and new builder (#21)](https://github.com/consta-design-system/rc-tree-adapter/commit/55c07cdffdf5aa8def4f65b12b955efd73d11b84) - [@gizeasy](https://github.com/gizeasy)
- [chore(stand): add automation publish stand](https://github.com/consta-design-system/rc-tree-adapter/commit/c4ef67888b448c68a4bfea7fc71761a6f9f6ddff) - [@gizeasy](https://github.com/gizeasy)
- [chore(stand): add automation publish stand](https://github.com/consta-design-system/rc-tree-adapter/commit/1c9be2751bc6f27ed6d5a5612c31f1d4ffe94062) - [@gizeasy](https://github.com/gizeasy)
- [chore(stand): add automation publish stand](https://github.com/consta-design-system/rc-tree-adapter/commit/4d853bf5e31d98886093cb216b04d7b806fdbdcf) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v1.0.8 (22/06/2022)
- [feat(RcTree): add styles for selected node (#20)](https://github.com/consta-design-system/rc-tree-adapter/commit/866279f72276bd3c5d871550f16ab4bf929dbe07) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v1.0.7 (09/06/2022)
Самое главное:
* Добавлены примеры создания кастомных контролов для элементов дерева

---

- [docs(RcTree): add guide for custom controls (#19)](https://github.com/consta-design-system/rc-tree-adapter/commit/1874933b154710f49024a5558c755717a3a6f54e) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v1.0.6 (18/05/2022)
Самое главное:
- Исправлена проблема с позиционированием галочки в чекбоксе, а также цвета иконок, при переключении темы

---

- [fix(RcTree): fix arrow position and icons colors (#18)](https://github.com/consta-design-system/rc-tree-adapter/commit/6c94abe2276da9f6b659e2259d47b9e3baad3697) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v1.0.5 (28/04/2022)
- [chore(deploy): update config](https://github.com/consta-design-system/rc-tree-adapter/commit/16a71a6cd8e1fb0044dd7ccba0aa571f98dba4ca) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v1.0.4 (20/04/2022)
- [docs(global): replace url (#17)](https://github.com/consta-design-system/rc-tree-adapter/commit/9d7687d2d405de0f6442256400c35b351016c921) - [@arhayka](https://github.com/arhayka)
- [docs: change links to vercel (#16)](https://github.com/consta-design-system/rc-tree-adapter/commit/297b04b2ab1add45c8404b08401a016bd68058c1) - [@arhayka](https://github.com/arhayka)
- [chore(deploy): add deploy automatization (#15)](https://github.com/consta-design-system/rc-tree-adapter/commit/8e65a2e628b9b0fc20a2ae08c63349a020039d19) - [@gizeasy](https://github.com/gizeasy)
- [fix(Favicon): fix favicon (#14)](https://github.com/consta-design-system/rc-tree-adapter/commit/c7d36d857765d2ce3b3fbe123c24e0b3963937ee) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v1.0.3 (16/02/2022)
- [fix(rcTreeAdapter): fix mistake with unshowing loading icon (#13)](https://github.com/consta-design-system/rc-tree-adapter/commit/77f37156e1005e8bbe1e1422aaa1c412df84e2f4) - [@N1MBER](https://github.com/N1MBER)
- [docs(common): edit links to github (#12)](https://github.com/consta-design-system/rc-tree-adapter/commit/33ff21f4232e22b569fd04a8c5a7591591e7868e) - [@arhayka](https://github.com/arhayka)

--------------------

## v1.0.2 (26/01/2022)
Готов адаптер для дерева из библиотеки `rc-tree` — добавили нему стилизацию из `Consta`. Можно использовать вместе с другими нашими библиотеками.

---

- [docs(Logo): update logo (#11)](https://github.com/consta-design-system/rc-tree-adapter/commit/1d418d9540cdbc697260c50a6ad6e97f65fb32d5) - [@N1MBER](https://github.com/N1MBER)
- [chore(workflows): add telegramBot](https://github.com/consta-design-system/rc-tree-adapter/commit/6585e1a5fafd8e0fc65ceb992acaadfa0f596f00) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v1.0.1 (21/01/2022)
- [fix(Checkbox): fix arrow layout (#10)](https://github.com/consta-design-system/rc-tree-adapter/commit/94e452fd22c6ddb6360f64a2c77e04ebb57fcf73) - [@N1MBER](https://github.com/N1MBER)
- [docs(Docs): update examples on README and also update logo (#9)](https://github.com/consta-design-system/rc-tree-adapter/commit/239c15f14af4ebdb9229c545396bf8297472c711) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v1.0.0 (29/12/2021)
- [docs(rcTreeAdapter): edit docs (#8)](https://github.com/gazprom-neft/rc-tree-adapter/commit/1cf4521188e745cc043e9d2034e2bbac9bd342da) - [@arhayka](https://github.com/arhayka)
- [feat(Tree): add thematization (#6)](https://github.com/gazprom-neft/rc-tree-adapter/commit/738d2d264616c7fea5f466fcf55393387b819914) - [@N1MBER](https://github.com/N1MBER)
- [docs(Logo): add new logo for lib (#7)](https://github.com/gazprom-neft/rc-tree-adapter/commit/c8c3e7833b4f336943c70dbd1382f9bcb41d10c4) - [@N1MBER](https://github.com/N1MBER)
- [chore(deps): edit deps](https://github.com/gazprom-neft/rc-tree-adapter/commit/419072a71ed1747a5a484efaa849be6c491314e6) - [@gizeasy](https://github.com/gizeasy)
- [docs(common): remove docs for developers, fix misprint](https://github.com/gazprom-neft/rc-tree-adapter/commit/d7d3bc9e97a6395edcdf1f5e40aa565cac5c126e) - [@arhayka](https://github.com/arhayka)

--------------------

## v0.1.2 (21/10/2021)
- [feat(Tree): add default styles and change props (#5)](https://github.com/gazprom-neft/tree/commit/23c915e754e00f0afab809a806c4a018dbdeb046) - [@N1MBER](https://github.com/N1MBER)
- [docs(Link): fix link](https://github.com/gazprom-neft/tree/commit/b4dfd82787293b45ef2446f6940d48cacb1bd851) - [@N1MBER](https://github.com/N1MBER)
- [docs(Tree): fix styles and data for example](https://github.com/gazprom-neft/tree/commit/c6d10a41e00fb7a43482dfa20d3d23e5e4f1150e) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v0.1.1 (14/10/2021)
- [chore(global): edit settings](https://github.com/gazprom-neft/tree/commit/81f99436aef1c095b3b2c13f53fb7d59837cec88) - [@gizeasy](https://github.com/gizeasy)
- [docs(common): edit common page (#4)](https://github.com/gazprom-neft/tree/commit/4b083116fdfb6a974241f05d8e5f706c75dd12e3) - [@arhayka](https://github.com/arhayka)
- [docs(readme): add readme (#3)](https://github.com/gazprom-neft/tree/commit/de8c56950b63781a797aa536dfbf0bdd50477d25) - [@arhayka](https://github.com/arhayka)
- [docs(Tree): add docs (#2)](https://github.com/gazprom-neft/tree/commit/59c98539b2a33c8f38fce7db089187844c4fd3c4) - [@arhayka](https://github.com/arhayka)
- [feat(Tree): add new component](https://github.com/gazprom-neft/tree/commit/1ce726e56c8b765ac464d6fc3b12b87eccc39a34) - [@N1MBER](https://github.com/N1MBER)
- [chore(Tree): change package.json and start page](https://github.com/gazprom-neft/tree/commit/00644d1996cbc992a60b8092b965ad0faa535a28) - [@N1MBER](https://github.com/N1MBER)
- [chore(Tree): add base files for new library](https://github.com/gazprom-neft/tree/commit/1d4e5d4fd88b184621bda94450f929e1e9c77089) - [@N1MBER](https://github.com/N1MBER)
- [Initial commit](https://github.com/gazprom-neft/tree/commit/9c8a08668b694640475eb669e950d6530f7b0fac) - [@gizeasy](https://github.com/gizeasy)
