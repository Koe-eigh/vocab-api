# Vocab API

兵庫県教育委員会が提供する英単語を取得できるRESTful APIです。

## APIエンドポイント

- 開発環境host: http://localhost:3000
- 本番環境host: 停止中

### 全件取得

- メソッド: GET
- パス: /words
- レスポンス: 英単語の配列

```json
[
  {
    "id": 1,
    "word": "apple",
    "type": "名",
    "meaning": "りんご",
    "example": "I ate an apple."
  },
  ...
]
```

### 指定IDの取得

- メソッド: GET
- パス: /words/:id
- レスポンス: 英単語のオブジェクト

```json
{
  "id": 1,
  "word": "apple",
  "type": "名",
  "meaning": "りんご",
  "example": "I ate an apple."
}
```

## 開発者向け

### セットアップ

```bash
make setup
```

### 開発サーバーの起動

```bash
make up
```

### テスト

```bash
make test
```
