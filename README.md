A [custom Koa](http://koajs.com) generator for [Yeoman](http://yeoman.io).

    .
    ├── bin
    │   └── www.js
    │
    ├── middleware
    │
    ├── controllers
    │   └── index.js
    │
    ├── resource
    │   ├── js
    │   │	│── page
    │   │	│── cmp
    │   │	│── tools
    │   │	└── lib
    │   └── css
    │       └── index.css
    ├── test
    │   └── routeSpec.js
    ├── views
    │   ├── public
    │   │		│──head.html
    │   │
    │   ├── template.html
    │   └── index.html
    │
    ├── app.js
    ├── begin.sh
    └── package.json

## Install

Install with [npm](https://npmjs.org).

```
$ npm install -g yo
```

```
$ npm install -g generator-koa-server
```

Make a new directory and ```cd``` into it:

```
$ mkdir new-project && cd $_
```

Finally, initiate the generator:

```
$ yo koa-server
```

## Start

Requires NodeJS >= v4.2.4

```
```
$ sh begin.sh &
```

## Test

```
$ npm test
```

See [**Koa Examples**](https://github.com/koajs/examples/)

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) @ addison