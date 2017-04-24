$.ajax({
    url: '../static/js/data.json',
    success: function (data) {
        vm.aaa = data.a;
    }
});
