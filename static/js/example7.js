//var avalon = require('avalon2')
//require('../dist/mmRouter')
//var a = require('../tab1.html')
//var b = require('../tab2.html')
//var c = require('../tab3.html')

var vm = avalon.define({
    $id: 'test',
    main: '',
    aaa: "第一页的内容",
    bbb: "第二页的内容",
    ccc: "第三页的内容"
})

var map = {
    'aaa': '',
    'bbb': '',
    'ccc': ''
};

map.aaa = getHtml('../views/tab1.html');
map.bbb = getHtml('../views/tab2.html');
map.ccc = getHtml('../views/tab3.html');

avalon.router.add("/pager-{count:\\d+}", function (count) {
    //返回新的hash用于设置地址栏
    return '/aaa?pager-' + count
})

avalon.router.add("/:tab", function (param) {
    vm.main = map[param]
})


avalon.history.start({
    root: "/mmRouter",
    hashPrefix: ""
})

var hash = location.hash.replace(/#!?/, '')
avalon.router.navigate(hash || '/aaa', 2)//默认打开

avalon.scan(document.body)