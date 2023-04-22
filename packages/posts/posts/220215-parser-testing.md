---
title: Markdown Parser Testing
description: Testing out markdown parser
tags: [test]
updated: 230101
image: https://leosigh.com/wp-content/uploads/2022/08/The-Angel-Next-Door-Spoils-Me-Rotten-Mahiru-Shiina.jpg
---

# Markdown Parser Testing

---

<p class="lead">
This is lead paragraph
</p>

> This is some quote

lorem ipsum for testing my custom blog engine. Powered by SvelteKit and power
of turborepo. All blog posts are statically generated.

When `build` is run in `@daydream-cafe/posts`, it grab all markdown files in `posts/`
pre-render it and convert rendered html into valid Svelte Component.

It then generates neccessary exports.

Posts are styled by `@tailwindcss/typography`.
The code blocks are styled by `highlight.js`'s css.
And KaTeX is styled by thicc katex css with thicc fonts.
Bundle Size is big for blog posts but not a big problem.

My previous markdown renderer are written as vite plugin which suck

- It cannot use "Double Quote" properly without workaround
- Also this \n boi, '\n'

Some random stuff.

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

```c++
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

## NEW! Test Katex

pls work pls

$\int_{0}^{\pi} cosx\ dx$

## NEW!

Svelte should not be scared of {{ wtf }} {{{{{{{{{}}}}}}}}}

[NEXT POST](/post/221229-some-posts)
