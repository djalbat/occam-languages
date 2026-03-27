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
    get asyncExtract () {
        return asyncExtract;
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
const { first, filter } = _necessary.arrayUtilities;
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
async function asyncExtract(array, callback) {
    let deletedElement = undefined;
    await asyncSome(array, async (element, index)=>{
        const passed = await callback(element, index);
        if (passed) {
            const start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            deletedElement = firstDeletedElement; ///
            return true;
        }
    });
    return deletedElement;
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
    asyncExtract,
    asyncResolve,
    asyncForwardsEvery,
    asyncBackwardsEvery
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHJlc3VsdCA9IGF3YWl0IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGF3YWl0IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCwgYXJyYXkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNFeHRyYWN0KGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbiAgYXdhaXQgYXN5bmNTb21lKGFycmF5LCBhc3luYyAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBhd2FpdCBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuXG4gICAgICBkZWxldGVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGF3YWl0IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jUmVzb2x2ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIGFycmF5QSA9IFsgIC8vL1xuICAgIC4uLmFycmF5QVxuICBdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgaWYgKGFycmF5QUxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBhd2FpdCBhc3luY0ZvckVhY2goYXJyYXlBLCBhc3luYyAoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwYXNzZWQgPSBhd2FpdCBjYWxsYmFjayhlbGVtZW50QSwgaW5kZXgsIGFycmF5QSk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEIgPSBlbGVtZW50QTsgIC8vL1xuXG4gICAgICAgIGFycmF5Qi5wdXNoKGVsZW1lbnRCKTtcblxuICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gIHJlc29sdmVkID0gKGFycmF5QUxlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNGb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0JhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBsZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBhd2FpdCBjYWxsYmFjayhlbGVtZW50LCBpbmRleCwgYXJyYXkpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3luY1NvbWUsXG4gIGFzeW5jRXZlcnksXG4gIGFzeW5jUmVkdWNlLFxuICBhc3luY0ZvckVhY2gsXG4gIGFzeW5jRXh0cmFjdCxcbiAgYXN5bmNSZXNvbHZlLFxuICBhc3luY0ZvcndhcmRzRXZlcnksXG4gIGFzeW5jQmFja3dhcmRzRXZlcnlcbn07XG4iXSwibmFtZXMiOlsiYXN5bmNCYWNrd2FyZHNFdmVyeSIsImFzeW5jRXZlcnkiLCJhc3luY0V4dHJhY3QiLCJhc3luY0ZvckVhY2giLCJhc3luY0ZvcndhcmRzRXZlcnkiLCJhc3luY1JlZHVjZSIsImFzeW5jUmVzb2x2ZSIsImFzeW5jU29tZSIsImZpcnN0IiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJhcnJheSIsImNhbGxiYWNrIiwicmVzdWx0IiwibGVuZ3RoIiwiaW5kZXgiLCJlbGVtZW50IiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJkZWxldGVkRWxlbWVudCIsInVuZGVmaW5lZCIsInBhc3NlZCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJkZWxldGVkRWxlbWVudHMiLCJzcGxpY2UiLCJmaXJzdERlbGV0ZWRFbGVtZW50IiwiYXJyYXlBIiwiYXJyYXlCIiwicmVzb2x2ZWQiLCJhcnJheUFMZW5ndGgiLCJlbGVtZW50QSIsImVsZW1lbnRCIiwicHVzaCIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBc0pzQkE7ZUFBQUE7O1FBOUhBQztlQUFBQTs7UUFnQ0FDO2VBQUFBOztRQXFCQUM7ZUFBQUE7O1FBMERBQztlQUFBQTs7UUE3RkFDO2VBQUFBOztRQTZDQUM7ZUFBQUE7O1FBakZBQztlQUFBQTs7UUErSnRCO2VBQUE7OzsyQkFuSytCO0FBRS9CLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWM7QUFFakMsZUFBZUgsVUFBVUksS0FBSyxFQUFFQyxRQUFRO0lBQzdDLElBQUlDLFNBQVM7SUFFYixNQUFNQyxTQUFTSCxNQUFNRyxNQUFNO0lBRTNCLElBQUssSUFBSUMsUUFBUSxHQUFHQSxRQUFRRCxRQUFRQyxTQUFTLEVBQUc7UUFDOUMsTUFBTUMsVUFBVUwsS0FBSyxDQUFDSSxNQUFNO1FBRTVCRixTQUFTLE1BQU1ELFNBQVNJLFNBQVNELE9BQU9KO1FBRXhDLElBQUlFLFFBQVE7WUFD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