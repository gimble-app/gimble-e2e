# Gimble e2e tests

End to end tests for Gimble. Currently this is just a smoke test of production to make sure that the deploy is good.

## Table of Contents

- [Getting started](#getting-started)
- [Running tests](#running-tests)

## Getting started
Some of the basics you will need to install:
- This is a Node app, so you need to have [node](https://nodejs.org).
- We use [Yarn](https://yarnpkg.com) for package management. It's probably a bit of overkill.

## Running tests
We use [Nightwatch](http://nightwatchjs.org/) as the test runner. It requires a selenium server to be running. This is provided in the repo (see `/bin`)

`yarn test`
Runs the tests. Currently this points to the production version of the app (https://gimble-app.firebaseapp.com/). In the future this will be configurable.
