var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import "../CardComments/CardComments.css";
var CardComments = function (_a) {
    var width = _a.width;
    return (_jsx("div", __assign({ className: "card-comments" }, { children: _jsxs("div", __assign({ className: "comments-favorites", style: { width: width } }, { children: [_jsxs("div", __assign({ className: "comment" }, { children: [_jsx("i", { className: "fa fa-commenting comments" }), _jsx("p", __assign({ className: "p" }, { children: "12 comments" }))] })), _jsxs("div", __assign({ className: "favorite" }, { children: [_jsx("i", { className: "fa fa-heart heart" }), _jsx("p", __assign({ className: "p" }, { children: "18 favorites" }))] }))] })) })));
};
export default CardComments;
//# sourceMappingURL=CardComments.js.map