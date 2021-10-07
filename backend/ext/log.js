const log = console.log;

//báo lỗi kèm date :))))
console.log = function(...args) {
    args.unshift(new Date());
    log.apply(console, args);
}