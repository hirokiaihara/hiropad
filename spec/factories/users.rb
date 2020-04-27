FactoryBot.define do
  
  factory :user do
    password = Faker::Internet.password(min_length: 6)
    name {Faker::Name.last_name}
    email {Faker::Internet.free_email}
    password {password}
    password_confirmation {password}
    year           {'0'}
    month           {'0'}
    day             {'0'}
  end
end