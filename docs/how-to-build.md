## Initiate file


```shell
npm init -y
npm install typescript uuid
npm install --save-dev typescript ts-node nodemon
npm install --save-dev @types/node
npm install --save-dev vitest
npm install tsconfig-paths # for having multiple entry points
npx tsc --init
```

## Create a nodemon.json

```json
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "npx ts-node ./src/index.ts"
}
```


## How to have Alias

```shell
npm install tsconfig-paths # set as main dependencies for multiple entry points
```

nodemon.json

```json
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "npx ts-node -r tsconfig-paths/register ./src/index.ts"
}
```

tsconfig.json

```json
{
  "compilerOptions": {
    ...
    "outDir": "./dist",
    "rootDir": "./src",
    "baseUrl": ".",
    "paths": {
      "@src/*": ["src/*"],
    },
  },
  "include": [
    "src"
  ]
}
```


## Vitest

### Create a vite.config.ts

```js
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
  },
}));

```

### Resolve 'test' does not exist in type 'UserConfigExport' error

```json
{
  "compilerOptions": {
    "target": "es2022",
    "baseUrl": ".",
    ...
    "types": [
      "node",
      "vitest"
    ],
    "moduleResolution": "node",
  },
}
```
