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
import styles from "../../pages/User/User.module.css";
import ReportButton from "../../components/Buttons/ReportButton";
import CardSighting from "../../components/CardSighting/CardSighting";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
var User = function () {
    return (_jsxs("div", __assign({ className: styles.user }, { children: [_jsxs("div", __assign({ className: styles.row }, { children: [_jsx(ProfilePicture, { width: "80px" }), _jsx(ReportButton, __assign({ color: "white", background: "linear-gradient(270deg, #ECBCB3 0%, #EAA79E 100%)" }, { children: "Report" }))] })), _jsxs("div", __assign({ className: styles.list }, { children: [_jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {}), _jsx(CardSighting, {})] }))] })));
};
export default User;
//# sourceMappingURL=User.js.map