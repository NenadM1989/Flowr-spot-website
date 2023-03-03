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
import styles from "../Buttons/AddNewSightings.module.css";
var AddNewSightings = function () {
    return (_jsx("div", __assign({ className: styles.wrapper }, { children: _jsx("button", __assign({ className: styles["button-add"] }, { children: "+ Add New Sighting" })) })));
};
export default AddNewSightings;
//# sourceMappingURL=AddNewSightings.js.map