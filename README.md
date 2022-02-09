# Prompts Helpers

Collection of convenience helpers for [Prompts](https://github.com/terkelg/prompts).

## Install

```sh
npm install --save prompts-helpers
```

## Usage

The following methods are provided:

```ts
type confirm = ( message: string, initial: boolean = false ) => Promise<boolean>;
type noYes = ( message: string ) => Promise<boolean>;
type yesNo = ( message: string ) => Promise<boolean>;
type date = ( message: string, initial?: Date, validate?: (( value: Date ) => boolean | string) ) => Promise<Date | false>;
type number = ( message: string, max: number, min: number, validate?: (( value: number ) => boolean | string) ) => Promise<number | false>;
type password = ( message: string, validate?: (( value: string ) => boolean | string) ) => Promise<string | false>;
type text = ( message: string, validate?: (( value: string ) => boolean | string) ) => Promise<string | false>;
type select = <T extends string> ( message: string, choices: T[] ) => Promise<T | false>;
type multiselect = <T extends string> ( message: string, choices: T[], max: number = Infinity ) => Promise<T[] | false>;
type spinner = ( message: string ) => Spinner;
```

Check actual [examples](./test/index.js) here.

## License

MIT © Fabio Spampinato
