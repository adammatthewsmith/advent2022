# advent-2022
A quick project for implementing and sharing Advent of Code solutions. https://adventofcode.com/2022

Generated from ts-node-starter yeoman package.
## Development

### npm run build

Compile typescript files from the `src` folder without emitting the sources

### npm run build:commonjs

Compile typescript files from the `src` folder, excluding `*.test.ts` and `*.spec.ts` file, inside
the `dist/commonjs` folder

### npm run clean

Remove the following directories/files

- **.tmp**
- **dist**

### npm test

Run `*.test.ts` and `*.spec.ts` files under the `src` folder

### npm run lint

Check eslint errors according to `.eslintrc` and `.pretterrc` applying fixes and run prettier on
every typescript file

### npm run release

- Bump `package.json` version accordingly to the commit messages
- Generate changelog for the new version from the commit messages
- Commit `package.json` and `CHANGELOG.md` with the new changes
- Create a git tag with the new version
- You'll need to execute `git push --follow-tags origin main` after generating a release
