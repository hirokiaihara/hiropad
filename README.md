# アプリ概要
## 毎日の料理を楽しくするレシピ検索アプリです
![hiropad](https://i.gyazo.com/8861818eb3eeec3e6099d76338035c0f.jpg)
## 🌐address 
### 3.113.152.91

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

