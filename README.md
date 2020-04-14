# データベース設計
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|year|integer|null: false|
|month|integer|null: false|
|day|integer|null: false|
|encrypted_password|string|null: false|
|password_confirmation|string|null: false|
|user_image|string||

### Association
- has_many :recipes
- has_many :reports

## recipesテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|top_image|string|null: false|
|point|text||
|background|text||

### Association
- has_many :processes
- has_many :ingredients
- has_many :reports
- belongs_to :user

## processesテーブル

|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|how|text|null: false|
|recipe_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :recipe

## ingredientsテーブル

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