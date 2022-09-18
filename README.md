# rails-vue-mpa

![run-frontend-tests](https://github.com/kjirou/rails-vue-mpa/actions/workflows/run-frontend-tests.yml/badge.svg)

## :hammer_and_wrench: Development

### Preparation

- Install [Ruby](https://www.ruby-lang.org/).
  - Its version is defined in [.ruby-version](/.ruby-version).
- Install [bundler](https://rubygems.org/gems/bundler).
  - Its version is defined in `BUNDLED WITH` of [Gemfile.lock](/Gemfile.lock).
- Install [Node.js](https://nodejs.org/en/).
  - Its version is defined in [.nvmrc](/.nvmrc).
- Install [Visual Studio Code (VSCode)](https://code.visualstudio.com/) with [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) plugin.
  - Since the development server does not perform typechecking, it is inconvenient if the IDE does not do it.
- Configure [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471) to Volar.

### Application Installation

```bash
git clone git@github.com:kjirou/rails-vue-mpa.git
bundle install
npm install
```

### Start of the development servers

```bash
bundle exec rails server
npm run watch
```
