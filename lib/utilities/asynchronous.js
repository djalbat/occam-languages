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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHJlc3VsdCA9IGF3YWl0IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNNYXRjaChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIG1hdGNoZXMgPSBhd2FpdCBhc3luY0JhY2t3YXJkc0V2ZXJ5KGFycmF5QSwgYXN5bmMgKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gYXdhaXQgY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCLCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBhd2FpdCBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jRXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIGF3YWl0IGFzeW5jU29tZShhcnJheSwgYXN5bmMgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBhd2FpdCBjYWxsYmFjayhlbGVtZW50LCBpbmRleCwgYXJyYXkpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1Jlc29sdmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCByZXNvbHZlZDtcblxuICBhcnJheUEgPSBbICAvLy9cbiAgICAuLi5hcnJheUFcbiAgXTtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICAgIGlmIChhcnJheUFMZW5ndGggPT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXG4gICAgYXdhaXQgYXN5bmNGb3JFYWNoKGFycmF5QSwgYXN5bmMgKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcGFzc2VkID0gYXdhaXQgY2FsbGJhY2soZWxlbWVudEEsIGluZGV4LCBhcnJheUEpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRCID0gZWxlbWVudEE7ICAvLy9cblxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50Qik7XG5cbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICByZXNvbHZlZCA9IChhcnJheUFMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jRm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGF3YWl0IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNCYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gbGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXN5bmNTb21lLFxuICBhc3luY0V2ZXJ5LFxuICBhc3luY01hdGNoLFxuICBhc3luY1JlZHVjZSxcbiAgYXN5bmNGb3JFYWNoLFxuICBhc3luY0V4dHJhY3QsXG4gIGFzeW5jUmVzb2x2ZSxcbiAgYXN5bmNGb3J3YXJkc0V2ZXJ5LFxuICBhc3luY0JhY2t3YXJkc0V2ZXJ5XG59O1xuIl0sIm5hbWVzIjpbImFzeW5jQmFja3dhcmRzRXZlcnkiLCJhc3luY0V2ZXJ5IiwiYXN5bmNFeHRyYWN0IiwiYXN5bmNGb3JFYWNoIiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNNYXRjaCIsImFzeW5jUmVkdWNlIiwiYXN5bmNSZXNvbHZlIiwiYXN5bmNTb21lIiwiZmlyc3QiLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiY2FsbGJhY2siLCJyZXN1bHQiLCJsZW5ndGgiLCJpbmRleCIsImVsZW1lbnQiLCJhcnJheUEiLCJhcnJheUIiLCJtYXRjaGVzIiwiYXJyYXlBTGVuZ3RoIiwiYXJyYXlCTGVuZ3RoIiwiZWxlbWVudEEiLCJlbGVtZW50QiIsInBhc3NlZCIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwiZGVsZXRlZEVsZW1lbnQiLCJ1bmRlZmluZWQiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiZGVsZXRlZEVsZW1lbnRzIiwic3BsaWNlIiwiZmlyc3REZWxldGVkRWxlbWVudCIsInJlc29sdmVkIiwicHVzaCIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBMEtzQkE7ZUFBQUE7O1FBbEpBQztlQUFBQTs7UUFvREFDO2VBQUFBOztRQXFCQUM7ZUFBQUE7O1FBMERBQztlQUFBQTs7UUFqSEFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBNkNBQztlQUFBQTs7UUFyR0FDO2VBQUFBOztRQW1MdEI7ZUFBQTs7OzJCQXZMK0I7QUFFL0IsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyx5QkFBYztBQUVqQyxlQUFlSCxVQUFVSSxLQUFLLEVBQUVDLFFBQVE7SUFDN0MsSUFBSUMsU0FBUztJQUViLE1BQU1DLFNBQVNILE1BQU1HLE1BQU07SUFFM0IsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFELFFBQVFDLFNBQVMsRUFBRztRQUM5QyxNQUFNQyxVQUFVTCxLQUFLLENBQUNJLE1BQU07UUFFNUJGLFNBQVMsTUFBTUQsU0FBU0ksU0FBU0QsT0FBT0o7UUFFeEMsSUFBSUUsUUFBUTtZQUNWO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxlQUFlYixXQUFXVyxLQUFLLEVBQUVDLFFBQVE7SUFDOUMsSUFBSUMsU0FBUztJQUViLE1BQU1DLFNBQVNILE1BQU1HLE1BQU07SUFFM0IsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFELFFBQVFDLFNBQVMsRUFBRztRQUM5QyxNQUFNQyxVQUFVTCxLQUFLLENBQUNJLE1BQU07UUFFNUJGLFNBQVMsTUFBTUQsU0FBU0ksU0FBU0QsT0FBT0o7UUFFeEMsSUFBSSxDQUFDRSxRQUFRO1lBQ1g7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLGVBQWVULFdBQVdhLE1BQU0sRUFBRUMsTUFBTSxFQUFFTixRQUFRO0lBQ3ZELElBQUlPLFVBQVU7SUFFZCxNQUFNQyxlQUFlSCxPQUFPSCxNQUFNLEVBQzVCTyxlQUFlSCxPQUFPSixNQUFNO0lBRWxDLElBQUlNLGlCQUFpQkMsY0FBYztRQUNqQ0YsVUFBVSxNQUFNcEIsb0JBQW9Ca0IsUUFBUSxPQUFPSyxVQUFVUDtZQUMzRCxNQUFNUSxXQUFXTCxNQUFNLENBQUNILE1BQU0sRUFDeEJTLFNBQVMsTUFBTVosU0FBU1UsVUFBVUMsVUFBVVI7WUFFbEQsSUFBSVMsUUFBUTtnQkFDVixPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT0w7QUFDVDtBQUVPLGVBQWVkLFlBQVlNLEtBQUssRUFBRUMsUUFBUSxFQUFFYSxZQUFZO0lBQzdELElBQUlDLFFBQVFELGNBQWMsR0FBRztJQUU3QixNQUFNWCxTQUFTSCxNQUFNRyxNQUFNO0lBRTNCLElBQUssSUFBSUMsUUFBUSxHQUFHQSxRQUFRRCxRQUFRQyxTQUFTLEVBQUc7UUFDOUMsTUFBTUMsVUFBVUwsS0FBSyxDQUFDSSxNQUFNO1FBRTVCVyxRQUFRLE1BQU1kLFNBQVNjLE9BQU9WLFNBQVNELE9BQU9KO0lBQ2hEO0lBRUEsT0FBT2U7QUFDVDtBQUVPLGVBQWV6QixhQUFhVSxLQUFLLEVBQUVDLFFBQVE7SUFDaEQsSUFBSWUsaUJBQWlCQztJQUVyQixNQUFNckIsVUFBVUksT0FBTyxPQUFPSyxTQUFTRDtRQUNyQyxNQUFNUyxTQUFTLE1BQU1aLFNBQVNJLFNBQVNEO1FBRXZDLElBQUlTLFFBQVE7WUFDVixNQUFNSyxRQUFRZCxPQUNSZSxjQUFjLEdBQ2RDLGtCQUFrQnBCLE1BQU1xQixNQUFNLENBQUNILE9BQU9DLGNBQ3RDRyxzQkFBc0J6QixNQUFNdUI7WUFFbENKLGlCQUFpQk0scUJBQXNCLEdBQUc7WUFFMUMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUO0FBRU8sZUFBZXpCLGFBQWFTLEtBQUssRUFBRUMsUUFBUTtJQUNoRCxNQUFNRSxTQUFTSCxNQUFNRyxNQUFNO0lBRTNCLElBQUssSUFBSUMsUUFBUSxHQUFHQSxRQUFRRCxRQUFRQyxTQUFTLEVBQUc7UUFDOUMsTUFBTUMsVUFBVUwsS0FBSyxDQUFDSSxNQUFNO1FBRTVCLE1BQU1ILFNBQVNJLFNBQVNELE9BQU9KO0lBQ2pDO0FBQ0Y7QUFFTyxlQUFlTCxhQUFhVyxNQUFNLEVBQUVDLE1BQU0sRUFBRU4sUUFBUTtJQUN6RCxJQUFJc0I7SUFFSmpCLFNBQVM7V0FDSkE7S0FDSjtJQUVELE9BQVM7UUFDUCxNQUFNRyxlQUFlSCxPQUFPSCxNQUFNO1FBRWxDLElBQUlNLGlCQUFpQixHQUFHO1lBQ3RCO1FBQ0Y7UUFFQSxJQUFJYyxXQUFXO1FBRWYsTUFBTWhDLGFBQWFlLFFBQVEsT0FBT0ssVUFBVVA7WUFDMUMsTUFBTVMsU0FBUyxNQUFNWixTQUFTVSxVQUFVUCxPQUFPRTtZQUUvQyxJQUFJTyxRQUFRO2dCQUNWLE1BQU1ELFdBQVdELFVBQVcsR0FBRztnQkFFL0JKLE9BQU9pQixJQUFJLENBQUNaO2dCQUVaVyxXQUFXO1lBQ2I7UUFDRjtRQUVBLElBQUksQ0FBQ0EsVUFBVTtZQUNiO1FBQ0Y7UUFFQXpCLE9BQU9RLFFBQVEsQ0FBQ0s7WUFDZCxNQUFNYyx5QkFBeUJsQixPQUFPbUIsUUFBUSxDQUFDZjtZQUUvQyxJQUFJLENBQUNjLHdCQUF3QjtnQkFDM0IsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE1BQU1oQixlQUFlSCxPQUFPSCxNQUFNO0lBRWxDb0IsV0FBWWQsaUJBQWlCO0lBRTdCLE9BQU9jO0FBQ1Q7QUFFTyxlQUFlL0IsbUJBQW1CUSxLQUFLLEVBQUVDLFFBQVE7SUFDdEQsTUFBTUUsU0FBU0gsTUFBTUcsTUFBTTtJQUUzQixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUQsUUFBUUMsUUFBUztRQUMzQyxNQUFNQyxVQUFVTCxLQUFLLENBQUNJLE1BQU0sRUFDdEJTLFNBQVMsTUFBTVosU0FBU0ksU0FBU0QsT0FBT0o7UUFFOUMsSUFBSSxDQUFDYSxRQUFRO1lBQ1gsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFTyxlQUFlekIsb0JBQW9CWSxLQUFLLEVBQUVDLFFBQVE7SUFDdkQsTUFBTUUsU0FBU0gsTUFBTUcsTUFBTTtJQUUzQixJQUFLLElBQUlDLFFBQVFELFNBQVMsR0FBR0MsU0FBUyxHQUFHQSxRQUFTO1FBQ2hELE1BQU1DLFVBQVVMLEtBQUssQ0FBQ0ksTUFBTSxFQUN0QlMsU0FBUyxNQUFNWixTQUFTSSxTQUFTRCxPQUFPSjtRQUU5QyxJQUFJLENBQUNhLFFBQVE7WUFDWCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU87QUFDVDtNQUVBLFdBQWU7SUFDYmpCO0lBQ0FQO0lBQ0FJO0lBQ0FDO0lBQ0FIO0lBQ0FEO0lBQ0FLO0lBQ0FIO0lBQ0FKO0FBQ0YifQ==