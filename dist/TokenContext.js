"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokens = exports.TokenConsumer = exports.TokenProvider = exports.TokenContext = void 0;
const react_1 = require("react");
exports.TokenContext = react_1.createContext(undefined);
exports.TokenProvider = exports.TokenContext.Provider;
exports.TokenConsumer = exports.TokenContext.Consumer;
const useTokens = () => react_1.useContext(exports.TokenContext);
exports.useTokens = useTokens;
