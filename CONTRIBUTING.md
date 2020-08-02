# Contributing Guidelines

> **Note:** This project doesn't allow contributions for new validator functions. If you have an idea for a new
> validator you can open a PR for it in the [NoNameProvided/typeguard-composer-validators][tcv-repo] repository.

## Locally link the project

To test the module locally you can need to follow these steps:

- build the project with `npm run build`
- enter the `build` directory
- run `npm link` from the build folder to create a global link
- run `npm link typeguard-composer` in any of your project to link it to this package

## Testing

We use Jest for testing. To run it in watch mode, you need to run the following command:

```bash
npx jest --watch --verbose --silent
```

or optionally you can run a specific test only:

```bash
npx jest --verbose --silent -- testname.spec
```

## Code Formatting

- Prettier is used for enforcing a unified code-style
- you can run the `npm run prettier:format` command to format the codebase
- every contribution must have correct code formatting before it can be accepted

## Commit Message Format

We use a variant of Angular Team's commit message format. This leads to more readable messages that are easy to follow when looking through the project history. Also this enable us to generate our change log. The basic format is the following:

`type: subject`

### Type

Type must be one of the predefiend values listed here:

- fix: a bug fix
- feat: a new feature
- docs: documentation only changes
- style: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: code change that neither fixes a bug nor adds a feature
- perf: code change that improves performance
- test: adding missing tests
- chore: changes to the build process or auxiliary tools and libraries such as documentation generation

### Subject

The subject must contain succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- do not capitalize first letter
- do not place a period (.) at the end
- entire length of the commit message must not go over 50 characters

[tcv-repo]: https://github.com/NoNameProvided/typeguard-composer-validators
