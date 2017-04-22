var vm = avalon.define({
    $id: 'user',
    username: conf.username,
    currPath: 'mine.html'
});

avalon.router.add("/index", function (a) {
    vm.currPath = this.path
});

avalon.router.add("/detail", function (a) {
    vm.currPath = this.path
});

avalon.router.add("/recharge", function (a) {
    vm.currPath = this.path
});

avalon.router.add("/ddd/:ddd/:eee", function (a) {//:ddd为参数
    vm.currPath = this.path
});

avalon.history.start({
    root: "/"

});

avalon.scan(document.body);
