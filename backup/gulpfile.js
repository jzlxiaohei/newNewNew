var gulp = require('gulp');
var gutil = require('gulp-util');
var glob = require('glob');
var path = require('path');
//var _ = require('lodash')
var chug =require('gulp-chug')
var mkdirp = require('mkdirp')
var del = require('del')
mkdirp.sync('public/static/dist')

gulp.task('clean',function(cb){
    del.sync(['public/static/dist/assets-map.json'])
    cb()
})


gulp.task('default', ['clean'],function () {
    var gulpFiles = glob.sync('apps/**/gulpfile.js');
    gulpFiles.concat(glob.sync('modules/**/gulpfile.js'))

    return gulp.src(['apps/**/gulpfile.js','modules/**/gulpfile.js'],{read:false})
            .pipe(chug());
});

