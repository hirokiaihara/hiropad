FactoryBot.define do
  
  factory :user do
    name          {"abe"}
    email         {"kkk@gmail.com"}
    password      {'00000000'}
    password_confirmation  {'00000000'}
    year           {'0'}
    month           {'0'}
    day             {'0'}
  end
end