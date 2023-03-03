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
import styles from "../../components/ProfilePicture/ProfilePicture.module.css";
import pic from "../../images/profile-picture.png";
var ProfilePicture = function (_a) {
    var width = _a.width, fontSize = _a.fontSize, fontSizeItalic = _a.fontSizeItalic;
    console.log(width);
    return (_jsxs("div", __assign({ className: styles.personal }, { children: [_jsx("div", __assign({ className: styles.photo }, { children: _jsx("img", { src: pic, alt: "", className: styles.image, style: { width: width } }) })), _jsxs("div", __assign({ className: styles.info }, { children: [_jsx("p", __assign({ className: styles.graph1, style: { fontSize: fontSize } }, { children: "Adam Moore" })), _jsx("p", __assign({ className: styles.graph2, style: { fontSize: fontSizeItalic } }, { children: "47 sightings" }))] }))] })));
};
export default ProfilePicture;
//# sourceMappingURL=ProfilePicture.js.map