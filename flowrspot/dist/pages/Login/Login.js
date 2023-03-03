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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import styles from "./Login.module.css";
import Modal from "../../components/Modal/Modal";
import { AuthService } from "../../authService/authService";
import { validEmail, validPassword } from "../../Regex";
var Login = function (_a) {
    var funct = _a.funct, funcLog = _a.funcLog;
    var _b = useState(""), email = _b[0], setEmail = _b[1];
    var _c = useState(""), password = _c[0], setPassword = _c[1];
    var _d = useState(true), showLogin = _d[0], setShowLogin = _d[1];
    var _e = useState(""), errorMessage = _e[0], setErrorMessage = _e[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!validEmail.test(email)) {
                        setErrorMessage("Please enter a valid email address");
                        return [2 /*return*/];
                    }
                    if (!validPassword.test(password)) {
                        setErrorMessage("Password form is incorrect!");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, AuthService.postLogin({ email: email, password: password })];
                case 2:
                    res = _a.sent();
                    localStorage.setItem("auth_token", res.data.auth_token);
                    console.log("Success!", res.data.auth_token);
                    funcLog(true);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.log("Error occurred!", err_1);
                    return [3 /*break*/, 4];
                case 4:
                    setEmail(""), setPassword("");
                    setShowLogin(false);
                    window.location.reload(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (showLogin && (_jsx(Modal, { children: _jsxs("form", __assign({ className: styles.login, onSubmit: handleSubmit }, { children: [_jsx("div", __assign({ className: styles.close, onClick: function () { return funct(false); } }, { children: "X" })), _jsx("h1", __assign({ className: styles.header }, { children: "Welcome Back" })), _jsxs("div", __assign({ className: styles.data }, { children: [_jsx("input", { value: email, onChange: function (e) { return setEmail(e.target.value); } }), _jsx("input", { type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); } }), errorMessage && (_jsx("p", __assign({ className: styles.errorMessage }, { children: errorMessage })))] })), _jsx("div", __assign({ className: styles["login-button"] }, { children: _jsx("button", __assign({ type: "submit", className: styles.button }, { children: "Login to your Account" })) })), _jsx("div", __assign({ className: styles["close-login"], onClick: function () {
                        funct(false);
                    } }, { children: "I dont want to Login" }))] })) })));
};
export default Login;
//# sourceMappingURL=Login.js.map