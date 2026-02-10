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
    get fileContextsFromEntries () {
        return fileContextsFromEntries;
    },
    get fileContextsFromJSON () {
        return fileContextsFromJSON;
    }
});
function fileContextsFromJSON(json, fileContexts, releaseContext, FileContextFromFilePath) {
    var fileContextsJSON = json; ///
    fileContextsJSON.forEach(function(fileContextJSON) {
        var filePath = fileContextJSON.filePath, FileContext = FileContextFromFilePath(filePath);
        if (FileContext !== null) {
            var _$json = fileContextJSON, fileContext = FileContext.fromJSON(_$json, releaseContext);
            fileContexts.push(fileContext);
        }
    });
}
function fileContextsFromEntries(entries, fileContexts, releaseContext, FileContextFromFilePath) {
    entries.forEachFile(function(file) {
        var filePath = file.getPath(), FileContext = FileContextFromFilePath(filePath);
        if (FileContext !== null) {
            var fileContext = FileContext.fromFile(file, releaseContext);
            fileContexts.push(fileContext);
        }
    });
}
var _default = {
    fileContextsFromJSON: fileContextsFromJSON,
    fileContextsFromEntries: fileContextsFromEntries
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0LCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCkge1xuICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0ganNvbjsgIC8vL1xuXG4gIGZpbGVDb250ZXh0c0pTT04uZm9yRWFjaCgoZmlsZUNvbnRleHRKU09OKSA9PiB7XG4gICAgY29uc3QgeyBmaWxlUGF0aCB9ID0gZmlsZUNvbnRleHRKU09OLFxuICAgICAgICAgIEZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKEZpbGVDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUNvbnRleHRKU09OLCAvLy9cbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKGVudHJpZXMsIGZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKSB7XG4gIGVudHJpZXMuZm9yRWFjaEZpbGUoKGZpbGUpID0+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIEZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKEZpbGVDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKGZpbGUsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlsZUNvbnRleHRzRnJvbUpTT04sXG4gIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzXG59O1xuIl0sIm5hbWVzIjpbImZpbGVDb250ZXh0c0Zyb21FbnRyaWVzIiwiZmlsZUNvbnRleHRzRnJvbUpTT04iLCJqc29uIiwiZmlsZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHQiLCJGaWxlQ29udGV4dEZyb21GaWxlUGF0aCIsImZpbGVDb250ZXh0c0pTT04iLCJmb3JFYWNoIiwiZmlsZUNvbnRleHRKU09OIiwiZmlsZVBhdGgiLCJGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZnJvbUpTT04iLCJwdXNoIiwiZW50cmllcyIsImZvckVhY2hGaWxlIiwiZmlsZSIsImdldFBhdGgiLCJmcm9tRmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBK0JBO2VBQUE7O1FBYmdCQTtlQUFBQTs7UUFoQkFDO2VBQUFBOzs7QUFBVCxTQUFTQSxxQkFBcUJDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxjQUFjLEVBQUVDLHVCQUF1QjtJQUM5RixJQUFNQyxtQkFBbUJKLE1BQU8sR0FBRztJQUVuQ0ksaUJBQWlCQyxPQUFPLENBQUMsU0FBQ0M7UUFDeEIsSUFBTSxBQUFFQyxXQUFhRCxnQkFBYkMsVUFDRkMsY0FBY0wsd0JBQXdCSTtRQUU1QyxJQUFJQyxnQkFBZ0IsTUFBTTtZQUN4QixJQUFNUixTQUFPTSxpQkFDUEcsY0FBY0QsWUFBWUUsUUFBUSxDQUFDVixRQUFNRTtZQUUvQ0QsYUFBYVUsSUFBSSxDQUFDRjtRQUNwQjtJQUNGO0FBQ0Y7QUFFTyxTQUFTWCx3QkFBd0JjLE9BQU8sRUFBRVgsWUFBWSxFQUFFQyxjQUFjLEVBQUVDLHVCQUF1QjtJQUNwR1MsUUFBUUMsV0FBVyxDQUFDLFNBQUNDO1FBQ25CLElBQU1QLFdBQVdPLEtBQUtDLE9BQU8sSUFDdkJQLGNBQWNMLHdCQUF3Qkk7UUFFNUMsSUFBSUMsZ0JBQWdCLE1BQU07WUFDeEIsSUFBTUMsY0FBY0QsWUFBWVEsUUFBUSxDQUFDRixNQUFNWjtZQUUvQ0QsYUFBYVUsSUFBSSxDQUFDRjtRQUNwQjtJQUNGO0FBQ0Y7SUFFQSxXQUFlO0lBQ2JWLHNCQUFBQTtJQUNBRCx5QkFBQUE7QUFDRiJ9