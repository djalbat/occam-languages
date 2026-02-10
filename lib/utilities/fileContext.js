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
        var filePath = fileContextJSON.filePath, _$json = fileContextJSON, FileContext = FileContextFromFilePath(filePath), fileContext = FileContext.fromJSON(_$json, releaseContext);
        fileContexts.push(fileContext);
    });
}
function fileContextsFromEntries(entries, fileContexts, releaseContext, FileContextFromFilePath) {
    entries.forEachFile(function(file) {
        var filePath = file.getPath(), FileContext = FileContextFromFilePath(filePath), fileContext = FileContext.fromFile(file, releaseContext);
        fileContexts.push(fileContext);
    });
}
var _default = {
    fileContextsFromJSON: fileContextsFromJSON,
    fileContextsFromEntries: fileContextsFromEntries
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0LCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCkge1xuICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0ganNvbjsgIC8vL1xuXG4gIGZpbGVDb250ZXh0c0pTT04uZm9yRWFjaCgoZmlsZUNvbnRleHRKU09OKSA9PiB7XG4gICAgY29uc3QgeyBmaWxlUGF0aCB9ID0gZmlsZUNvbnRleHRKU09OLFxuICAgICAgICAgIGpzb24gPSBmaWxlQ29udGV4dEpTT04sIC8vL1xuICAgICAgICAgIEZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKGVudHJpZXMsIGZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKSB7XG4gIGVudHJpZXMuZm9yRWFjaEZpbGUoKGZpbGUpID0+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIEZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGUoZmlsZSwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaWxlQ29udGV4dHNGcm9tSlNPTixcbiAgZmlsZUNvbnRleHRzRnJvbUVudHJpZXNcbn07XG4iXSwibmFtZXMiOlsiZmlsZUNvbnRleHRzRnJvbUVudHJpZXMiLCJmaWxlQ29udGV4dHNGcm9tSlNPTiIsImpzb24iLCJmaWxlQ29udGV4dHMiLCJyZWxlYXNlQ29udGV4dCIsIkZpbGVDb250ZXh0RnJvbUZpbGVQYXRoIiwiZmlsZUNvbnRleHRzSlNPTiIsImZvckVhY2giLCJmaWxlQ29udGV4dEpTT04iLCJmaWxlUGF0aCIsIkZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJmcm9tSlNPTiIsInB1c2giLCJlbnRyaWVzIiwiZm9yRWFjaEZpbGUiLCJmaWxlIiwiZ2V0UGF0aCIsImZyb21GaWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF5QkE7ZUFBQTs7UUFWZ0JBO2VBQUFBOztRQWJBQztlQUFBQTs7O0FBQVQsU0FBU0EscUJBQXFCQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsY0FBYyxFQUFFQyx1QkFBdUI7SUFDOUYsSUFBTUMsbUJBQW1CSixNQUFPLEdBQUc7SUFFbkNJLGlCQUFpQkMsT0FBTyxDQUFDLFNBQUNDO1FBQ3hCLElBQU0sQUFBRUMsV0FBYUQsZ0JBQWJDLFVBQ0ZQLFNBQU9NLGlCQUNQRSxjQUFjTCx3QkFBd0JJLFdBQ3RDRSxjQUFjRCxZQUFZRSxRQUFRLENBQUNWLFFBQU1FO1FBRS9DRCxhQUFhVSxJQUFJLENBQUNGO0lBQ3BCO0FBQ0Y7QUFFTyxTQUFTWCx3QkFBd0JjLE9BQU8sRUFBRVgsWUFBWSxFQUFFQyxjQUFjLEVBQUVDLHVCQUF1QjtJQUNwR1MsUUFBUUMsV0FBVyxDQUFDLFNBQUNDO1FBQ25CLElBQU1QLFdBQVdPLEtBQUtDLE9BQU8sSUFDdkJQLGNBQWNMLHdCQUF3QkksV0FDdENFLGNBQWNELFlBQVlRLFFBQVEsQ0FBQ0YsTUFBTVo7UUFFL0NELGFBQWFVLElBQUksQ0FBQ0Y7SUFDcEI7QUFDRjtJQUVBLFdBQWU7SUFDYlYsc0JBQUFBO0lBQ0FELHlCQUFBQTtBQUNGIn0=