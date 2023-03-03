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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import styles from "./LikeButton.module.css";
var LikeButton = function () {
    var handleClick = function () {
        console.log("Click occurred!");
    };
    return (_jsx(_Fragment, { children: _jsx("div", __assign({ className: styles.favorite, onClick: handleClick }, { children: _jsx("i", { className: "".concat(styles.fa, " ").concat(styles["fa-star"], " ").concat(styles.star) }) })) }));
};
export default LikeButton;
//# sourceMappingURL=LikeButton.js.map