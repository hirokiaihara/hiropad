FactoryBot.define do
  factory :recipe do
    title {Faker::Lorem.sentence}
    top_image {File.open("#{Rails.root}/public/images/fruits.jpg")}
    how_many         {"2人分"}
    introduction     {Faker::Lorem.sentence}
    point            {Faker::Lorem.sentence}
    background       {Faker::Lorem.sentence}
    user
  end
end