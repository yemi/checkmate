// Generated by psc version 0.9.1
"use strict";
var Prelude = require("../Prelude");
var Data_Either = require("../Data.Either");
var Data_Foldable = require("../Data.Foldable");
var Data_Traversable = require("../Data.Traversable");
var Data_Functor = require("../Data.Functor");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Coproduct = function (x) {
    return x;
};
var unCoproduct = function (v) {
    return v;
};
var right = function ($11) {
    return Coproduct(Data_Either.Right.create($11));
};
var left = function ($12) {
    return Coproduct(Data_Either.Left.create($12));
};
var coproduct = function (f) {
    return function (g) {
        return function ($13) {
            return Data_Either.either(f)(g)(unCoproduct($13));
        };
    };
};
var foldableCoproduct = function (dictFoldable) {
    return function (dictFoldable1) {
        return new Data_Foldable.Foldable(function (dictMonoid) {
            return function (f) {
                return coproduct(Data_Foldable.foldMap(dictFoldable)(dictMonoid)(f))(Data_Foldable.foldMap(dictFoldable1)(dictMonoid)(f));
            };
        }, function (f) {
            return function (z) {
                return coproduct(Data_Foldable.foldl(dictFoldable)(f)(z))(Data_Foldable.foldl(dictFoldable1)(f)(z));
            };
        }, function (f) {
            return function (z) {
                return coproduct(Data_Foldable.foldr(dictFoldable)(f)(z))(Data_Foldable.foldr(dictFoldable1)(f)(z));
            };
        });
    };
};
var functorCoproduct = function (dictFunctor) {
    return function (dictFunctor1) {
        return new Data_Functor.Functor(function (f) {
            return function ($14) {
                return Coproduct(coproduct(function ($15) {
                    return Data_Either.Left.create(Data_Functor.map(dictFunctor)(f)($15));
                })(function ($16) {
                    return Data_Either.Right.create(Data_Functor.map(dictFunctor1)(f)($16));
                })($14));
            };
        });
    };
};
var traversableCoproduct = function (dictTraversable) {
    return function (dictTraversable1) {
        return new Data_Traversable.Traversable(function () {
            return foldableCoproduct(dictTraversable["__superclass_Data.Foldable.Foldable_1"]())(dictTraversable1["__superclass_Data.Foldable.Foldable_1"]());
        }, function () {
            return functorCoproduct(dictTraversable["__superclass_Data.Functor.Functor_0"]())(dictTraversable1["__superclass_Data.Functor.Functor_0"]());
        }, function (dictApplicative) {
            return coproduct(function ($17) {
                return Data_Functor.map((dictApplicative["__superclass_Control.Apply.Apply_0"]())["__superclass_Data.Functor.Functor_0"]())(function ($18) {
                    return Coproduct(Data_Either.Left.create($18));
                })(Data_Traversable.sequence(dictTraversable)(dictApplicative)($17));
            })(function ($19) {
                return Data_Functor.map((dictApplicative["__superclass_Control.Apply.Apply_0"]())["__superclass_Data.Functor.Functor_0"]())(function ($20) {
                    return Coproduct(Data_Either.Right.create($20));
                })(Data_Traversable.sequence(dictTraversable1)(dictApplicative)($19));
            });
        }, function (dictApplicative) {
            return function (f) {
                return coproduct(function ($21) {
                    return Data_Functor.map((dictApplicative["__superclass_Control.Apply.Apply_0"]())["__superclass_Data.Functor.Functor_0"]())(function ($22) {
                        return Coproduct(Data_Either.Left.create($22));
                    })(Data_Traversable.traverse(dictTraversable)(dictApplicative)(f)($21));
                })(function ($23) {
                    return Data_Functor.map((dictApplicative["__superclass_Control.Apply.Apply_0"]())["__superclass_Data.Functor.Functor_0"]())(function ($24) {
                        return Coproduct(Data_Either.Right.create($24));
                    })(Data_Traversable.traverse(dictTraversable1)(dictApplicative)(f)($23));
                });
            };
        });
    };
};
module.exports = {
    Coproduct: Coproduct, 
    coproduct: coproduct, 
    left: left, 
    right: right, 
    unCoproduct: unCoproduct, 
    functorCoproduct: functorCoproduct, 
    foldableCoproduct: foldableCoproduct, 
    traversableCoproduct: traversableCoproduct
};
