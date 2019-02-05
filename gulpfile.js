
//Gulp modules
const del = require("del");
const gulp = require("gulp");
const vinylPaths = require('vinyl-paths');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
const nodemon = require("nodemon");
const browserify = require('browserify');
const source = require('vinyl-source-stream');

///////////////////////////////////////////////////////////////////////////
// Tasks
//
///////////////////////////////////////////////////////////////////////////
gulp.task('tsBuild', gulp.series(tsBuildServer,tsBuildClient));

gulp.task('server', gulp.series('tsBuild',server));

///////////////////////////////////////////////////////////////////////////
// config
//
///////////////////////////////////////////////////////////////////////////
const tsConfig={
  noImplicitAny: true,
  module: 'commonjs',
  target: 'ES6'
}

///////////////////////////////////////////////////////////////////////////
// Start dev server
//
///////////////////////////////////////////////////////////////////////////
function server(){
    nodemon({
        script: 'app/server/index.js',
        watch: ["app/server","app/client"],
        ext: 'ts'
    }).on('restart', gulp.series('tsBuild'))
}

///////////////////////////////////////////////////////////////////////////
// Clean all .js and .map (ignore lib directory)
//
///////////////////////////////////////////////////////////////////////////
function tsClean(){

  gulp.src(['app/**/*.js', '!app/www/lib/**/*'])
    .pipe(vinylPaths(del));

  gulp.src(['app/**/*.js.map', '!app/www/lib/**/*'])
    .pipe(vinylPaths(del));
}

///////////////////////////////////////////////////////////////////////////
// Transpiles typescript files
//
///////////////////////////////////////////////////////////////////////////
function tsBuildServer(){

  return gulp.src(['app/server/**/*.ts','app/config/config.ts'], {base:'.'})
  .pipe(sourcemaps.init())
    .pipe(typescript(tsConfig))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'))
}

function tsBuildClient(){

   gulp.src('app/client/**/*.ts', {base:'.'})
  .pipe(sourcemaps.init())
    .pipe(typescript(tsConfig))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'));

  return browserify({entries: ['app/client/app.js','app/config/config.js'],debug:false})
       .bundle()
       .pipe(source('app.js'))
       .pipe(gulp.dest('./app/www/scripts/'))
}


///////////////////////////////////////////////////////////////////////////
// Default task
//
///////////////////////////////////////////////////////////////////////////
gulp.task('default', gulp.series('tsBuild'));
