"use strict";

// module DOM.File.FileList

exports.length = function (fileList) { return fileList.length; };

exports.item = function (index) {
  return function (fileList) {
    return fileList.item(index);
  };
};
