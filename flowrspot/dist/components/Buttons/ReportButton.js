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
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import styles from "../Buttons/ReportButton.module.css";
var ReportButton = function (_a) {
    var children = _a.children, color = _a.color, background = _a.background;
    return (_jsx("div", __assign({ className: styles["report-button"] }, { children: _jsx("button", __assign({ style: { color: color, background: background }, className: styles.button }, { children: children })) })));
};
export default ReportButton;
//# sourceMappingURL=ReportButton.js.map