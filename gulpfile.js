var gulp = require("gulp");
var less = require("gulp-less");
var browserSync = require('browser-sync').create();

gulp.task("less", function() {
    gulp.src("less/style.less")      //звідки ми все починаємо
        .pipe(less())
        .pipe(gulp.dest("css"))     // в яку папку зберегти результат
        .pipe(browserSync.reload({
            stream: true
        }))

});

gulp.task('watch',['browserSync'], function(){
    gulp.watch('less/**/*.less', ['less']);
    // Other watchers
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        }
    })
});

