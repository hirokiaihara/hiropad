require 'rails_helper'

describe Recipe, type: :model do
  describe '#create' do

    context 'recipeが保存できる場合' do
      it 'titleとtop_imageがあれば保存できること' do
        expect(build(:recipe)).to be_valid
      end
    end
    
    context 'recipeが保存できない場合' do
      it 'titileとtop_imageがないと保存できない' do
        recipe = build(:recipe, title: nil, top_image: nil)
        recipe.valid?
        expect(recipe.errors[:title]).to include('を入力してください')
      end

      it 'titleがないと保存できない' do
        recipe = build(:recipe, title: nil)
        recipe.valid?
        expect(recipe.errors[:title]).to include("を入力してください")
      end

      it 'top_imageがないと保存できない' do
        recipe = build(:recipe, top_image: nil)
        recipe.valid?
        expect(recipe.errors[:top_image]).to include("を入力してください")
      end

      it 'introductionが61字以上で保存できない' do
        recipe = build(:recipe, introduction: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        recipe.valid?
        expect(recipe.errors[:introduction]).to include("は60文字以内で入力してください")  
      end

      it 'pointは121字以上で保存できない' do
        recipe = build(:recipe, point: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        recipe.valid?
        expect(recipe.errors[:point]).to include("は120文字以内で入力してください")
      end

      it 'backgroundは121字以上で保存できない' do
        recipe = build(:recipe, background: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        recipe.valid?
        expect(recipe.errors[:background]).to include("は120文字以内で入力してください")
      end
    end

  end
end