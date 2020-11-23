FROM ruby:2.7.1

RUN apt-get update && apt-get install -y curl apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

RUN mkdir /rails_app_test

WORKDIR /rails_app_test

COPY Gemfile /rails_app_test/Gemfile
COPY Gemfile.lock /rails_app_test/Gemfile.lock

RUN bundle install

COPY package.json /rails_app_test/package.json
COPY yarn.lock /rails_app_test/yarn.lock

RUN yarn install

EXPOSE 3000

CMD ["bash", "-c", "rm -f tmp/pids/server.pid && bundle exec rails s -b 0.0.0.0"]