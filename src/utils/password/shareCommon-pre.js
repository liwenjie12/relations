import { MD5 } from './md5'

var __encode = 'sojson.com',
_0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"]; (function(_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(window);
var __Ox47b29 = ["\x68\x74\x74\x70\x3A\x2F\x2F\x63\x6F\x75\x70\x6F\x6E\x2E\x6D\x61\x6C\x6C\x70\x61\x72\x6B\x69\x6E\x67\x2E\x63\x6E", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x78\x70\x61\x79\x2E\x6D\x61\x6C\x6C\x70\x61\x72\x6B\x69\x6E\x67\x2E\x63\x6E", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x65\x63\x68\x61\x74\x2E\x6D\x61\x6C\x6C\x70\x61\x72\x6B\x69\x6E\x67\x2E\x63\x6E\x2F", "\x68\x74\x74\x70\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x61\x6C\x6C\x70\x61\x72\x6B\x69\x6E\x67\x2E\x63\x6E", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6F\x70\x65\x6E\x61\x70\x69\x2E\x66\x61\x70\x69\x61\x6F\x65\x72\x2E\x63\x6E", "\x46\x58\x77\x35\x37\x39\x61\x50\x45\x59\x51\x7A\x52\x67\x71\x53\x47\x55\x31\x4B\x6A\x63\x71\x42\x58\x72\x68\x73\x51\x54\x6E\x5A", "\x34\x53\x6E\x4D\x76\x47\x4C\x56\x78\x75\x51\x6F\x6A\x57\x4B\x74\x34\x76\x38\x77\x68\x30\x36\x4F\x57\x37\x4A\x78\x48\x78\x6D\x37\x65\x38\x45\x4D\x77\x53\x58\x4D\x30\x59\x57\x49\x47\x66\x76\x30", "\x28\x5E\x7C\x26\x29", "\x3D\x28\x5B\x5E\x26\x5D\x2A\x29\x28\x26\x7C\x24\x29", "\x69", "\x6D\x61\x74\x63\x68", "\x73\x75\x62\x73\x74\x72", "\x73\x65\x61\x72\x63\x68", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "", "\x73\x69\x67\x6E", "\x70\x75\x73\x68", "\x73\x6F\x72\x74", "\x6C\x65\x6E\x67\x74\x68", "\x3D", "\x26", "\x62\x33\x66\x31\x64\x39\x34\x34\x2D\x35\x35\x38\x38\x2D\x31\x31\x65\x37\x2D\x62\x64\x65\x65\x2D\x61\x63\x32\x32\x30\x62\x37\x38\x64\x64\x62\x30", "\x61\x63\x63\x65\x73\x73\x4B\x65\x79\x49\x64", "\x61\x63\x63\x65\x73\x73\x4B\x65\x79\x56\x61\x6C\x75\x65\x3D", "\x66\x6F\x72\x6D\x61\x74", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x67\x65\x74\x4D\x6F\x6E\x74\x68", "\x67\x65\x74\x44\x61\x74\x65", "\x67\x65\x74\x48\x6F\x75\x72\x73", "\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73", "\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73", "\x66\x6C\x6F\x6F\x72", "\x67\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73", "\x74\x65\x73\x74", "\x24\x31", "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72", "\x72\x65\x70\x6C\x61\x63\x65", "\x28", "\x29", "\x30\x30", "\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65", "\x73\x75\x62\x73\x74\x72\x69\x6E\x67"];
var codeIP = __Ox47b29[0x0];
var interfaceIP = __Ox47b29[0x1];
var webIp = __Ox47b29[0x2];
var BILL_IP = __Ox47b29[0x3];
var TAX_IP = __Ox47b29[0x4];
var appkey = __Ox47b29[0x5];
var appsecret = __Ox47b29[0x6];

//获取浏览器地址中参数的值 eg: http://192.168.0.12:8080/?a=1234, 传入参数a， 则返回1234
function getQueryString(_0x7a3ax9 /*需要获取值的key*/) {
    var _0x7a3axa = new RegExp(__Ox47b29[0x7] + _0x7a3ax9 + __Ox47b29[0x8], __Ox47b29[0x9]);
    var _0x7a3axb = window[__Ox47b29[0xd]][__Ox47b29[0xc]][__Ox47b29[0xb]](1)[__Ox47b29[0xa]](_0x7a3axa);
    if (_0x7a3axb != null) {
        return decodeURI(_0x7a3axb[0x2])
    };
    return null
}
export function getSignParams(_0x7a3axd) {
    var _0x7a3axd = _0x7a3axd; //{openId:'122',accessKeyId: '24234', sign?:''}
    var _0x7a3axe = [];//['openId', 'accessKeyId'],
    var _0x7a3axf = __Ox47b29[0xe]; // ""
    delete _0x7a3axd[__Ox47b29[0xf]]; //删除现有的sign
    for (var _0x7a3ax10 in _0x7a3axd) {
        _0x7a3axe[__Ox47b29[0x10]](_0x7a3ax10) //push openId, accessKeyId
    };
    //['openId', 'accessKeyId'] sort排序
    _0x7a3axe[__Ox47b29[0x11]](function(_0x7a3ax11, _0x7a3axb) {
        return _0x7a3ax11 > _0x7a3axb ? 1 : -1
    });
    //拼接类似于url地址参数形式的数据。 openId=123&assessKeyId=24234&
    for (var _0x7a3ax12 = 0; _0x7a3ax12 < _0x7a3axe[__Ox47b29[0x12]]; _0x7a3ax12++) {
        _0x7a3axf += _0x7a3axe[_0x7a3ax12] + __Ox47b29[0x13] + _0x7a3axd[_0x7a3axe[_0x7a3ax12]] + __Ox47b29[0x14]
    };

    //判断上一步执行结果是否为空字符串，是这拼接一个 &
    if (_0x7a3axf == __Ox47b29[0xe]) {
        _0x7a3axf += __Ox47b29[0x14]
    };
    console.log(getQueryString('a'))
    //md5加密 b3f1d944-5588-11e7-bdee-ac220b78ddb024234 b3f1d944-5588-11e7-bdee-ac220b78ddb0 + accessKeyId组合而成
    var _0x7a3ax13 = MD5(__Ox47b29[0x15] + _0x7a3axd[__Ox47b29[0x16]]);
    //再次对整体拼接的值进行md5加密 加密值为 openId=123&assessKeyId=24234&accessKeyValue=b3f1d944-5588-11e7-bdee-ac220b78ddb024234
    _0x7a3axf = MD5(_0x7a3axf + __Ox47b29[0x17] + _0x7a3ax13);
    //为传入的对象增加sign属性，值为上一步加密所得值
    _0x7a3axd[__Ox47b29[0xf]] = _0x7a3axf;
    return _0x7a3axd
}
Date[__Ox47b29[0x19]][__Ox47b29[0x18]] = function(_0x7a3ax14) {
    var _0x7a3ax15 = {
        "\x4D\x2B": this[__Ox47b29[0x1a]]() + 1,
        "\x64\x2B": this[__Ox47b29[0x1b]](),
        "\x68\x2B": this[__Ox47b29[0x1c]](),
        "\x6D\x2B": this[__Ox47b29[0x1d]](),
        "\x73\x2B": this[__Ox47b29[0x1e]](),
        "\x71\x2B": Math[__Ox47b29[0x1f]]((this[__Ox47b29[0x1a]]() + 3) / 3),
        "\x53": this[__Ox47b29[0x20]]()
    };
    if (/(y+)/ [__Ox47b29[0x21]](_0x7a3ax14)) {
        _0x7a3ax14 = _0x7a3ax14[__Ox47b29[0x24]](RegExp.$1, (this[__Ox47b29[0x23]]() + __Ox47b29[0xe])[__Ox47b29[0xb]](4 - RegExp[__Ox47b29[0x22]][__Ox47b29[0x12]]))
    };
    for (var _0x7a3ax16 in _0x7a3ax15) {
        if (new RegExp(__Ox47b29[0x25] + _0x7a3ax16 + __Ox47b29[0x26])[__Ox47b29[0x21]](_0x7a3ax14)) {
            _0x7a3ax14 = _0x7a3ax14[__Ox47b29[0x24]](RegExp.$1, (RegExp[__Ox47b29[0x22]][__Ox47b29[0x12]] == 1) ? (_0x7a3ax15[_0x7a3ax16]) : ((__Ox47b29[0x27] + _0x7a3ax15[_0x7a3ax16])[__Ox47b29[0xb]]((__Ox47b29[0xe] + _0x7a3ax15[_0x7a3ax16])[__Ox47b29[0x12]])))
        }
    };
    return _0x7a3ax14
};
export function getSign(_0x7a3axd, _0x7a3ax18) {
    var _0x7a3axd = _0x7a3axd;
    var _0x7a3axe = [];
    var _0x7a3axf = __Ox47b29[0xe];
    delete _0x7a3axd[__Ox47b29[0xf]];
    for (var _0x7a3ax10 in _0x7a3axd) {
        _0x7a3axe[__Ox47b29[0x10]](_0x7a3ax10)
    };
    _0x7a3axe[__Ox47b29[0x11]](function(_0x7a3ax11, _0x7a3axb) {
        return _0x7a3ax11 > _0x7a3axb ? 1 : -1
    });
    for (var _0x7a3ax12 = 0; _0x7a3ax12 < _0x7a3axe[__Ox47b29[0x12]]; _0x7a3ax12++) {
        _0x7a3axf += _0x7a3axe[_0x7a3ax12] + __Ox47b29[0x13] + _0x7a3axd[_0x7a3axe[_0x7a3ax12]] + __Ox47b29[0x14]
    };
    if (_0x7a3axf == __Ox47b29[0xe]) {
        _0x7a3axf += __Ox47b29[0x14]
    };

    /**以上功能与getSignParams方法一样;
     * 最后部分返回一个值 _0x7a3axf = MD5(val).toUpperCase()
     * val: 为拼接字符串 appkey + _0x7a3ax18 + encodeURIComponent(_0x7a3axf[__Ox47b29[0x29]: subString](0, _0x7a3axf[__Ox47b29[0x12]: length] - 1)) + appsecret
     * appkey: FXw579aPEYQzRgqSGU1KjcqBXrhsQTnZ
     * appsecret: 4SnMvGLVxuQojWKt4v8wh06OW7JxHxm7e8EMwSXM0YWIGfv0
     * val: FXw579aPEYQzRgqSGU1KjcqBXrhsQTnZshaccessKeyId%3D24234%26openId%3D1224SnMvGLVxuQojWKt4v8wh06OW7JxHxm7e8EMwSXM0YWIGfv0
    */
   console.log(appkey, appsecret)
    _0x7a3axf = MD5(appkey + _0x7a3ax18 + encodeURIComponent(_0x7a3axf[__Ox47b29[0x29]](0, _0x7a3axf[__Ox47b29[0x12]] - 1)) + appsecret)[__Ox47b29[0x28]]();
    return _0x7a3axf
}