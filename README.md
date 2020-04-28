# アプリ概要 *Wht's hiropad?*
## 毎日の料理を楽しくするレシピ検索アプリです
![hiropad](https://i.gyazo.com/9af0df65defae354e7ff5b5f31fee6e5.jpg)
## 🌐 address 
### **https://3.113.152.91** 
- 専用アカウントが埋め込んであります。
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
## 使用技術
### 言語・フレームワーク・ライブラリ
- Ruby on Rails
- HTML, CSS
- Java Script
- jQuery
### 環境
- インフラ
  - AWS EC2
  - Capistranoによる自動デプロイ
- サーバー
  - Unicorn
  - Nginx
- ストレージ
  - S3
### ツール
- Github(チーム開発を想定し、各タスクごとにブランチとプルリクエストを作成)
## このアプリを作成した理由 *Why?* 
**エンジニアとしての適性を企業へアピール出来るサービスを最短で作成するため**
- 既存のサービスを参考にすることにより、一からオリジナルな機能を開発するよりも、UI/UXの整ったアプリをスピーディに開発することが優先と考えたからです。
- また、そのためにはCRUD + ログイン/ログアウト機能は最低限実装するべきだと思ったからです。
## Responsive Design
![shotsnapp-1588079886 821](https://user-images.githubusercontent.com/61179665/80491915-4c876080-899e-11ea-862b-e7af99b9a048.png)
## データベース ER図
![DB](https://i.gyazo.com/d3c96e3361a78d681b05194f0ebc336a.png)

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
|introduction|text||
|how_many|string||
|point|text||
|background|text||
|user_id|references|foreign_key: true|

### Association
- has_many :makes
- has_many :foods
- has_many :reports
- belongs_to :user

## makesテーブル

|Column|Type|Options|
|------|----|-------|
|image|string||
|how_make|text||
|recipe_id|references|foreign_key: true|

### Association
- belongs_to :recipe

## foodsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|amount|string|null: false|
|recipe_id|references|foreign_key: true|

### Association
- belongs_to :recipe

## reportsテーブル

|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|comment|text|null: false|
|recipe_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :recipe
- belongs_to :user

## myrecipesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true|
|recipe_id|references|foreign_key: true|

### Association
- belongs_to :recipe
- belongs_to :user

