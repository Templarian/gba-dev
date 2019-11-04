# gba-dev (Work in Progress)

Playing with an idea for a TypeScript to GBA toolchain.

## Initialize Project

```bash
npx gba-dev
```

Answer all the questions to setup a blank 'Hello World' project.

- `npm run start` - Rebuild to `/dist` and launch in Virtual Boy.
- `npm run build` - Build to `/dist`

> Note: View `ts2c` to view current restrictions.

## Development

Found a bug or want to help make this project better.

> Note: 99% of this relies on `ts2c` module. The rest is just a middle layer.

1. Clone this repo.
2. `npm install`
3. `npm run start`
4. Play around modifying the toolchain.
5. If you do anything awesome maybe submit it back as a pull request.

We map `start`, `launch`, `build` to the root from `packages/example` for convenience.

## Q & A

Q. Why?
> A. TypeScript

Q. Can I use another emulator?
> A. Of course, but virtual boy is hard coded for now.

Q. Why only the Win32 x64 emulator?
> A. Can add the others, just testing with win32. Open an issue.

Q. GB / GBC?
> A. Nope, just GBA.