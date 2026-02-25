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
    get default () {
        return _default;
    },
    get releaseContextFromJSON () {
        return releaseContextFromJSON;
    },
    get releaseContextFromProject () {
        return releaseContextFromProject;
    },
    get releaseContextFromRelease () {
        return releaseContextFromRelease;
    }
});
var _occammodel = require("occam-model");
var _release = /*#__PURE__*/ _interop_require_default(require("../context/release"));
var _customGrammar = require("../utilities/customGrammar");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isMetaJSONFileValid = _occammodel.metaJSONUtilities.isMetaJSONFileValid;
function releaseContextFromJSON(json, context) {
    var log = context.log, callback = context.callback, name = json.name;
    context = json.context; ///
    var entries = json.entries;
    json = entries; ///
    entries = _occammodel.Entries.fromJSON(json);
    var contextJSON = context; ///
    json = contextJSON; ///
    var customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), releaseContext = _release.default.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
    return releaseContext;
}
function releaseContextFromProject(project, context) {
    var releaseContext = null;
    if (project !== null) {
        var metaJSONFile = project.getMetaJSONFile();
        if (metaJSONFile !== null) {
            var metaJSONFileValid = isMetaJSONFileValid(metaJSONFile);
            if (metaJSONFileValid) {
                var log = context.log, callback = context.callback, name = project.getName(), json = null, entries = project.getEntries(), customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries);
                releaseContext = _release.default.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
            }
        }
    }
    return releaseContext;
}
function releaseContextFromRelease(release, context) {
    var releaseContext = null;
    if (release !== null) {
        var log = context.log, callback = context.callback, name = release.getName(), json = null, entries = release.getEntries(), customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries);
        releaseContext = _release.default.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
    }
    return releaseContext;
}
var _default = {
    releaseContextFromJSON: releaseContextFromJSON,
    releaseContextFromProject: releaseContextFromProject,
    releaseContextFromRelease: releaseContextFromRelease
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVudHJpZXMsIG1ldGFKU09OVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5cbmltcG9ydCBSZWxlYXNlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9yZWxlYXNlXCI7XG5cbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcblxuY29uc3QgeyBpc01ldGFKU09ORmlsZVZhbGlkIH0gPSBtZXRhSlNPTlV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGVhc2VDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IGxvZywgY2FsbGJhY2sgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgbmFtZSB9ID0ganNvbjtcblxuICAoe2NvbnRleHR9ID0ganNvbik7IC8vL1xuXG4gIGxldCB7IGVudHJpZXMgfSA9IGpzb247XG5cbiAganNvbiA9IGVudHJpZXM7IC8vL1xuXG4gIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pO1xuXG4gIGNvbnN0IGNvbnRleHRKU09OID0gY29udGV4dDsgIC8vL1xuXG4gIGpzb24gPSBjb250ZXh0SlNPTjsgLy8vXG5cbiAgY29uc3QgY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyksXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gUmVsZWFzZUNvbnRleHQuZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyKTtcblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0KHByb2plY3QsIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VDb250ZXh0ID0gbnVsbDtcblxuICBpZiAocHJvamVjdCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFKU09ORmlsZSA9IHByb2plY3QuZ2V0TWV0YUpTT05GaWxlKCk7XG5cbiAgICBpZiAobWV0YUpTT05GaWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhSlNPTkZpbGVWYWxpZCA9IGlzTWV0YUpTT05GaWxlVmFsaWQobWV0YUpTT05GaWxlKTtcblxuICAgICAgaWYgKG1ldGFKU09ORmlsZVZhbGlkKSB7XG4gICAgICAgIGNvbnN0IHsgbG9nLCBjYWxsYmFjayB9ID0gY29udGV4dCxcbiAgICAgICAgICAgICAgbmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBqc29uID0gbnVsbCxcbiAgICAgICAgICAgICAgZW50cmllcyA9IHByb2plY3QuZ2V0RW50cmllcygpLFxuICAgICAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKTtcblxuICAgICAgICByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Mb2dOYW1lSlNPTkVudHJpZXNDYWxsYmFja0FuZEN1c3RvbUdyYW1tYXIobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZShyZWxlYXNlLCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlQ29udGV4dCA9IG51bGw7XG5cbiAgaWYgKHJlbGVhc2UgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IGxvZywgY2FsbGJhY2sgfSA9IGNvbnRleHQsXG4gICAgICAgICAgbmFtZSA9IHJlbGVhc2UuZ2V0TmFtZSgpLFxuICAgICAgICAgIGpzb24gPSBudWxsLFxuICAgICAgICAgIGVudHJpZXMgPSByZWxlYXNlLmdldEVudHJpZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJlbGVhc2VDb250ZXh0ID0gUmVsZWFzZUNvbnRleHQuZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyKTtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZWxlYXNlQ29udGV4dEZyb21KU09OLFxuICByZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0LFxuICByZWxlYXNlQ29udGV4dEZyb21SZWxlYXNlXG59O1xuIl0sIm5hbWVzIjpbInJlbGVhc2VDb250ZXh0RnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0IiwicmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZSIsImlzTWV0YUpTT05GaWxlVmFsaWQiLCJtZXRhSlNPTlV0aWxpdGllcyIsImpzb24iLCJjb250ZXh0IiwibG9nIiwiY2FsbGJhY2siLCJuYW1lIiwiZW50cmllcyIsIkVudHJpZXMiLCJmcm9tSlNPTiIsImNvbnRleHRKU09OIiwiY3VzdG9tR3JhbW1hciIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJyZWxlYXNlQ29udGV4dCIsIlJlbGVhc2VDb250ZXh0IiwiZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hciIsInByb2plY3QiLCJtZXRhSlNPTkZpbGUiLCJnZXRNZXRhSlNPTkZpbGUiLCJtZXRhSlNPTkZpbGVWYWxpZCIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwicmVsZWFzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBd0VBO2VBQUE7O1FBOURnQkE7ZUFBQUE7O1FBc0JBQztlQUFBQTs7UUF3QkFDO2VBQUFBOzs7MEJBdEQyQjs4REFFaEI7NkJBRXFCOzs7Ozs7QUFFaEQsSUFBTSxBQUFFQyxzQkFBd0JDLDZCQUFpQixDQUF6Q0Q7QUFFRCxTQUFTSCx1QkFBdUJLLElBQUksRUFBRUMsT0FBTztJQUNsRCxJQUFRQyxNQUFrQkQsUUFBbEJDLEtBQUtDLFdBQWFGLFFBQWJFLFVBQ1AsQUFBRUMsT0FBU0osS0FBVEk7SUFFTkgsVUFBV0QsS0FBWEMsU0FBa0IsR0FBRztJQUV2QixJQUFJLEFBQUVJLFVBQVlMLEtBQVpLO0lBRU5MLE9BQU9LLFNBQVMsR0FBRztJQUVuQkEsVUFBVUMsbUJBQU8sQ0FBQ0MsUUFBUSxDQUFDUDtJQUUzQixJQUFNUSxjQUFjUCxTQUFVLEdBQUc7SUFFakNELE9BQU9RLGFBQWEsR0FBRztJQUV2QixJQUFNQyxnQkFBZ0JDLElBQUFBLDhDQUErQixFQUFDTixNQUFNQyxVQUN0RE0saUJBQWlCQyxnQkFBYyxDQUFDQyw4Q0FBOEMsQ0FBQ1gsS0FBS0UsTUFBTUosTUFBTUssU0FBU0YsVUFBVU07SUFFekgsT0FBT0U7QUFDVDtBQUVPLFNBQVNmLDBCQUEwQmtCLE9BQU8sRUFBRWIsT0FBTztJQUN4RCxJQUFJVSxpQkFBaUI7SUFFckIsSUFBSUcsWUFBWSxNQUFNO1FBQ3BCLElBQU1DLGVBQWVELFFBQVFFLGVBQWU7UUFFNUMsSUFBSUQsaUJBQWlCLE1BQU07WUFDekIsSUFBTUUsb0JBQW9CbkIsb0JBQW9CaUI7WUFFOUMsSUFBSUUsbUJBQW1CO2dCQUNyQixJQUFRZixNQUFrQkQsUUFBbEJDLEtBQUtDLFdBQWFGLFFBQWJFLFVBQ1BDLE9BQU9VLFFBQVFJLE9BQU8sSUFDdEJsQixPQUFPLE1BQ1BLLFVBQVVTLFFBQVFLLFVBQVUsSUFDNUJWLGdCQUFnQkMsSUFBQUEsOENBQStCLEVBQUNOLE1BQU1DO2dCQUU1RE0saUJBQWlCQyxnQkFBYyxDQUFDQyw4Q0FBOEMsQ0FBQ1gsS0FBS0UsTUFBTUosTUFBTUssU0FBU0YsVUFBVU07WUFDckg7UUFDRjtJQUNGO0lBRUEsT0FBT0U7QUFDVDtBQUVPLFNBQVNkLDBCQUEwQnVCLE9BQU8sRUFBRW5CLE9BQU87SUFDeEQsSUFBSVUsaUJBQWlCO0lBRXJCLElBQUlTLFlBQVksTUFBTTtRQUNwQixJQUFRbEIsTUFBa0JELFFBQWxCQyxLQUFLQyxXQUFhRixRQUFiRSxVQUNQQyxPQUFPZ0IsUUFBUUYsT0FBTyxJQUN0QmxCLE9BQU8sTUFDUEssVUFBVWUsUUFBUUQsVUFBVSxJQUM1QlYsZ0JBQWdCQyxJQUFBQSw4Q0FBK0IsRUFBQ04sTUFBTUM7UUFFNURNLGlCQUFpQkMsZ0JBQWMsQ0FBQ0MsOENBQThDLENBQUNYLEtBQUtFLE1BQU1KLE1BQU1LLFNBQVNGLFVBQVVNO0lBQ3JIO0lBRUEsT0FBT0U7QUFDVDtJQUVBLFdBQWU7SUFDYmhCLHdCQUFBQTtJQUNBQywyQkFBQUE7SUFDQUMsMkJBQUFBO0FBQ0YifQ==