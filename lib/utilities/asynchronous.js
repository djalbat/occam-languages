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
    get asyncEvery () {
        return asyncEvery;
    },
    get asyncForEach () {
        return asyncForEach;
    },
    get asyncReduce () {
        return asyncReduce;
    },
    get asyncSome () {
        return asyncSome;
    }
});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgcmVzdWx0ID0gISFhd2FpdCBjYWxsYmFjayhlbGVtZW50LCBpbmRleCwgYXJyYXkpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHJlc3VsdCA9ICEhYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGF3YWl0IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCwgYXJyYXkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBhd2FpdCBjYWxsYmFjayhlbGVtZW50LCBpbmRleCwgYXJyYXkpO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJhc3luY0V2ZXJ5IiwiYXN5bmNGb3JFYWNoIiwiYXN5bmNSZWR1Y2UiLCJhc3luY1NvbWUiLCJhcnJheSIsImNhbGxiYWNrIiwicmVzdWx0IiwibGVuZ3RoIiwiaW5kZXgiLCJlbGVtZW50IiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW9Cc0JBO2VBQUFBOztRQWdDQUM7ZUFBQUE7O1FBZEFDO2VBQUFBOztRQXBDQUM7ZUFBQUE7OztBQUFmLGVBQWVBLFVBQVVDLEtBQUssRUFBRUMsUUFBUTtJQUM3QyxJQUFJQyxTQUFTO0lBRWIsTUFBTUMsU0FBU0gsTUFBTUcsTUFBTTtJQUUzQixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUQsUUFBUUMsU0FBUyxFQUFHO1FBQzlDLE1BQU1DLFVBQVVMLEtBQUssQ0FBQ0ksTUFBTTtRQUU1QkYsU0FBUyxDQUFDLENBQUMsTUFBTUQsU0FBU0ksU0FBU0QsT0FBT0o7UUFFMUMsSUFBSUUsUUFBUTtZQUNWO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxlQUFlTixXQUFXSSxLQUFLLEVBQUVDLFFBQVE7SUFDOUMsSUFBSUMsU0FBUztJQUViLE1BQU1DLFNBQVNILE1BQU1HLE1BQU07SUFFM0IsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFELFFBQVFDLFNBQVMsRUFBRztRQUM5QyxNQUFNQyxVQUFVTCxLQUFLLENBQUNJLE1BQU07UUFFNUJGLFNBQVMsQ0FBQyxDQUFDLE1BQU1ELFNBQVNJLFNBQVNELE9BQU9KO1FBRTFDLElBQUksQ0FBQ0UsUUFBUTtZQUNYO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxlQUFlSixZQUFZRSxLQUFLLEVBQUVDLFFBQVEsRUFBRUssWUFBWTtJQUM3RCxJQUFJQyxRQUFRRCxjQUFjLEdBQUc7SUFFN0IsTUFBTUgsU0FBU0gsTUFBTUcsTUFBTTtJQUUzQixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUQsUUFBUUMsU0FBUyxFQUFHO1FBQzlDLE1BQU1DLFVBQVVMLEtBQUssQ0FBQ0ksTUFBTTtRQUU1QkcsUUFBUSxNQUFNTixTQUFTTSxPQUFPRixTQUFTRCxPQUFPSjtJQUNoRDtJQUVBLE9BQU9PO0FBQ1Q7QUFFTyxlQUFlVixhQUFhRyxLQUFLLEVBQUVDLFFBQVE7SUFDaEQsTUFBTUUsU0FBU0gsTUFBTUcsTUFBTTtJQUUzQixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUQsUUFBUUMsU0FBUyxFQUFHO1FBQzlDLE1BQU1DLFVBQVVMLEtBQUssQ0FBQ0ksTUFBTTtRQUU1QixNQUFNSCxTQUFTSSxTQUFTRCxPQUFPSjtJQUNqQztBQUNGIn0=