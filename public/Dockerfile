FROM ubuntu:16.04
MAINTAINER Heinrich Hartmann <heinrich@heinrichhartmann.com>

# Base install
RUN apt-get update
RUN apt-get install -y sudo build-essential

# Ruby Install
RUN sudo apt-get install -y ruby-full
RUN gem install bundler

RUN mkdir /app
COPY Gemfile /app
COPY Gemfile.lock /app

# App install
RUN apt-get install -y zlibc zlib1g-dev
WORKDIR /app
RUN bundle install

EXPOSE 4000
WORKDIR /src
