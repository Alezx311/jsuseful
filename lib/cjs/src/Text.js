"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
class Text {
}
exports.Text = Text;
Text.isLength = (str) => ~~str?.length > 0;
Text.isIncludes = (str, findChars) => [...str].some(s => findChars.includes(s));
exports.default = {
    isLength: Text.isLength,
    isIncludes: Text.isIncludes,
};
