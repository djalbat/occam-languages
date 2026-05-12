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
    get asyncMatch () {
        return asyncMatch;
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
        result = !!await callback(element, index, array);
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
        result = !!await callback(element, index, array);
        if (!result) {
            break;
        }
    }
    return result;
}
async function asyncMatch(arrayA, arrayB, callback) {
    let matches = false;
    const arrayALength = arrayA.length, arrayBLength = arrayB.length;
    if (arrayALength === arrayBLength) {
        matches = await asyncBackwardsEvery(arrayA, async (elementA, index)=>{
            const elementB = arrayB[index], passed = await callback(elementA, elementB, index);
            if (passed) {
                return true;
            }
        });
    }
    return matches;
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
    asyncMatch,
    asyncReduce,
    asyncForEach,
    asyncExtract,
    asyncResolve,
    asyncForwardsEvery,
    asyncBackwardsEvery
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHJlc3VsdCA9ICEhYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICByZXN1bHQgPSAhIWF3YWl0IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jTWF0Y2goYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBtYXRjaGVzID0gYXdhaXQgYXN5bmNCYWNrd2FyZHNFdmVyeShhcnJheUEsIGFzeW5jIChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlCW2luZGV4XSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGF3YWl0IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50QiwgaW5kZXgpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gYXdhaXQgY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0V4dHJhY3QoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICBhd2FpdCBhc3luY1NvbWUoYXJyYXksIGFzeW5jIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGF3YWl0IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG5cbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZXNvbHZlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgcmVzb2x2ZWQ7XG5cbiAgYXJyYXlBID0gWyAgLy8vXG4gICAgLi4uYXJyYXlBXG4gIF07XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGF3YWl0IGFzeW5jRm9yRWFjaChhcnJheUEsIGFzeW5jIChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IGF3YWl0IGNhbGxiYWNrKGVsZW1lbnRBLCBpbmRleCwgYXJyYXlBKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50QiA9IGVsZW1lbnRBOyAgLy8vXG5cbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudEIpO1xuXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgcmVzb2x2ZWQgPSAoYXJyYXlBTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0ZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBhd2FpdCBjYWxsYmFjayhlbGVtZW50LCBpbmRleCwgYXJyYXkpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jQmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGF3YWl0IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzeW5jU29tZSxcbiAgYXN5bmNFdmVyeSxcbiAgYXN5bmNNYXRjaCxcbiAgYXN5bmNSZWR1Y2UsXG4gIGFzeW5jRm9yRWFjaCxcbiAgYXN5bmNFeHRyYWN0LFxuICBhc3luY1Jlc29sdmUsXG4gIGFzeW5jRm9yd2FyZHNFdmVyeSxcbiAgYXN5bmNCYWNrd2FyZHNFdmVyeVxufTtcbiJdLCJuYW1lcyI6WyJhc3luY0JhY2t3YXJkc0V2ZXJ5IiwiYXN5bmNFdmVyeSIsImFzeW5jRXh0cmFjdCIsImFzeW5jRm9yRWFjaCIsImFzeW5jRm9yd2FyZHNFdmVyeSIsImFzeW5jTWF0Y2giLCJhc3luY1JlZHVjZSIsImFzeW5jUmVzb2x2ZSIsImFzeW5jU29tZSIsImZpcnN0IiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJhcnJheSIsImNhbGxiYWNrIiwicmVzdWx0IiwibGVuZ3RoIiwiaW5kZXgiLCJlbGVtZW50IiwiYXJyYXlBIiwiYXJyYXlCIiwibWF0Y2hlcyIsImFycmF5QUxlbmd0aCIsImFycmF5Qkxlbmd0aCIsImVsZW1lbnRBIiwiZWxlbWVudEIiLCJwYXNzZWQiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsImRlbGV0ZWRFbGVtZW50IiwidW5kZWZpbmVkIiwic3RhcnQiLCJkZWxldGVDb3VudCIsImRlbGV0ZWRFbGVtZW50cyIsInNwbGljZSIsImZpcnN0RGVsZXRlZEVsZW1lbnQiLCJyZXNvbHZlZCIsInB1c2giLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTBLc0JBO2VBQUFBOztRQWxKQUM7ZUFBQUE7O1FBb0RBQztlQUFBQTs7UUFxQkFDO2VBQUFBOztRQTBEQUM7ZUFBQUE7O1FBakhBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQTZDQUM7ZUFBQUE7O1FBckdBQztlQUFBQTs7UUFtTHRCO2VBQUE7OzsyQkF2TCtCO0FBRS9CLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWM7QUFFakMsZUFBZUgsVUFBVUksS0FBSyxFQUFFQyxRQUFRO0lBQzdDLElBQUlDLFNBQVM7SUFFYixNQUFNQyxTQUFTSCxNQUFNRyxNQUFNO0lBRTNCLElBQUssSUFBSUMsUUFBUSxHQUFHQSxRQUFRRCxRQUFRQyxTQUFTLEVBQUc7UUFDOUMsTUFBTUMsVUFBVUwsS0FBSyxDQUFDSSxNQUFNO1FBRTVCRixTQUFTLENBQUMsQ0FBQyxNQUFNRCxTQUFTSSxTQUFTRCxPQUFPSjtRQUUxQyxJQUFJRSxRQUFRO1lBQ1Y7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLGVBQWViLFdBQVdXLEtBQUssRUFBRUMsUUFBUTtJQUM5QyxJQUFJQyxTQUFTO0lBRWIsTUFBTUMsU0FBU0gsTUFBTUcsTUFBTTtJQUUzQixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUQsUUFBUUMsU0FBUyxFQUFHO1FBQzlDLE1BQU1DLFVBQVVMLEtBQUssQ0FBQ0ksTUFBTTtRQUU1QkYsU0FBUyxDQUFDLENBQUMsTUFBTUQsU0FBU0ksU0FBU0QsT0FBT0o7UUFFMUMsSUFBSSxDQUFDRSxRQUFRO1lBQ1g7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLGVBQWVULFdBQVdhLE1BQU0sRUFBRUMsTUFBTSxFQUFFTixRQUFRO0lBQ3ZELElBQUlPLFVBQVU7SUFFZCxNQUFNQyxlQUFlSCxPQUFPSCxNQUFNLEVBQzVCTyxlQUFlSCxPQUFPSixNQUFNO0lBRWxDLElBQUlNLGlCQUFpQkMsY0FBYztRQUNqQ0YsVUFBVSxNQUFNcEIsb0JBQW9Ca0IsUUFBUSxPQUFPSyxVQUFVUDtZQUMzRCxNQUFNUSxXQUFXTCxNQUFNLENBQUNILE1BQU0sRUFDeEJTLFNBQVMsTUFBTVosU0FBU1UsVUFBVUMsVUFBVVI7WUFFbEQsSUFBSVMsUUFBUTtnQkFDVixPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT0w7QUFDVDtBQUVPLGVBQWVkLFlBQVlNLEtBQUssRUFBRUMsUUFBUSxFQUFFYSxZQUFZO0lBQzdELElBQUlDLFFBQVFELGNBQWMsR0FBRztJQUU3QixNQUFNWCxTQUFTSCxNQUFNRyxNQUFNO0lBRTNCLElBQUssSUFBSUMsUUFBUSxHQUFHQSxRQUFRRCxRQUFRQyxTQUFTLEVBQUc7UUFDOUMsTUFBTUMsVUFBVUwsS0FBSyxDQUFDSSxNQUFNO1FBRTVCVyxRQUFRLE1BQU1kLFNBQVNjLE9BQU9WLFNBQVNELE9BQU9KO0lBQ2hEO0lBRUEsT0FBT2U7QUFDVDtBQUVPLGVBQWV6QixhQUFhVSxLQUFLLEVBQUVDLFFBQVE7SUFDaEQsSUFBSWUsaUJBQWlCQztJQUVyQixNQUFNckIsVUFBVUksT0FBTyxPQUFPSyxTQUFTRDtRQUNyQyxNQUFNUyxTQUFTLE1BQU1aLFNBQVNJLFNBQVNEO1FBRXZDLElBQUlTLFFBQVE7WUFDVixNQUFNSyxRQUFRZCxPQUNSZSxjQUFjLEdBQ2RDLGtCQUFrQnBCLE1BQU1xQixNQUFNLENBQUNILE9BQU9DLGNBQ3RDRyxzQkFBc0J6QixNQUFNdUI7WUFFbENKLGlCQUFpQk0scUJBQXNCLEdBQUc7WUFFMUMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUO0FBRU8sZUFBZXpCLGFBQWFTLEtBQUssRUFBRUMsUUFBUTtJQUNoRCxNQUFNRSxTQUFTSCxNQUFNRyxNQUFNO0lBRTNCLElBQUssSUFBSUMsUUFBUSxHQUFHQSxRQUFRRCxRQUFRQyxTQUFTLEVBQUc7UUFDOUMsTUFBTUMsVUFBVUwsS0FBSyxDQUFDSSxNQUFNO1FBRTVCLE1BQU1ILFNBQVNJLFNBQVNELE9BQU9KO0lBQ2pDO0FBQ0Y7QUFFTyxlQUFlTCxhQUFhVyxNQUFNLEVBQUVDLE1BQU0sRUFBRU4sUUFBUTtJQUN6RCxJQUFJc0I7SUFFSmpCLFNBQVM7V0FDSkE7S0FDSjtJQUVELE9BQVM7UUFDUCxNQUFNRyxlQUFlSCxPQUFPSCxNQUFNO1FBRWxDLElBQUlNLGlCQUFpQixHQUFHO1lBQ3RCO1FBQ0Y7UUFFQSxJQUFJYyxXQUFXO1FBRWYsTUFBTWhDLGFBQWFlLFFBQVEsT0FBT0ssVUFBVVA7WUFDMUMsTUFBTVMsU0FBUyxNQUFNWixTQUFTVSxVQUFVUCxPQUFPRTtZQUUvQyxJQUFJTyxRQUFRO2dCQUNWLE1BQU1ELFdBQVdELFVBQVcsR0FBRztnQkFFL0JKLE9BQU9pQixJQUFJLENBQUNaO2dCQUVaVyxXQUFXO1lBQ2I7UUFDRjtRQUVBLElBQUksQ0FBQ0EsVUFBVTtZQUNiO1FBQ0Y7UUFFQXpCLE9BQU9RLFFBQVEsQ0FBQ0s7WUFDZCxNQUFNYyx5QkFBeUJsQixPQUFPbUIsUUFBUSxDQUFDZjtZQUUvQyxJQUFJLENBQUNjLHdCQUF3QjtnQkFDM0IsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE1BQU1oQixlQUFlSCxPQUFPSCxNQUFNO0lBRWxDb0IsV0FBWWQsaUJBQWlCO0lBRTdCLE9BQU9jO0FBQ1Q7QUFFTyxlQUFlL0IsbUJBQW1CUSxLQUFLLEVBQUVDLFFBQVE7SUFDdEQsTUFBTUUsU0FBU0gsTUFBTUcsTUFBTTtJQUUzQixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUQsUUFBUUMsUUFBUztRQUMzQyxNQUFNQyxVQUFVTCxLQUFLLENBQUNJLE1BQU0sRUFDdEJTLFNBQVMsTUFBTVosU0FBU0ksU0FBU0QsT0FBT0o7UUFFOUMsSUFBSSxDQUFDYSxRQUFRO1lBQ1gsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFTyxlQUFlekIsb0JBQW9CWSxLQUFLLEVBQUVDLFFBQVE7SUFDdkQsTUFBTUUsU0FBU0gsTUFBTUcsTUFBTTtJQUUzQixJQUFLLElBQUlDLFFBQVFELFNBQVMsR0FBR0MsU0FBUyxHQUFHQSxRQUFTO1FBQ2hELE1BQU1DLFVBQVVMLEtBQUssQ0FBQ0ksTUFBTSxFQUN0QlMsU0FBUyxNQUFNWixTQUFTSSxTQUFTRCxPQUFPSjtRQUU5QyxJQUFJLENBQUNhLFFBQVE7WUFDWCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU87QUFDVDtNQUVBLFdBQWU7SUFDYmpCO0lBQ0FQO0lBQ0FJO0lBQ0FDO0lBQ0FIO0lBQ0FEO0lBQ0FLO0lBQ0FIO0lBQ0FKO0FBQ0YifQ==