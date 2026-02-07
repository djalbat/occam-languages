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
    get fileContextsFromEntries () {
        return fileContextsFromEntries;
    },
    get fileContextsFromJSON () {
        return fileContextsFromJSON;
    }
});
function fileContextsFromJSON(json, fileContexts, releaseContext, fileContextFromJSON) {
    var fileContextsJSON = json; ///
    fileContextsJSON.forEach(function(fileContextJSON) {
        var _$json = fileContextJSON, fileContext = fileContextFromJSON(_$json, releaseContext);
        fileContexts.push(fileContext);
    });
}
function fileContextsFromEntries(entries, fileContexts, releaseContext) {
    entries.forEachFile(function(file) {
        var FileContext = file.getFileContext(), fileContext = FileContext.fromFile(file, releaseContext);
        fileContexts.push(fileContext);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tSlNPTihqc29uLGZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQsIGZpbGVDb250ZXh0RnJvbUpTT04pIHtcbiAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IGpzb247ICAvLy9cblxuICBmaWxlQ29udGV4dHNKU09OLmZvckVhY2goKGZpbGVDb250ZXh0SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBmaWxlQ29udGV4dEpTT04sIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHRGcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsZUNvbnRleHRzRnJvbUVudHJpZXMoZW50cmllcywgZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkge1xuICBlbnRyaWVzLmZvckVhY2hGaWxlKChmaWxlKSA9PiB7XG4gICAgY29uc3QgRmlsZUNvbnRleHQgPSBmaWxlLmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZShmaWxlLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImZpbGVDb250ZXh0c0Zyb21FbnRyaWVzIiwiZmlsZUNvbnRleHRzRnJvbUpTT04iLCJqc29uIiwiZmlsZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHQiLCJmaWxlQ29udGV4dEZyb21KU09OIiwiZmlsZUNvbnRleHRzSlNPTiIsImZvckVhY2giLCJmaWxlQ29udGV4dEpTT04iLCJmaWxlQ29udGV4dCIsInB1c2giLCJlbnRyaWVzIiwiZm9yRWFjaEZpbGUiLCJmaWxlIiwiRmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsImZyb21GaWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFhZ0JBO2VBQUFBOztRQVhBQztlQUFBQTs7O0FBQVQsU0FBU0EscUJBQXFCQyxJQUFJLEVBQUNDLFlBQVksRUFBRUMsY0FBYyxFQUFFQyxtQkFBbUI7SUFDekYsSUFBTUMsbUJBQW1CSixNQUFPLEdBQUc7SUFFbkNJLGlCQUFpQkMsT0FBTyxDQUFDLFNBQUNDO1FBQ3hCLElBQU1OLFNBQU9NLGlCQUNQQyxjQUFjSixvQkFBb0JILFFBQU1FO1FBRTlDRCxhQUFhTyxJQUFJLENBQUNEO0lBQ3BCO0FBQ0Y7QUFFTyxTQUFTVCx3QkFBd0JXLE9BQU8sRUFBRVIsWUFBWSxFQUFFQyxjQUFjO0lBQzNFTyxRQUFRQyxXQUFXLENBQUMsU0FBQ0M7UUFDbkIsSUFBTUMsY0FBY0QsS0FBS0UsY0FBYyxJQUNqQ04sY0FBY0ssWUFBWUUsUUFBUSxDQUFDSCxNQUFNVDtRQUUvQ0QsYUFBYU8sSUFBSSxDQUFDRDtJQUNwQjtBQUNGIn0=