A [custom Koa](http://koajs.com) generator for [Yeoman](http://yeoman.io).

## Install

Install with [npm](https://npmjs.org).

```
$ npm install -g yo
```

```
$ npm install -g generator-koa-serve
```

Make a new directory and ```cd``` into it:

```
$ mkdir new-project && cd $_
```

Finally, initiate the generator:

```
$ yo koa-serve
```

## Start

Requires NodeJS >= v4.2.4


```
$ sh begin.sh &
```

## Test

```
$ npm test
```


## add ad view

```
$ yo koa-serve:view
```



#file structure

    ├── bin
    │   └── www.js      enter point
    │   └── config.js   config
    │   └── router.js   user custom router
    │
    ├── sys             framework scripts
    │   └── app.js      
    │   └── log         project log
    │   └── middelware  framework needed mw
    │   └── gulp-plugin

    │
    ├── controllers
    │   └── index.js    controller
    │
    ├── resource
    │   ├── js
    │   │   │── page
    │   │   │── cmp
    │   │   │── tools
    │   │   └── lib
    │   └── css
    │       └── index.css
    │   └── less    
    │   └── es6         es2015 code 
    │   └── es5         compiled code
    │
    ├── test
    │   └── routeSpec.js
    ├── views
    │   ├── public
    │   │       │──head.html
    │   │
    │   ├── template.html
    │   └── index.html
    │
    ├── begin.sh        start project
    ├── Dockerfile      docker config file
    ├── gulpfile.js
    ├── build.js        build es5 js (compress & concat)
    └── package.json

See [**Koa Examples**](https://github.com/koajs/examples/)

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) @ addison