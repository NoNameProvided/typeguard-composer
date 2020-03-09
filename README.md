# typeguard-composer 

![CI][github-actions-badge] [![codecov][codecov-badge]][codecov-page]

Performant and composable type guards for runtime data validation.

```ts
import { validate } from 'typeguard-composer';
import { isString, isNumber } from 'typeguard-composer/validators';
import { AddressSchema } from './address.schema';

const PersonSchema = {
  name: isString,
  age: isNumber,
  addresses: [AddressSchema]
}

validate(PersonSchema, { name: 'Test Elek', age: 18, addresses: []});
```

## Install

To install run `npm i typeguard-composer`.

## Built in validators

This libary inculdes validators for the basic primitives only. You can (soon) use the `typeguard-composer-validators` package to match against various other types.

## License

MIT Licensed

[codecov-badge]: https://codecov.io/gh/NoNameProvided/typeguard-composer/branch/master/graph/badge.svg
[codecov-page]: https://codecov.io/gh/NoNameProvided/typeguard-composer
[github-actions-badge]: https://github.com/NoNameProvided/typeguard-composer/workflows/Continuous%20Integration/badge.svg?branch=master&event=push