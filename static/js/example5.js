//var avalon = require('avalon2')
//require('../dist/mmRouter')
//var a = require('../tab1.html')
//var b = require('../tab2.html')
//var c = require('../tab3.html')

avalon.config({debug: false});

var vm = avalon.define({
    $id: 'test',
    main: '',
    aaa: "第一页的内容",
    bbb: "第二页的内容",
    ccc: "第三页的内容"
})

// var map = {
//     'aaa': '',
//     'bbb': '',
//     'ccc': ''
// };
//
// map.aaa = getHtml('../views/tab1.html');
// map.bbb = getHtml('../views/tab2.html');
// map.ccc = getHtml('../views/tab3.html');

avalon.router.add("/aaa", function (param) {
    vm.main = getHtml('../views/tab1.html');
});

avalon.router.add("/bbb", function (param) {
    vm.main = getHtml('../views/tab2.html');
});

avalon.router.add("/ccc", function (param) {
    vm.main = getHtml('../views/tab3.html');
});

// avalon.router.add("/:tab", function (param) {
//     vm.main = map[param]
// })


avalon.history.start({
    root: "/mmRouter",
    hashPrefix: ""
})

var hash = location.hash.replace(/#!?/, '')
avalon.router.navigate(hash || '/aaa', 2)//默认打开

avalon.scan(document.body)