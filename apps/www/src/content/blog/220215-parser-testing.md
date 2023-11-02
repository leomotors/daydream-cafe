---
title: Markdown Parser Testing
description: Testing out markdown parser
tags: [test]
updated: 230422
image: /images/blogs/trade-offer.jpg
---

# Markdown Parser Testing

---

<p class="lead">
This is lead paragraph
</p>

> This is some quote

lorem ipsum for testing my custom blog engine. Powered by SvelteKit and power
of turborepo. All blog posts are statically generated/rendered at build time.

astro

Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

![This is a placeholder image description](/placeholder-social.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

- List item
- Another item
- And another item

#### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

## this is h2

hello

- list
- bruh
- hi

[rickroll](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## ok

```js
console.log("Hello World");
```

```tsx
export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
```

```bf
-+-+[>>>>..]
```

```cpp
#include <iostream>
// bruh don't do this
using namespace std;

int main() {
    std::cout << "Hello World!\n";
}
```

### Weight test

_italic_

**bold**

**_bold italic_**

### Backtick Test

`hello`

> quotes

yo

```ts
const a = `${bruh} yes`;
```

### some table

| Day | Stars |
| --- | ----- |
| 1   | 🌟🌟  |
| 2   | 🌟🌟  |
| 3   | 🌟🌟  |
| 4   | 🌟🌟  |
| 5   | 🌟🌟  |
| 6   | table |

## bruh

an really long sentences Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure a harum libero consequuntur culpa eveniet accusantium laudantium quia, quod quos perspiciatis, quas commodi modi eos, ab quis. Mollitia odit assumenda molestias praesentium maxime fuga ut temporibus vero voluptatibus quisquam ipsum facilis quam officia aliquid cum, iste, error quae ab. Excepturi, ab? Reprehenderit, praesentium laboriosam? Suscipit quam molestiae tempore expedita vitae officia minima nesciunt, omnis recusandae assumenda autem repellendus libero optio, repudiandae voluptates harum ducimus nostrum odio, a quia illo sunt eaque. Quibusdam molestiae, deserunt eaque eligendi reiciendis dolorum quo, est eius dolor nemo voluptatem animi minus repellendus. Deserunt, consequuntur reiciendis!

## Test Katex

pls work pls

$\int_{0}^{\pi} cosx\ dx$

## bracket test

broken {{{{{{}}}}}} {{{ }{{}{{
