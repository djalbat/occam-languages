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
const _occammodel = require("occam-model");
const _release = /*#__PURE__*/ _interop_require_default(require("../context/release"));
const _customGrammar = require("../utilities/customGrammar");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { isMetaJSONFileValid } = _occammodel.metaJSONUtilities;
function releaseContextFromJSON(json, context) {
    const { log, callback } = context, { name } = json;
    let { entries } = json;
    ({ context } = json); ///
    json = entries; ///
    entries = _occammodel.Entries.fromJSON(json);
    const contextJSON = context; ///
    json = contextJSON; ///
    const customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), releaseContext = _release.default.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
    return releaseContext;
}
function releaseContextFromProject(project, context) {
    let releaseContext = null;
    if (project !== null) {
        const metaJSONFile = project.getMetaJSONFile();
        if (metaJSONFile !== null) {
            const metaJSONFileValid = isMetaJSONFileValid(metaJSONFile);
            if (metaJSONFileValid) {
                const { log, callback } = context, name = project.getName(), json = null, entries = project.getEntries(), customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries);
                releaseContext = _release.default.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
            }
        }
    }
    return releaseContext;
}
function releaseContextFromRelease(release, context) {
    let releaseContext = null;
    if (release !== null) {
        const { log, callback } = context, name = release.getName(), json = null, entries = release.getEntries(), customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries);
        releaseContext = _release.default.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
    }
    return releaseContext;
}
const _default = {
    releaseContextFromJSON,
    releaseContextFromProject,
    releaseContextFromRelease,
    releaseContextFromDependency
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVudHJpZXMsIG1ldGFKU09OVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5cbmltcG9ydCBSZWxlYXNlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9yZWxlYXNlXCI7XG5cbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcblxuY29uc3QgeyBpc01ldGFKU09ORmlsZVZhbGlkIH0gPSBtZXRhSlNPTlV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGVhc2VDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IGxvZywgY2FsbGJhY2sgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgbmFtZSB9ID0ganNvbjtcblxuICBsZXQgeyBlbnRyaWVzIH0gPSBqc29uO1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTsgLy8vXG5cbiAganNvbiA9IGVudHJpZXM7IC8vL1xuXG4gIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pO1xuXG4gIGNvbnN0IGNvbnRleHRKU09OID0gY29udGV4dDsgIC8vL1xuXG4gIGpzb24gPSBjb250ZXh0SlNPTjsgLy8vXG5cbiAgY29uc3QgY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyksXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gUmVsZWFzZUNvbnRleHQuZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyKTtcblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0KHByb2plY3QsIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VDb250ZXh0ID0gbnVsbDtcblxuICBpZiAocHJvamVjdCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFKU09ORmlsZSA9IHByb2plY3QuZ2V0TWV0YUpTT05GaWxlKCk7XG5cbiAgICBpZiAobWV0YUpTT05GaWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhSlNPTkZpbGVWYWxpZCA9IGlzTWV0YUpTT05GaWxlVmFsaWQobWV0YUpTT05GaWxlKTtcblxuICAgICAgaWYgKG1ldGFKU09ORmlsZVZhbGlkKSB7XG4gICAgICAgIGNvbnN0IHsgbG9nLCBjYWxsYmFjayB9ID0gY29udGV4dCxcbiAgICAgICAgICAgICAgbmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBqc29uID0gbnVsbCxcbiAgICAgICAgICAgICAgZW50cmllcyA9IHByb2plY3QuZ2V0RW50cmllcygpLFxuICAgICAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKTtcblxuICAgICAgICByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Mb2dOYW1lSlNPTkVudHJpZXNDYWxsYmFja0FuZEN1c3RvbUdyYW1tYXIobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZShyZWxlYXNlLCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlQ29udGV4dCA9IG51bGw7XG5cbiAgaWYgKHJlbGVhc2UgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IGxvZywgY2FsbGJhY2sgfSA9IGNvbnRleHQsXG4gICAgICAgICAgbmFtZSA9IHJlbGVhc2UuZ2V0TmFtZSgpLFxuICAgICAgICAgIGpzb24gPSBudWxsLFxuICAgICAgICAgIGVudHJpZXMgPSByZWxlYXNlLmdldEVudHJpZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJlbGVhc2VDb250ZXh0ID0gUmVsZWFzZUNvbnRleHQuZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyKTtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZWxlYXNlQ29udGV4dEZyb21KU09OLFxuICByZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0LFxuICByZWxlYXNlQ29udGV4dEZyb21SZWxlYXNlLFxuICByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5XG59O1xuIl0sIm5hbWVzIjpbInJlbGVhc2VDb250ZXh0RnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0IiwicmVsZWFzZUNvbnRleHRGcm9tUmVsZWFzZSIsImlzTWV0YUpTT05GaWxlVmFsaWQiLCJtZXRhSlNPTlV0aWxpdGllcyIsImpzb24iLCJjb250ZXh0IiwibG9nIiwiY2FsbGJhY2siLCJuYW1lIiwiZW50cmllcyIsIkVudHJpZXMiLCJmcm9tSlNPTiIsImNvbnRleHRKU09OIiwiY3VzdG9tR3JhbW1hciIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJyZWxlYXNlQ29udGV4dCIsIlJlbGVhc2VDb250ZXh0IiwiZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hciIsInByb2plY3QiLCJtZXRhSlNPTkZpbGUiLCJnZXRNZXRhSlNPTkZpbGUiLCJtZXRhSlNPTkZpbGVWYWxpZCIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwicmVsZWFzZSIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdFQTtlQUFBOztRQTlEZ0JBO2VBQUFBOztRQXNCQUM7ZUFBQUE7O1FBd0JBQztlQUFBQTs7OzRCQXREMkI7Z0VBRWhCOytCQUVxQjs7Ozs7O0FBRWhELE1BQU0sRUFBRUMsbUJBQW1CLEVBQUUsR0FBR0MsNkJBQWlCO0FBRTFDLFNBQVNKLHVCQUF1QkssSUFBSSxFQUFFQyxPQUFPO0lBQ2xELE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxRQUFRLEVBQUUsR0FBR0YsU0FDcEIsRUFBRUcsSUFBSSxFQUFFLEdBQUdKO0lBRWpCLElBQUksRUFBRUssT0FBTyxFQUFFLEdBQUdMO0lBRWpCLENBQUEsRUFBQ0MsT0FBTyxFQUFDLEdBQUdELElBQUcsR0FBSSxHQUFHO0lBRXZCQSxPQUFPSyxTQUFTLEdBQUc7SUFFbkJBLFVBQVVDLG1CQUFPLENBQUNDLFFBQVEsQ0FBQ1A7SUFFM0IsTUFBTVEsY0FBY1AsU0FBVSxHQUFHO0lBRWpDRCxPQUFPUSxhQUFhLEdBQUc7SUFFdkIsTUFBTUMsZ0JBQWdCQyxJQUFBQSw4Q0FBK0IsRUFBQ04sTUFBTUMsVUFDdERNLGlCQUFpQkMsZ0JBQWMsQ0FBQ0MsOENBQThDLENBQUNYLEtBQUtFLE1BQU1KLE1BQU1LLFNBQVNGLFVBQVVNO0lBRXpILE9BQU9FO0FBQ1Q7QUFFTyxTQUFTZiwwQkFBMEJrQixPQUFPLEVBQUViLE9BQU87SUFDeEQsSUFBSVUsaUJBQWlCO0lBRXJCLElBQUlHLFlBQVksTUFBTTtRQUNwQixNQUFNQyxlQUFlRCxRQUFRRSxlQUFlO1FBRTVDLElBQUlELGlCQUFpQixNQUFNO1lBQ3pCLE1BQU1FLG9CQUFvQm5CLG9CQUFvQmlCO1lBRTlDLElBQUlFLG1CQUFtQjtnQkFDckIsTUFBTSxFQUFFZixHQUFHLEVBQUVDLFFBQVEsRUFBRSxHQUFHRixTQUNwQkcsT0FBT1UsUUFBUUksT0FBTyxJQUN0QmxCLE9BQU8sTUFDUEssVUFBVVMsUUFBUUssVUFBVSxJQUM1QlYsZ0JBQWdCQyxJQUFBQSw4Q0FBK0IsRUFBQ04sTUFBTUM7Z0JBRTVETSxpQkFBaUJDLGdCQUFjLENBQUNDLDhDQUE4QyxDQUFDWCxLQUFLRSxNQUFNSixNQUFNSyxTQUFTRixVQUFVTTtZQUNySDtRQUNGO0lBQ0Y7SUFFQSxPQUFPRTtBQUNUO0FBRU8sU0FBU2QsMEJBQTBCdUIsT0FBTyxFQUFFbkIsT0FBTztJQUN4RCxJQUFJVSxpQkFBaUI7SUFFckIsSUFBSVMsWUFBWSxNQUFNO1FBQ3BCLE1BQU0sRUFBRWxCLEdBQUcsRUFBRUMsUUFBUSxFQUFFLEdBQUdGLFNBQ3BCRyxPQUFPZ0IsUUFBUUYsT0FBTyxJQUN0QmxCLE9BQU8sTUFDUEssVUFBVWUsUUFBUUQsVUFBVSxJQUM1QlYsZ0JBQWdCQyxJQUFBQSw4Q0FBK0IsRUFBQ04sTUFBTUM7UUFFNURNLGlCQUFpQkMsZ0JBQWMsQ0FBQ0MsOENBQThDLENBQUNYLEtBQUtFLE1BQU1KLE1BQU1LLFNBQVNGLFVBQVVNO0lBQ3JIO0lBRUEsT0FBT0U7QUFDVDtNQUVBLFdBQWU7SUFDYmhCO0lBQ0FDO0lBQ0FDO0lBQ0F3QjtBQUNGIn0=