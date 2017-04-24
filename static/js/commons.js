/**
 * 根据访问地址获取文本内容。
 *
 * @param url 访问地址
 * @returns {string} 文本
 */
function getHtml(url) {

    var text = '';

    $.ajax({
        url: url,
        async: false,
        success: function (data) {
            text = data;
        }
    });

    return text;
}
