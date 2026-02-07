"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Log;
    }
});
var _constants = require("./constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _LEVELS = _sliced_to_array(_constants.LEVELS, 5), TRACE_LEVEL = _LEVELS[0], DEBUG_LEVEL = _LEVELS[1], INFO_LEVEL = _LEVELS[2], WARNING_LEVEL = _LEVELS[3], ERROR_LEVEL = _LEVELS[4];
var Log = /*#__PURE__*/ function() {
    function Log(messages, logLevel, follow) {
        _class_call_check(this, Log);
        this.messages = messages;
        this.logLevel = logLevel;
        this.follow = follow;
    }
    _create_class(Log, [
        {
            key: "getMessages",
            value: function getMessages() {
                return this.messages;
            }
        },
        {
            key: "getLogLevel",
            value: function getLogLevel() {
                return this.logLevel;
            }
        },
        {
            key: "getFollow",
            value: function getFollow() {
                return this.follow;
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var level = TRACE_LEVEL;
                this.write(level, message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var level = DEBUG_LEVEL;
                this.write(level, message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var level = INFO_LEVEL;
                this.write(level, message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var level = WARNING_LEVEL;
                this.write(level, message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var level = ERROR_LEVEL;
                this.write(level, message);
            }
        },
        {
            key: "write",
            value: function write(level, message) {
                var filePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, lineIndex = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                var levelIndex = _constants.LEVELS.indexOf(level), logLevelIndex = _constants.LEVELS.indexOf(this.logLevel);
                if (levelIndex < logLevelIndex) {
                    return;
                }
                message = formatMessage(level, message, filePath, lineIndex); ///
                this.follow ? console.log(message) : this.messages.push(message);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var messages = null, logLevel = TRACE_LEVEL, follow = true, log = new Log(messages, logLevel, follow);
                return log;
            }
        },
        {
            key: "fromFollowAndLogLevel",
            value: function fromFollowAndLogLevel(follow, logLevel) {
                var messages = follow ? null : [], log = new Log(messages, logLevel, follow);
                return log;
            }
        }
    ]);
    return Log;
}();
function formatMessage(level, message, filePath, lineIndex) {
    var formattedMessage = _constants.EMPTY_STRING;
    var leftPaddedLevel = leftPadLevel(level), upperCaseLeftPaddedLevel = leftPaddedLevel.toUpperCase();
    formattedMessage += "".concat(upperCaseLeftPaddedLevel, ": ");
    if (filePath !== null) {
        formattedMessage += "".concat(filePath, " ");
    }
    if (lineIndex !== null) {
        formattedMessage += "[".concat(lineIndex, "] ");
    }
    if (filePath !== null || lineIndex !== null) {
        formattedMessage += "- ";
    }
    formattedMessage += message;
    message = formattedMessage; ///
    return message;
}
function leftPadLevel(level) {
    var maximumLength = _constants.LEVEL_MAXIMUM_LENGTH, leftPaddedLevel = leftPad(level, maximumLength);
    return leftPaddedLevel;
}
function leftPad(string, maximumLength) {
    var stringLength = string.length, length = maximumLength - stringLength, indent = _constants.SINGLE_SPACE.repeat(length), leftPaddedString = "".concat(indent).concat(string);
    return leftPaddedString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IExFVkVMUywgU0lOR0xFX1NQQUNFLCBFTVBUWV9TVFJJTkcsIExFVkVMX01BWElNVU1fTEVOR1RIIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IFsgVFJBQ0VfTEVWRUwsIERFQlVHX0xFVkVMLCBJTkZPX0xFVkVMLCBXQVJOSU5HX0xFVkVMLCBFUlJPUl9MRVZFTCBdID0gTEVWRUxTO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdykge1xuICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XG4gICAgdGhpcy5mb2xsb3cgPSBmb2xsb3c7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgfVxuXG4gIGdldExvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsO1xuICB9XG5cbiAgZ2V0Rm9sbG93KCkge1xuICAgIHJldHVybiB0aGlzLmZvbGxvdztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGUobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZShsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IExFVkVMUy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gTEVWRUxTLmluZGV4T2YodGhpcy5sb2dMZXZlbCk7XG5cbiAgICBpZiAobGV2ZWxJbmRleCA8IGxvZ0xldmVsSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7ICAvLy9cblxuICAgIHRoaXMuZm9sbG93ID9cbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpIDpcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gbnVsbCxcbiAgICAgICAgICBsb2dMZXZlbCA9IFRSQUNFX0xFVkVMLFxuICAgICAgICAgIGZvbGxvdyA9IHRydWUsXG4gICAgICAgICAgbG9nID0gbmV3IExvZyhtZXNzYWdlcywgbG9nTGV2ZWwsIGZvbGxvdyk7XG5cbiAgICByZXR1cm4gbG9nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb2xsb3dBbmRMb2dMZXZlbChmb2xsb3csIGxvZ0xldmVsKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBmb2xsb3cgP1xuICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICBsb2cgPSBuZXcgTG9nKG1lc3NhZ2VzLCBsb2dMZXZlbCwgZm9sbG93KTtcblxuICAgIHJldHVybiBsb2c7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCkge1xuICBsZXQgZm9ybWF0dGVkTWVzc2FnZSA9IEVNUFRZX1NUUklORztcblxuICBjb25zdCBsZWZ0UGFkZGVkTGV2ZWwgPSBsZWZ0UGFkTGV2ZWwobGV2ZWwpLFxuICAgICAgICB1cHBlckNhc2VMZWZ0UGFkZGVkTGV2ZWwgPSBsZWZ0UGFkZGVkTGV2ZWwudG9VcHBlckNhc2UoKTtcblxuICBmb3JtYXR0ZWRNZXNzYWdlICs9IGAke3VwcGVyQ2FzZUxlZnRQYWRkZWRMZXZlbH06IGA7XG5cbiAgaWYgKGZpbGVQYXRoICE9PSBudWxsKSB7XG4gICAgZm9ybWF0dGVkTWVzc2FnZSArPSBgJHtmaWxlUGF0aH0gYDtcbiAgfVxuXG4gIGlmIChsaW5lSW5kZXggIT09IG51bGwpIHtcbiAgICBmb3JtYXR0ZWRNZXNzYWdlICs9IGBbJHtsaW5lSW5kZXh9XSBgO1xuICB9XG5cbiAgaWYgKChmaWxlUGF0aCAhPT0gbnVsbCkgfHwgKGxpbmVJbmRleCAhPT0gbnVsbCkpIHtcbiAgICBmb3JtYXR0ZWRNZXNzYWdlICs9IGAtIGA7XG4gIH1cblxuICBmb3JtYXR0ZWRNZXNzYWdlICs9IG1lc3NhZ2U7XG5cbiAgbWVzc2FnZSA9IGZvcm1hdHRlZE1lc3NhZ2U7IC8vL1xuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuXG5mdW5jdGlvbiBsZWZ0UGFkTGV2ZWwobGV2ZWwpIHtcbiAgY29uc3QgbWF4aW11bUxlbmd0aCA9IExFVkVMX01BWElNVU1fTEVOR1RILFxuICAgICAgICBsZWZ0UGFkZGVkTGV2ZWwgPSBsZWZ0UGFkKGxldmVsLCBtYXhpbXVtTGVuZ3RoKTtcblxuICByZXR1cm4gbGVmdFBhZGRlZExldmVsO1xufVxuXG5mdW5jdGlvbiBsZWZ0UGFkKHN0cmluZywgbWF4aW11bUxlbmd0aCkge1xuICBjb25zdCBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICBsZW5ndGggPSBtYXhpbXVtTGVuZ3RoIC0gc3RyaW5nTGVuZ3RoLFxuICAgICAgICBpbmRlbnQgPSBTSU5HTEVfU1BBQ0UucmVwZWF0KGxlbmd0aCksXG4gICAgICAgIGxlZnRQYWRkZWRTdHJpbmcgPSBgJHtpbmRlbnR9JHtzdHJpbmd9YDtcblxuICByZXR1cm4gbGVmdFBhZGRlZFN0cmluZztcbn1cblxuIl0sIm5hbWVzIjpbIkxvZyIsIkxFVkVMUyIsIlRSQUNFX0xFVkVMIiwiREVCVUdfTEVWRUwiLCJJTkZPX0xFVkVMIiwiV0FSTklOR19MRVZFTCIsIkVSUk9SX0xFVkVMIiwibWVzc2FnZXMiLCJsb2dMZXZlbCIsImZvbGxvdyIsImdldE1lc3NhZ2VzIiwiZ2V0TG9nTGV2ZWwiLCJnZXRGb2xsb3ciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJsZXZlbCIsIndyaXRlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmlsZVBhdGgiLCJsaW5lSW5kZXgiLCJsZXZlbEluZGV4IiwiaW5kZXhPZiIsImxvZ0xldmVsSW5kZXgiLCJmb3JtYXRNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJmcm9tTm90aGluZyIsImZyb21Gb2xsb3dBbmRMb2dMZXZlbCIsImZvcm1hdHRlZE1lc3NhZ2UiLCJFTVBUWV9TVFJJTkciLCJsZWZ0UGFkZGVkTGV2ZWwiLCJsZWZ0UGFkTGV2ZWwiLCJ1cHBlckNhc2VMZWZ0UGFkZGVkTGV2ZWwiLCJ0b1VwcGVyQ2FzZSIsIm1heGltdW1MZW5ndGgiLCJMRVZFTF9NQVhJTVVNX0xFTkdUSCIsImxlZnRQYWQiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJpbmRlbnQiLCJTSU5HTEVfU1BBQ0UiLCJyZXBlYXQiLCJsZWZ0UGFkZGVkU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt5QkFKb0Q7Ozs7Ozs7Ozs7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