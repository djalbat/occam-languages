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
    const fileContextsJSON = json; ///
    fileContextsJSON.forEach((fileContextJSON)=>{
        const { filePath } = fileContextJSON, FileContext = FileContextFromFilePath(filePath);
        if (FileContext !== null) {
            const json = fileContextJSON, fileContext = FileContext.fromJSON(json, releaseContext);
            fileContexts.push(fileContext);
            fileContext.initialise(json);
        }
    });
}
function fileContextsFromEntries(entries, fileContexts, releaseContext, FileContextFromFilePath) {
    entries.forEachFile((file)=>{
        const filePath = file.getPath(), FileContext = FileContextFromFilePath(filePath);
        if (FileContext !== null) {
            const fileContext = FileContext.fromFile(file, releaseContext);
            fileContexts.push(fileContext);
        }
    });
}
const _default = {
    fileContextsFromJSON,
    fileContextsFromEntries
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0LCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCkge1xuICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0ganNvbjsgIC8vL1xuXG4gIGZpbGVDb250ZXh0c0pTT04uZm9yRWFjaCgoZmlsZUNvbnRleHRKU09OKSA9PiB7XG4gICAgY29uc3QgeyBmaWxlUGF0aCB9ID0gZmlsZUNvbnRleHRKU09OLFxuICAgICAgICAgIEZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKEZpbGVDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUNvbnRleHRKU09OLCAvLy9cbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKGVudHJpZXMsIGZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKSB7XG4gIGVudHJpZXMuZm9yRWFjaEZpbGUoKGZpbGUpID0+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIEZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKEZpbGVDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKGZpbGUsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlsZUNvbnRleHRzRnJvbUpTT04sXG4gIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzXG59O1xuIl0sIm5hbWVzIjpbImZpbGVDb250ZXh0c0Zyb21FbnRyaWVzIiwiZmlsZUNvbnRleHRzRnJvbUpTT04iLCJqc29uIiwiZmlsZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHQiLCJGaWxlQ29udGV4dEZyb21GaWxlUGF0aCIsImZpbGVDb250ZXh0c0pTT04iLCJmb3JFYWNoIiwiZmlsZUNvbnRleHRKU09OIiwiZmlsZVBhdGgiLCJGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZnJvbUpTT04iLCJwdXNoIiwiaW5pdGlhbGlzZSIsImVudHJpZXMiLCJmb3JFYWNoRmlsZSIsImZpbGUiLCJnZXRQYXRoIiwiZnJvbUZpbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWlDQTtlQUFBOztRQWJnQkE7ZUFBQUE7O1FBbEJBQztlQUFBQTs7O0FBQVQsU0FBU0EscUJBQXFCQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsY0FBYyxFQUFFQyx1QkFBdUI7SUFDOUYsTUFBTUMsbUJBQW1CSixNQUFPLEdBQUc7SUFFbkNJLGlCQUFpQkMsT0FBTyxDQUFDLENBQUNDO1FBQ3hCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdELGlCQUNmRSxjQUFjTCx3QkFBd0JJO1FBRTVDLElBQUlDLGdCQUFnQixNQUFNO1lBQ3hCLE1BQU1SLE9BQU9NLGlCQUNQRyxjQUFjRCxZQUFZRSxRQUFRLENBQUNWLE1BQU1FO1lBRS9DRCxhQUFhVSxJQUFJLENBQUNGO1lBRWxCQSxZQUFZRyxVQUFVLENBQUNaO1FBQ3pCO0lBQ0Y7QUFDRjtBQUVPLFNBQVNGLHdCQUF3QmUsT0FBTyxFQUFFWixZQUFZLEVBQUVDLGNBQWMsRUFBRUMsdUJBQXVCO0lBQ3BHVSxRQUFRQyxXQUFXLENBQUMsQ0FBQ0M7UUFDbkIsTUFBTVIsV0FBV1EsS0FBS0MsT0FBTyxJQUN2QlIsY0FBY0wsd0JBQXdCSTtRQUU1QyxJQUFJQyxnQkFBZ0IsTUFBTTtZQUN4QixNQUFNQyxjQUFjRCxZQUFZUyxRQUFRLENBQUNGLE1BQU1iO1lBRS9DRCxhQUFhVSxJQUFJLENBQUNGO1FBQ3BCO0lBQ0Y7QUFDRjtNQUVBLFdBQWU7SUFDYlY7SUFDQUQ7QUFDRiJ9