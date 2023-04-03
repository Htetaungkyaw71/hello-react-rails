Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"
  namespace :api do
    resources :greetings, only:[:index] do
    end
  end
end