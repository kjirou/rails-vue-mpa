class ArticlesController < ApplicationController
  def index
    render_frontend(page_data: { foo: 'This is articles#index.'})
  end

  def new
    render_frontend
  end
end
