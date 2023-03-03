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
import React, { useState } from "react";
import "../../components/Search/Search.css";
import image from "../../images/Vector3.png";
var Search = function (_a) {
    var onSubmit = _a.onSubmit;
    var _b = useState(""), input = _b[0], setInput = _b[1];
    var submitHandler = function (event) {
        event.preventDefault();
        onSubmit(input);
        setInput("");
    };
    return (_jsxs("form", __assign({ className: "form", onSubmit: submitHandler }, { children: [_jsx("input", { type: "text", className: "input", placeholder: "Looking for something specific?", value: input, onChange: function (e) { return setInput(e.target.value); } }), _jsx("img", { alt: "", width: "30px", className: "image", src: image })] })));
};
export default Search;
//# sourceMappingURL=Search.js.map