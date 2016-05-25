"use strict";

// module DOM.Node.Node

var getEffProp = function (name) {
  return function (node) {
    return function () {
      return node[name];
    };
  };
};

exports.nodeTypeIndex = function (node) {
  return node.nodeType;
};

exports.nodeName = function (node) {
  return node.nodeName;
};

exports.baseURI = getEffProp("baseURI");

exports.ownerDocument = getEffProp("ownerDocument");

exports.parentNode = getEffProp("parentNode");

exports.parentElement = getEffProp("parentElement");

exports.hasChildNodes = function (node) {
  return function () {
    return node.hasChildNodes();
  };
};

exports.childNodes = getEffProp("childNodes");

exports.firstChild = getEffProp("firstChild");

exports.lastChild = getEffProp("lastChild");

exports.previousSibling = getEffProp("previousSibling");

exports.nextSibling = getEffProp("nextSibling");

exports.nodeValue = getEffProp("nodeValue");

exports.setNodeValue = function (value) {
  return function (node) {
    return function () {
      node.nodeValue = value;
      return {};
    };
  };
};

exports.textContent = getEffProp("textContent");

exports.setTextContent = function (value) {
  return function (node) {
    return function () {
      node.textContent = value;
      return {};
    };
  };
};

exports.normalize = function (node) {
  return function () {
    node.normalize();
    return {};
  };
};

exports.clone = function (node) {
  return function () {
    return node.clone(false);
  };
};

exports.deepClone = function (node) {
  return function () {
    return node.clone(false);
  };
};

exports.isEqualNode = function (node1) {
  return function (node2) {
    return function () {
      return node1.isEqualNode(node2);
    };
  };
};

exports.compareDocumentPositionBits = function (node1) {
  return function (node2) {
    return function () {
      return node1.compareDocumentPosition(node2);
    };
  };
};

exports.contains = function (node1) {
  return function (node2) {
    return function () {
      return node1.contains(node2);
    };
  };
};

exports.lookupPrefix = function (prefix) {
  return function (node) {
    return function () {
      return node.lookupPrefix(prefix);
    };
  };
};

exports.lookupNamespaceURI = function (ns) {
  return function (node) {
    return function () {
      return node.lookupNamespaceURI(ns);
    };
  };
};

exports.isDefaultNamespace = function (ns) {
  return function (node) {
    return function () {
      return node.isDefaultNamespace(ns);
    };
  };
};

exports.insertBefore = function (node1) {
  return function (node2) {
    return function (parent) {
      return function () {
        return parent.insertBefore(node1, node2);
      };
    };
  };
};

exports.appendChild = function (node) {
  return function (parent) {
    return function () {
      return parent.appendChild(node);
    };
  };
};

exports.replaceChild = function (oldChild) {
  return function (newChild) {
    return function (parent) {
      return function () {
        return parent.replaceChild(oldChild, newChild);
      };
    };
  };
};

exports.removeChild = function (node) {
  return function (parent) {
    return function () {
      return parent.removeChild(node);
    };
  };
};
