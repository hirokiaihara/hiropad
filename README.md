# アプリ概要
## 毎日の料理を楽しくするレシピ検索アプリです
![hiropad](https://i.gyazo.com/9af0df65defae354e7ff5b5f31fee6e5.jpg)
## 🌐 address 
### **https://3.113.152.91** 
## 機能
- レシピ投稿・・・・・・複数枚の画像をプレビューで確認後投稿することができます。
- レシピ検索・・・・・・料理名と食材名でレシピを検索します。
- レシピの詳細表示
- レシピの編集・削除
- つくれぽ機能・・・・他のユーザーの投稿に対して写真付きでコメントすることが出来ます。
- ランキング機能・・・つくれぽの多いレシピをランキングで表示します。
- マイレシピ機能・・・気になったレシピを保存することが出来ます。
- ユーザー登録・ログイン・ログアウト機能
- マイページ機能・・・自分のレシピ・つくれぽを一覧表示します。自分のアイコンと紹介文を設定することが出来ます。


# データベース設計
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|year|integer|null: false|
|month|integer|null: false|
|day|integer|null: false|
|encrypted_password|string|null: false|
|user_image|string||
|users_comment|text||

### Association
- has_many :recipes
- has_many :reports

## recipesテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|top_image|string|null: false|
|how_many|string|null: false|
|point|text||
|background|text||
|user_id|integer|null: false|

### Association
- has_many :makes
- has_many :foods
- has_many :reports
- belongs_to :user

## makesテーブル

|Column|Type|Options|
|------|----|-------|
|image|string||
|how_make|text|null: false|
|recipe_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :recipe

## foodsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|amount|string|null: false|
|recipe_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :recipe

## reportsテーブル

|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|comment|text|null: false|
|recipe_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false|

### Association
- belongs_to :recipe
- belongs_to :user

## myrecipesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|intrger|null: false|
|recipe_id|integer|null: false|

### Association
- belongs_to :recipe
- belongs_to :user

