# typeguard-composer 

![CI][github-actions-badge] [![codecov][codecov-badge]][codecov-page]

Performant and composable type guards for runtime data validation.

```ts
import { validate } from 'typeguard-composer';
import { isString, isNumber } from 'typeguard-composer/validators';
import { AddressSchema } from './my-address.schema';

/**
 * Schemas are simple object where every value is an object or
 * array containing type guard functions or a single type guard function.
 */
const PersonSchema = {
  name: isString,
  age: isNumber,
  addresses: [AddressSchema]
}

validate(PersonSchema, { name: 'Test Elek', age: 18, addresses: []});
```

## Installation

```bash
npm install typeguard-composer
```

## Usage

_To be written... include info about defining schemas and how there validation works..._

## API

The public API is extremely small, it consists only one function to validate values against schemas and a validator for every primitive types which can be used to build custom schemas.

### `validate` function

Tries to validate the received value against the received schema. If the value is valid it returns true and false otherwise.

**Possible errors:**

- `TypeError` when the provided value does not match the provided schema.

**Signature:**

```ts
validate(schema: TypeSchema, value: any, options: ValidatorOptions): boolean
```

---


### Validators

- validators are simple functions what implement the type guard pattern described the [Typescript documentation][ts-typeguards]
- this library includes validators for the basic primitive types only
- you can and should define your own validators when using this library
- validators should be fairly simple in complexity and check a single value

> _Note: You can check out the [NoNameProvided/typeguard-composer-validators][tcv-repo] repository to see a list of available pre-written complex schemas and validator functions._

List of included base validators: 

- `isBoolean`
- `isNumber`
- `isString`
- `isSymbol`
- `isNull`
- `isUndefined`
- `isObject`
- `isArray`
- `isFunction`
- `isAny` - always returns true
- `isValue` - return true when the provided value is not `null` or `undefined`

## License

MIT Licensed

[codecov-badge]: https://codecov.io/gh/NoNameProvided/typeguard-composer/branch/master/graph/badge.svg
[codecov-page]: https://codecov.io/gh/NoNameProvided/typeguard-composer
[github-actions-badge]: https://github.com/NoNameProvided/typeguard-composer/workflows/Continuous%20Integration/badge.svg?branch=master&event=push
[tcv-repo]: https://github.com/NoNameProvided/typeguard-composer-validators
[ts-typeguards]: https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types