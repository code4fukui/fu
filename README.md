# fu

the fastest eager-eval functional library for JavaScript.

## Usage

```JavaScript
import fu from "https://code4fukui.github.io/fu/fu.js";
const a = [1, 2, 3];
console.log(fu.all(n => typeof n == "number", a));
```

## API

```
all
and
any
comp
compact
concat
concatMap
curry
drop
dropWhile
elem
filter
flip
foldl
head
id
init
intoArray
intoObject
last
map
max
maybe
merge
min
nil
or
property
range
scanl
seq
splitAt
tail
take
takeWhile
zipWith
```

## todo

- test
