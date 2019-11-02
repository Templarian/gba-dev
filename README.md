# gba-dev (Work in Progress)

Playing with an idea for a toolchain.

## Initialize Project

```bash
npx gba-dev
```

Answer all the questions to setup a blank 'Hello World' project.

- `npm run start` - Rebuild to `/dist` and launch in Virtual Boy.
- `npm run build` - Build to `/dist`

## Development

Found a bug or want to help make this project better.

> Note: 99% of this relies on `ts2c` module. The rest is just a middle layer.

1. Clone this repo
2. `npm install`
3. `cd packages/example`
4. `npm run start`
5. If the above works you can play around modifying the toolchain.

Use the same commands as

## Q & A

Q. Why?
> A. TypeScript

Q. Can I use another emulator?
> A. Of course, but you'll have to modify your `package.json`.

Q. Why only the Win32 x64 emulator?
> A. Can add the others, just testing with win32. Open an issue.

Q. GB / GBC?
> A. Nope, just GBA.