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
import { ADD_FLOWERS } from "./constants";
var initialState = { flowers: [] };
var flowerReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD_FLOWERS:
            return __assign(__assign({}, state), { flowers: action.payload });
        default:
            return state;
    }
};
export default flowerReducer;
//# sourceMappingURL=reducers.js.map