// 1. creation du package.json
```npm init -y```

// 2. installation de angular
```npm i angular -S```

// 3. installation de webpack + webpack dev server
```npm i webpack webpack-dev-server -D```

// 4. installation de babel
```npm i babel-core babel-loader babel-preset-env -D```

// 5. Configuration de webpack : webpack.config.js
```js
const path = require('path');

module.exports = {
    entry: "./app",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9090,
    },

	devtool: "cheap-module-eval-source-map",

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: [['env', { 
                        modules: false,
                        targets: { browsers: ["last 2 versions"] }
                    }]]
                }
            }
        ]
    }

}
```

// 6. Modifier package.json
```json

```

// 7. Créer fichier dist/index.html
```html
...
<script src="bundle.js"></script>
...
```

// 8. Lancer le server
```npm run dev:server```


## Utilisation de AngularJS

```js
// app/index.js
import angular from 'angular';

angular.module('app', [])
```

```html
...
<body ng-app="app">
</body>
...
```
## Bootstrap

`npm i bootstrap -S`

`npm i css-loader file-loader style-loader -D`

## Linter

`npm i standard -D`

## Routing

`npm i angular-route -S`

```js
// webpack.config.json
devServer {
    ...
    historyApiFallback: true
}
```
## Raw (html) loader

`npm i raw-loader -D`

```js
{
    test: /\.html$/,
    exclude: [/node_modules/],
    loader: 'raw-loader',
},
```