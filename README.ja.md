# fu

[
![NPM Version](https://img.shields.io/npm/v/fu.svg)
](https://www.npmjs.com/package/fu)
[
![ライセンス](https://img.shields.io/npm/l/fu.svg)
](LICENSE)

JavaScript向けの、小型で高速な関数型ライブラリであり、正格評価（非遅延評価）に特化しています。軽量かつ依存関係ゼロになるよう設計されています。

## 特徴

- **軽量**: 最小化（Minify）されたバージョンはわずか数キロバイトです。
- **高速**: 正格評価（非遅延評価）に最適化されています。
- **関数型**: 一般的な関数型ユーティリティ一式を提供します。
- **カリー化**: ほとんどの関数は自動的にカリー化されており、部分適用が可能です。
- **依存関係ゼロ**: 外部依存関係のないプレーンなJavaScriptです。

## インストールと使い方

### Deno / ブラウザ (ESM)

CDNから直接 `fu` をインポートします。

```javascript
import fu from "https://code4fukui.github.io/fu/fu.js";

const numbers = [1, 2, 3, 4, 5];

// すべての数値が10未満かどうかを確認
const allUnder10 = fu.all(n => n < 10, numbers);
console.log(allUnder10); // true

// 最初の3つの要素を取得する関数を作成
const take3 = fu.take(3);
console.log(take3(numbers)); // [1, 2, 3]
```

### Node.js (NPM)

npmからパッケージをインストールします:

```bash
npm install fu
```

その後、プロジェクトにインポートします:

```javascript
import fu from 'fu';
// またはCommonJSの場合:
// const fu = require('fu');

const users = [{ name: 'Dog', age: 2 }, { name: 'Cat', age: 4 }];

// 各オブジェクトから 'name' プロパティを抽出
const names = fu.map(fu.property('name'), users);
console.log(names); // ['Dog', 'Cat']
```

## APIリファレンス

リストを最後の引数として受け取るすべての関数はカリー化されています。

---

### **`all(predicate, list)`**
`list` 内のすべての要素が `predicate` 関数を満たすかどうかを確認します。

```javascript
fu.all(n => typeof n
```
