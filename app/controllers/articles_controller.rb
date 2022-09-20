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
    if params[:foo] != nil && params[:foo] != ''
      render_frontend()
    else
      render_frontend(page_name: 'new', page_data: {
        a: 'This is articles#create, but renders articles#new.',
        b: {
          x: 123,
          y: 456,
        }
      })
    end
  end
end
