"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useInterval(callback, delay) {
    var savedCallback = react_1.useRef();
    react_1.useEffect(function () {
        savedCallback.current = callback;
    }, [callback]);
    react_1.useEffect(function () {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            var id_1 = setInterval(tick, delay);
            return function () { return clearInterval(id_1); };
        }
    }, [delay]);
}
exports.default = useInterval;
