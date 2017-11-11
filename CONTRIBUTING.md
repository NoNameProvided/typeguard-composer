# Developer Guide

First things first, thanks for contributing to this repo! This small docs hopefully will help you get started and also helps you to follow a few rules which needs to be kept to accept any PR for the project.

## Setup

To start hacking on the project nothing special is required. You only have `npm install` the dependencies and you are ready to go. After this you only have to run `npm start`, and changes will be compiled automatically to a build folder.

To test the module you can simply run `npm link` to create a global link for this package, then you can run `npm link typeguard-composer` in any of your project to link this package to it.

## Testing

There are no watch for tests, but you can call specific ones via `npm run test:nocoverage -- testname.spec`.

## Code Style

Prettier is used for enforcing code-style, the code will be formatted automatically when creating a commit.

## Commit Message Format

We use a variant of Angular Team's commit message format. This leads to more readable messages that are easy to follow when looking through the project history. Also this enable us to generate our change log. The basic format is the following:

`type: subject`

### Type

Type must be one of the predefiend values listed here:

- fix: A bug fix
- feat: A new feature
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- do not capitalize first letter
- do not place a period (.) at the end
- entire length of the commit message must not go over 50 characters