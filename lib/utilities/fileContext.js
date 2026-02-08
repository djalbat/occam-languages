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
var _default = {
    fileContextsFromJSON: fileContextsFromJSON,
    fileContextsFromEntries: fileContextsFromEntries
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tSlNPTihqc29uLGZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQsIGZpbGVDb250ZXh0RnJvbUpTT04pIHtcbiAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IGpzb247ICAvLy9cblxuICBmaWxlQ29udGV4dHNKU09OLmZvckVhY2goKGZpbGVDb250ZXh0SlNPTikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBmaWxlQ29udGV4dEpTT04sIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHRGcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsZUNvbnRleHRzRnJvbUVudHJpZXMoZW50cmllcywgZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkge1xuICBlbnRyaWVzLmZvckVhY2hGaWxlKChmaWxlKSA9PiB7XG4gICAgY29uc3QgRmlsZUNvbnRleHQgPSBmaWxlLmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZShmaWxlLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpbGVDb250ZXh0c0Zyb21KU09OLFxuICBmaWxlQ29udGV4dHNGcm9tRW50cmllc1xufTtcbiJdLCJuYW1lcyI6WyJmaWxlQ29udGV4dHNGcm9tRW50cmllcyIsImZpbGVDb250ZXh0c0Zyb21KU09OIiwianNvbiIsImZpbGVDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0IiwiZmlsZUNvbnRleHRGcm9tSlNPTiIsImZpbGVDb250ZXh0c0pTT04iLCJmb3JFYWNoIiwiZmlsZUNvbnRleHRKU09OIiwiZmlsZUNvbnRleHQiLCJwdXNoIiwiZW50cmllcyIsImZvckVhY2hGaWxlIiwiZmlsZSIsIkZpbGVDb250ZXh0IiwiZ2V0RmlsZUNvbnRleHQiLCJmcm9tRmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBc0JBO2VBQUE7O1FBVGdCQTtlQUFBQTs7UUFYQUM7ZUFBQUE7OztBQUFULFNBQVNBLHFCQUFxQkMsSUFBSSxFQUFDQyxZQUFZLEVBQUVDLGNBQWMsRUFBRUMsbUJBQW1CO0lBQ3pGLElBQU1DLG1CQUFtQkosTUFBTyxHQUFHO0lBRW5DSSxpQkFBaUJDLE9BQU8sQ0FBQyxTQUFDQztRQUN4QixJQUFNTixTQUFPTSxpQkFDUEMsY0FBY0osb0JBQW9CSCxRQUFNRTtRQUU5Q0QsYUFBYU8sSUFBSSxDQUFDRDtJQUNwQjtBQUNGO0FBRU8sU0FBU1Qsd0JBQXdCVyxPQUFPLEVBQUVSLFlBQVksRUFBRUMsY0FBYztJQUMzRU8sUUFBUUMsV0FBVyxDQUFDLFNBQUNDO1FBQ25CLElBQU1DLGNBQWNELEtBQUtFLGNBQWMsSUFDakNOLGNBQWNLLFlBQVlFLFFBQVEsQ0FBQ0gsTUFBTVQ7UUFFL0NELGFBQWFPLElBQUksQ0FBQ0Q7SUFDcEI7QUFDRjtJQUVBLFdBQWU7SUFDYlIsc0JBQUFBO0lBQ0FELHlCQUFBQTtBQUNGIn0=