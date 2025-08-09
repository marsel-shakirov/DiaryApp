# Preax - DiaryApp

Это решение задачи на [спринт DiaryApp на Preax](https://preax.ru 'Preax'). Платформа Preax помогает улучшить навыки программирования путем создания реалистичных проектов.

Task 1: Marsel, marsel-shakirov

- [Контакты](#контакты)
- [Установка приложения](#установка-приложения)
- [Мой процесс](#мой-процесс)
- [Заметки](#Заметки)
- [Плагины](#Плагины)

## Контакты

- Name - Marsel
- Nickname preax - marsel-shakirov
- Telegram - @MarselShakirov
- GitHub - [Github](https://github.com/marsel-shakirov)

## Установка приложения

1. открыть терминал
2. установить зависимости командой `npm i`
3. развернуть проект в режиме разработчика `npm run dev`

## Мой процесс

### Реализован на

- [React](https://reactjs.org/) - JS library
- [FSD](https://github.com/feature-sliced) - Feature-Sliced Design (FSD) is an architectural methodology
- [TypeScript](https://www.typescriptlang.org) - TypeScript is JavaScript with syntax for types.

## Заметки

1. простая реализация clsx которая позволяет вам передавать имена классов в виде строк или объектов с условиями, а на выходе получать готовый css module

```jsx
		className={clsx(styles, 'button', { // обязательный первый параметр
			active: isActive,
			disabled: isDisabled, // Класс 'disabled' будет применен, если isDisabled === true
		})}
```

## Плагины

Есть плагины Prettier для сортировки импортов и css правил

- [Prettier plugin](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports) - плагин для сортировки объявлений импорта по указанному порядку регулярного выражения.
- [CSS Order Prettier Plugin](https://www.npmjs.com/package/prettier-plugin-css-order) - Плагин Prettier для сортировки объявлений CSS, SCSS или Less по именам их свойств.
