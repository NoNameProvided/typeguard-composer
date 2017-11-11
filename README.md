# typeguard-composer

Performant and composable type guards for runtime data validation.

```ts
import { validate, isString, isNumber } from './typeguard-composer';
import { AddressSchema } from './address.schema';

const PersonSchema = {
  name: isString,
  age: isNumber,
  addresses: [AddressSchema]
}

validate(PersonSchema, { name: 'Test Elek', age: 18, friends: []});
```

## Built in validators

This libary inculdes validators for the basic primitives only. You can (soon) use the `typeguard-composer-validators` package to match against various other types.

## License

MIT Licensed
