javascript:(function(){
    (function() {
        function r(e, n, t) {
            function o(i, f) {
                if (!n[i]) {
                    if (!e[i]) {
                        var c = "function" == typeof require && require;
                        if (!f && c) return c(i, !0);
                        if (u) return u(i, !0);
                        var a = new Error("Cannot find module '" + i + "'");
                        throw a.code = "MODULE_NOT_FOUND", a
                    }
                    var p = n[i] = {
                        exports: {}
                    };
                    e[i][0].call(p.exports, function(r) {
                        var n = e[i][1][r];
                        return o(n || r)
                    }, p, p.exports, r, e, n, t)
                }
                return n[i].exports
            }
            for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
            return o
        }
        return r
    })()({
        1: [function(require, module, exports) {
            (function(global) {
                "use strict";
    
                var getGlobal = function() {
                    if (typeof self !== 'undefined') {
                        return self;
                    }
                    if (typeof window !== 'undefined') {
                        return window;
                    }
                    if (typeof global !== 'undefined') {
                        return global;
                    }
                    throw new Error('unable to locate global object');
                }
    
                var global = getGlobal();
    
                module.exports = exports = global.fetch;
    
                exports.default = global.fetch.bind(global);
    
                exports.Headers = global.Headers;
                exports.Request = global.Request;
                exports.Response = global.Response;
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}],
        2: [function(require, module, exports) {
            var fetch = require("node-fetch");
    
            var url = "https://api-ssl.bitly.com/v4/shorten";
            fetch(url, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Host": "api-ssl.bitly.com",
                    "Authorization": "Bearer {INSERT ACCESS_TOKEN HERE}",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "long_url": window.location.href,
                    "group_guid": "{INSERT GROUP_GUID HERE}",
                }),
            }).then(
                response => response.json()
            ).then(
                json => window.location = `https://outline.com/${json.link}`
            );
        }, {
            "node-fetch": 1
        }]
    }, {}, [2]);
})();
