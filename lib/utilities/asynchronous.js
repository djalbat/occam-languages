"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get asyncBackwardsEvery () {
        return asyncBackwardsEvery;
    },
    get asyncEvery () {
        return asyncEvery;
    },
    get asyncForEach () {
        return asyncForEach;
    },
    get asyncForwardsEvery () {
        return asyncForwardsEvery;
    },
    get asyncReduce () {
        return asyncReduce;
    },
    get asyncResolve () {
        return asyncResolve;
    },
    get asyncSome () {
        return asyncSome;
    },
    get default () {
        return _default;
    }
});
const _necessary = require("necessary");
const { filter } = _necessary.arrayUtilities;
async function asyncSome(array, callback) {
    let result = false;
    const length = array.length;
    for(let index = 0; index < length; index += 1){
        const element = array[index];
        result = await callback(element, index, array);
        if (result) {
            break;
        }
    }
    return result;
}
async function asyncEvery(array, callback) {
    let result = true;
    const length = array.length;
    for(let index = 0; index < length; index += 1){
        const element = array[index];
        result = await callback(element, index, array);
        if (!result) {
            break;
        }
    }
    return result;
}
async function asyncReduce(array, callback, initialValue) {
    let value = initialValue; ///
    const length = array.length;
    for(let index = 0; index < length; index += 1){
        const element = array[index];
        value = await callback(value, element, index, array);
    }
    return value;
}
async function asyncForEach(array, callback) {
    const length = array.length;
    for(let index = 0; index < length; index += 1){
        const element = array[index];
        await callback(element, index, array);
    }
}
async function asyncResolve(arrayA, arrayB, callback) {
    let resolved;
    arrayA = [
        ...arrayA
    ];
    for(;;){
        const arrayALength = arrayA.length;
        if (arrayALength === 0) {
            break;
        }
        let resolved = false;
        await asyncForEach(arrayA, async (elementA, index)=>{
            const passed = await callback(elementA, index, arrayA);
            if (passed) {
                const elementB = elementA; ///
                arrayB.push(elementB);
                resolved = true;
            }
        });
        if (!resolved) {
            break;
        }
        filter(arrayA, (elementA)=>{
            const arrayBIncludesElementA = arrayB.includes(elementA);
            if (!arrayBIncludesElementA) {
                return true;
            }
        });
    }
    const arrayALength = arrayA.length;
    resolved = arrayALength === 0;
    return resolved;
}
async function asyncForwardsEvery(array, callback) {
    const length = array.length;
    for(let index = 0; index < length; index++){
        const element = array[index], passed = await callback(element, index, array);
        if (!passed) {
            return false;
        }
    }
    return true;
}
async function asyncBackwardsEvery(array, callback) {
    const length = array.length;
    for(let index = length - 1; index >= 0; index--){
        const element = array[index], passed = await callback(element, index, array);
        if (!passed) {
            return false;
        }
    }
    return true;
}
const _default = {
    asyncSome,
    asyncEvery,
    asyncReduce,
    asyncForEach,
    asyncResolve,
    asyncForwardsEvery,
    asyncBackwardsEvery
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICByZXN1bHQgPSBhd2FpdCBjYWxsYmFjayhlbGVtZW50LCBpbmRleCwgYXJyYXkpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gYXdhaXQgY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGF3YWl0IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jUmVzb2x2ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIGFycmF5QSA9IFsgIC8vL1xuICAgIC4uLmFycmF5QVxuICBdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgaWYgKGFycmF5QUxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBhd2FpdCBhc3luY0ZvckVhY2goYXJyYXlBLCBhc3luYyAoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwYXNzZWQgPSBhd2FpdCBjYWxsYmFjayhlbGVtZW50QSwgaW5kZXgsIGFycmF5QSk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEIgPSBlbGVtZW50QTsgIC8vL1xuXG4gICAgICAgIGFycmF5Qi5wdXNoKGVsZW1lbnRCKTtcblxuICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gIHJlc29sdmVkID0gKGFycmF5QUxlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNGb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0JhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBsZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBhd2FpdCBjYWxsYmFjayhlbGVtZW50LCBpbmRleCwgYXJyYXkpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3luY1NvbWUsXG4gIGFzeW5jRXZlcnksXG4gIGFzeW5jUmVkdWNlLFxuICBhc3luY0ZvckVhY2gsXG4gIGFzeW5jUmVzb2x2ZSxcbiAgYXN5bmNGb3J3YXJkc0V2ZXJ5LFxuICBhc3luY0JhY2t3YXJkc0V2ZXJ5XG59O1xuIl0sIm5hbWVzIjpbImFzeW5jQmFja3dhcmRzRXZlcnkiLCJhc3luY0V2ZXJ5IiwiYXN5bmNGb3JFYWNoIiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNSZWR1Y2UiLCJhc3luY1Jlc29sdmUiLCJhc3luY1NvbWUiLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiY2FsbGJhY2siLCJyZXN1bHQiLCJsZW5ndGgiLCJpbmRleCIsImVsZW1lbnQiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsImFycmF5QSIsImFycmF5QiIsInJlc29sdmVkIiwiYXJyYXlBTGVuZ3RoIiwiZWxlbWVudEEiLCJwYXNzZWQiLCJlbGVtZW50QiIsInB1c2giLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWlJc0JBO2VBQUFBOztRQXpHQUM7ZUFBQUE7O1FBZ0NBQztlQUFBQTs7UUEwREFDO2VBQUFBOztRQXhFQUM7ZUFBQUE7O1FBd0JBQztlQUFBQTs7UUE1REFDO2VBQUFBOztRQTBJdEI7ZUFBQTs7OzJCQTlJK0I7QUFFL0IsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWM7QUFFMUIsZUFBZUYsVUFBVUcs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