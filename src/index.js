"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongodb_1 = __importDefault(require("./database/mongodb"));
const port = normalizePort(process.env.PORT || 4000);
function normalizePort(val) {
    let port = typeof val === "string" ? parseInt(val, 10) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return false;
}
app_1.default.listen(port, () => console.log(`API running on port: ${port}`));
mongodb_1.default.connect();
//# sourceMappingURL=index.js.map