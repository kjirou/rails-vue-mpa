class ArticlesController < ApplicationController
  def index
    render_frontend(page_data: {
      foo: 'This is articles#index.',
      bar: {
        x: 12,
        y: 34,
      },
    })
  end

  def new
    render_frontend(page_data: {
      a: 'This is articles#new.',
      b: {
        x: 123,
        y: 456,
      },
    })
  end

  def create
    render_frontend()
  end
end
