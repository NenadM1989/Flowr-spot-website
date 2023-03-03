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
import styles from "./CreateAnAccount.module.css";
import Modal from "../../components/Modal/Modal";
import { AuthService } from "../../authService/authService";
import { validEmail, validPassword } from "../../Regex";
var CreateAnAccount = function (_a) {
    var func = _a.func;
    var _b = useState(""), firstName = _b[0], setFirstName = _b[1];
    var _c = useState(""), lastName = _c[0], setLastName = _c[1];
    var _d = useState(""), date = _d[0], setDate = _d[1];
    var _e = useState(""), email = _e[0], setEmail = _e[1];
    var _f = useState(""), password = _f[0], setPassword = _f[1];
    var _g = useState(true), showCreateAcc = _g[0], setShowCreateAcc = _g[1];
    var _h = useState(""), errorMessage = _h[0], setErrorMessage = _h[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (localStorage.getItem("token")) {
                        setErrorMessage("User is already registred");
                        setLastName(""), setDate(""), setEmail(""), setPassword("");
                        return [2 /*return*/];
                    }
                    if (!validEmail.test(email)) {
                        setErrorMessage("Please enter a valid email address");
                        return [2 /*return*/];
                    }
                    if (!validPassword.test(password)) {
                        setErrorMessage("Password form is incorrect!");
                        return [2 /*return*/];
                    }
                    data = {
                        email: email,
                        password: password,
                        first_name: firstName,
                        last_name: lastName,
                        date_of_birth: date,
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, AuthService.postRegister(data)];
                case 2:
                    response = _a.sent();
                    localStorage.setItem("token", response.data.auth_token);
                    console.log(response.data.auth_token);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.log("Error occurred");
                    return [3 /*break*/, 4];
                case 4:
                    setFirstName(""),
                        setLastName(""),
                        setDate(""),
                        setEmail(""),
                        setPassword("");
                    setShowCreateAcc(false);
                    window.location.reload(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (showCreateAcc && (_jsx(Modal, { children: _jsxs("form", __assign({ className: styles.container, onSubmit: handleSubmit }, { children: [_jsx("h1", __assign({ className: styles.header }, { children: "Create an Account" })), _jsxs("div", __assign({ className: styles.names }, { children: [_jsx("input", { required: true, placeholder: "First Name", type: "text", value: firstName, onChange: function (e) { return setFirstName(e.target.value); } }), _jsx("input", { required: true, placeholder: "Last Name", type: "text", value: lastName, onChange: function (e) { return setLastName(e.target.value); } })] })), _jsxs("div", __assign({ className: styles.column }, { children: [_jsx("input", { required: true, placeholder: "date of birth", className: styles.date, type: "date", onChange: function (e) { return setDate(e.target.value); }, value: date }), _jsx("input", { placeholder: "Email Address", value: email, onChange: function (e) { return setEmail(e.target.value); } }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: function (e) { return setPassword(e.target.value); } }), errorMessage && (_jsx("p", __assign({ className: styles.errorMessage }, { children: errorMessage }))), _jsx("button", __assign({ type: "submit", className: styles.button }, { children: "Create Account" }))] })), _jsx("div", __assign({ onClick: function () {
                        func(false);
                    }, className: styles.close }, { children: "I dont want to register" }))] })) })));
};
export default CreateAnAccount;
//# sourceMappingURL=CreateAnAccount.js.map