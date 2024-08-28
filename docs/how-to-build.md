## Initiate file


```shell
npm init -y
npm install typescript uuid
npm install --save-dev typescript ts-node nodemon
npm install --save-dev @types/node
npm install --save-dev jest ts-jest @types/jest

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

## Create a jest.config.js

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
```


## How to have Alias

```shell
pnpm install -D tsconfig-paths
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
    "baseUrl": "./src",
    "paths": {
      "@utils/*": ["utils/*"],
    }
  },
  "include": [
    "src"
  ]
}
```