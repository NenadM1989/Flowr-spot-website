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
import { Link } from "react-router-dom";
import "../404/404.css";
var ErrorPage = function () {
    return (_jsxs("div", __assign({ className: "container" }, { children: [_jsx("h2", __assign({ className: "page" }, { children: "Page not found!" })), _jsx(Link, __assign({ to: "/" }, { children: _jsx("button", __assign({ className: "back" }, { children: "Go back" })) }))] })));
};
export default ErrorPage;
//# sourceMappingURL=404.js.map