require "application_system_test_case"

class ArticlesTest < ApplicationSystemTestCase
  test 'the first rendering of the "index"' do
    visit articles_path
    assert_selector "h2", text: "articles/Index.vue"
  end
  test 'the first rendering of the "new"' do
    visit new_article_path
    assert_selector "h2", text: "articles/New.vue"
  end
end
