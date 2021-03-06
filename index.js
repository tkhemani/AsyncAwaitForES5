"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
// printDelayed is a 'Promise<void>'
function printDelayed(elements) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, elements_1, element;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, elements_1 = elements;
                    _a.label = 1;
                case 1:
                    if (!(_i < elements_1.length))
                        return [3 /*break*/, 4];
                    element = elements_1[_i];
                    return [4 /*yield*/, delay(200)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function delay(milliseconds) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    // setTimeout(resolve, milliseconds);
                })];
        });
    });
}
printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(function () {
    //console.log();
    //console.log("Printed every element!");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLG9DQUFvQztBQUNwQyxzQkFBNEIsUUFBa0I7OzRCQUMvQixPQUFPOzs7Ozs7O3lCQUFJLENBQUEsc0JBQVEsQ0FBQTs7O29CQUMxQixNQUFNLGVBQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFBOztvQkFBaEIsVUFBaUI7OztvQkFEQyxJQUFRLENBQUE7Ozs7OztDQUlqQztBQUVELGVBQXFCLFlBQW9COzs7WUFDckMsTUFBTSxnQkFBQyxJQUFJLE9BQU8sQ0FBTyxVQUFBLE9BQU87b0JBQzdCLHFDQUFxQztnQkFDeEMsQ0FBQyxDQUFDLEVBQUM7OztDQUNOO0FBRUQsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0QsZ0JBQWdCO0lBQ2hCLHdDQUF3QztBQUM1QyxDQUFDLENBQUMsQ0FBQyJ9