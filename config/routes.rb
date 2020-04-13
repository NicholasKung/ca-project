Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/", to: 'homes#index'
  get "/applicants", to: 'homes#index'
  get "/applicants/new", to: 'homes#index'

namespace :api do
    namespace :v1 do
      resources :applicants, only: [:index, :create, :destroy] do
      end
    end
  end
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
