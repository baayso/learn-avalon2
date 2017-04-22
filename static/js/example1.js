//var avalon = require('../../libs/avalon2')
//require('../dist/mmRouter')

var vm = avalon.define({
    $id: 'test',
    currPath: ''
})
avalon.router.add("/aaa", function (a) {
    vm.currPath = this.path
})
avalon.router.add("/bbb", function (a) {
    vm.currPath = this.path
})
avalon.router.add("/ccc", function (a) {
    vm.currPath = this.path
})
avalon.router.add("/ddd/:ddd/:eee", function (a, b) {//:ddd为参数
    vm.currPath = this.path
    console.log(a)
    console.log(b)
})

avalon.history.start({
    root: "/mmRouter"
   
})
avalon.scan(document.body)