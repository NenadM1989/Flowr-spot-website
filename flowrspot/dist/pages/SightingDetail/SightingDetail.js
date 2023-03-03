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
import CardComments from "../../components/CardComments/CardComments";
import styles from "../SightingDetail/SightingDetail.module.css";
import pin from "../../images/pin.png";
import flower from "../../images/pl-image.png";
import profile from "../../images/profile-picture.png";
//import ReportButton from "../../components/Buttons/ReportButton";
var SightingDetail = function () {
    return (_jsxs("div", __assign({ className: styles.container }, { children: [_jsxs("div", __assign({ className: styles.map }, { children: [_jsx("img", { src: pin, alt: "pin", className: styles.pin }), _jsx("button", __assign({ className: styles.view }, { children: "View on Google Maps" })), _jsx("button", __assign({ className: styles.report }, { children: "Report" }))] })), _jsxs("div", __assign({ className: styles["card-profile"] }, { children: [_jsx("img", { src: flower, alt: "flower", className: styles.flower }), _jsxs("div", __assign({ className: styles.profile }, { children: [_jsxs("div", __assign({ className: styles["profile-picture"] }, { children: [_jsx("img", { src: profile, alt: "profile", className: styles.image }), _jsxs("div", __assign({ className: styles.user }, { children: [_jsx("h3", __assign({ className: styles.h3 }, { children: "Ballon Flower" })), _jsx("h4", __assign({ className: styles.h4 }, { children: "by Adam Moore" }))] }))] })), _jsx("div", __assign({ className: styles.paragraph }, { children: "Platycodon grandiflorus (from Ancient Greek \u03C0\u03BB\u03B1\u03C4\u03CD\u03C2 wide and \u03BA\u03CE\u03B4\u03C9\u03BD bell) is a species of herbaceous flowering perennial plant of the family Campanulaceae, and the only member of the genus Platycodon. It is native to East Asia (China, Korea, Japan, and the Russian Far East).[1] It is commonly known as balloon flower[2][3] (referring to the balloon-shaped flower buds), Chinese bellflower,[2] or platycodon.[2]" })), _jsx("div", { children: _jsx(CardComments, { width: "30%" }) })] }))] }))] })));
};
export default SightingDetail;
//# sourceMappingURL=SightingDetail.js.map