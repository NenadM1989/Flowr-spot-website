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
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../../pages/FlowerDetail/FlowerDetail.module.css";
import hero from "../../images/hero-sightings.png";
import LikeButton from "../../components/Buttons/LikeButton";
import linebreak from "../../images/linebreak.png";
import { RandomFlowerList } from "../../services/services";
var FlowerDetail = function () {
    var params = useParams();
    var _a = useState(), flowerInfo = _a[0], setFlowerInfo = _a[1];
    useEffect(function () {
        RandomFlowerList.getFlowerById(params.id).then(function (res) {
            setFlowerInfo(res.data.flower);
        });
    }, [params.id]);
    return (_jsx("div", __assign({ className: styles["flower-detail"] }, { children: _jsxs("div", __assign({ className: styles["hero-section-flower-detail"] }, { children: [_jsx("img", { className: styles["hero-img"], src: hero, alt: "" }), _jsxs("div", __assign({ className: styles["hero-section-content"] }, { children: [_jsx("div", __assign({ className: styles["flower-image"] }, { children: _jsx("img", { className: styles["flower-img"], src: flowerInfo === null || flowerInfo === void 0 ? void 0 : flowerInfo.profile_picture, alt: "" }) })), _jsxs("div", __assign({ className: styles["flower-profile"] }, { children: [_jsxs("div", __assign({ className: styles["flower-detail-left"] }, { children: [_jsxs("div", __assign({ className: styles["flower-sighting"] }, { children: [_jsx(LikeButton, {}), _jsxs("p", __assign({ className: styles["n-sightings"] }, { children: [flowerInfo === null || flowerInfo === void 0 ? void 0 : flowerInfo.sightings, " sightings"] }))] })), _jsx("div", __assign({ className: styles["flower-name"] }, { children: _jsxs("div", __assign({ className: styles["flower-name-left"] }, { children: [_jsx("h3", { children: flowerInfo === null || flowerInfo === void 0 ? void 0 : flowerInfo.name }), _jsx("p", { children: flowerInfo === null || flowerInfo === void 0 ? void 0 : flowerInfo.latin_name })] })) }))] })), _jsx("div", __assign({ className: styles["flower-name-right"] }, { children: _jsx("button", { children: "+Add New Sighting" }) }))] }))] })), _jsx("div", __assign({ className: styles["flower-descriptions"] }, { children: _jsxs("div", __assign({ className: styles["flower-descriptions-content"] }, { children: [_jsx("div", __assign({ className: styles["flower-descriptions-left"] }, { children: _jsxs("p", __assign({ className: styles["flower-text"] }, { children: ["Kingdom: Plantae ", _jsx("br", {}), " Order: Asterales ", _jsx("br", {}), " Family: Campanulaceae ", _jsx("br", {}), " Species: P. grandiflorus"] })) })), _jsx("div", __assign({ className: styles["flower-descriptions-right"] }, { children: _jsxs("p", __assign({ className: styles["flower-text"] }, { children: ["Platycodon grandiflorus (from Ancient Greek \u03C0\u03BB\u03B1\u03C4\u03CD\u03C2 wide and \u03BA\u03CE\u03B4\u03C9\u03BD bell) is a species of herbaceous flowering perennial plant of the family Campanulaceae, and the only member of the genus Platycodon. It is native to East Asia (China, Korea, Japan, and the Russian Far East).[1] It is commonly known as balloon flower[2][3] (referring to the balloon-shaped flower buds), Chinese bellflower,[2] or platycodon.[2]", _jsx("br", {}), " ", _jsx("br", {}), " Growing to 60 cm (24 in) tall by 30 cm (12 in) wide, it is an herbaceous perennial with dark green leaves and blue flowers in late summer. A notable feature of the plant is the flower bud which swells like a balloon before fully opening.[4] The five petals are fused together into a bell shape at the base, like its relatives, the campanulas. There are varieties with white, pink and purple blooms in cultivation.[5] In Korea, white flowers are more common. This plant[6] together with its cultivars Apoyama group[7] and Mariesii[8] have gained the Royal Horticultural Societs Award of Garden Merit.", " "] })) }))] })) })), _jsxs("div", __assign({ className: styles["line-break"] }, { children: [_jsx("br", { className: "b" }), _jsx("img", { src: linebreak, alt: "" })] }))] })) })));
};
export default FlowerDetail;
//# sourceMappingURL=FlowerDetail.js.map