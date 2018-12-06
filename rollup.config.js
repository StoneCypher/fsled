
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript  from 'rollup-plugin-typescript2';
//import commonjs    from 'rollup-plugin-commonjs';

const pkg = require('./package');

const es6config = {

  input     : 'src/ts/fsled.ts',

  output    : {
    file      : 'build/fsled.es6.js',
    format    : 'es',
    name      : 'fsled',
    sourcemap : true,
  },

  plugins   : [

    typescript(),

    // commonjs({
    //   namedExports : {},
    // }),

    nodeResolve({
      module         : true,
      jsnext         : true,
      browser        : true,
      extensions     : [ '.js', '.json', '.ts' ],
      preferBuiltins : false
    })

  ]

};

const cjsconfig = {

  input     : 'src/ts/fsled.ts',

  output    : {
    file      : 'build/fsled.cjs.js',
    format    : 'cjs',
    name      : 'fsled',
    sourcemap : true,
  },

  plugins   : [

    typescript(),

    // commonjs({
    //   namedExports : {},
    // }),

    nodeResolve({
      module         : true,
      jsnext         : true,
      browser        : true,
      extensions     : [ '.js', '.json', '.ts' ],
      preferBuiltins : false
    })

  ]

};

export default [ es6config, cjsconfig ];
