// Generated by psc version 0.8.5.0
"use strict";
var $foreign = require("./foreign");
var Prelude = require("../Prelude");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Aff_AVar = require("../Control.Monad.Aff.AVar");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Control_Monad_Eff_Ref = require("../Control.Monad.Eff.Ref");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class");
var Data_Array = require("../Data.Array");
var Data_Either = require("../Data.Either");
var Data_Foldable = require("../Data.Foldable");
var Data_Foreign = require("../Data.Foreign");
var Data_Function = require("../Data.Function");
var Data_HTTP_Method_1 = require("../Data.HTTP.Method");
var Data_HTTP_Method_1 = require("../Data.HTTP.Method");
var Data_Int = require("../Data.Int");
var Data_Maybe = require("../Data.Maybe");
var Data_MediaType = require("../Data.MediaType");
var Data_Nullable = require("../Data.Nullable");
var Data_Tuple = require("../Data.Tuple");
var $$Math = require("../Math");
var DOM_XHR_Types = require("../DOM.XHR.Types");
var Network_HTTP_Affjax_Request = require("../Network.HTTP.Affjax.Request");
var Network_HTTP_Affjax_Response = require("../Network.HTTP.Affjax.Response");
var Network_HTTP_RequestHeader = require("../Network.HTTP.RequestHeader");
var Network_HTTP_ResponseHeader = require("../Network.HTTP.ResponseHeader");
var Network_HTTP_StatusCode = require("../Network.HTTP.StatusCode");
var retry = function (dictRequestable) {
    return function (policy) {
        return function (run) {
            return function (req) {
                var retryState = function (v) {
                    if (v instanceof Data_Either.Left) {
                        return Data_Either.Left.create(new Data_Either.Left(v.value0));
                    };
                    if (v instanceof Data_Either.Right) {
                        if (v.value0.status === 200) {
                            return new Data_Either.Right(v.value0);
                        };
                        var $31 = policy.shouldRetryWithStatusCode(v.value0.status);
                        if ($31) {
                            return Data_Either.Left.create(new Data_Either.Right(v.value0));
                        };
                        if (!$31) {
                            return new Data_Either.Right(v.value0);
                        };
                        throw new Error("Failed pattern match at Network.HTTP.Affjax line 200, column 11 - line 205, column 5: " + [ $31.constructor.name ]);
                    };
                    throw new Error("Failed pattern match at Network.HTTP.Affjax line 195, column 5 - line 196, column 5: " + [ v.constructor.name ]);
                };
                var go = function (failureRef) {
                    return function (n) {
                        return Prelude.bind(Control_Monad_Aff.bindAff)(Prelude["<$>"](Control_Monad_Aff.functorAff)(retryState)(Control_Monad_Aff.attempt(run(req))))(function (v) {
                            if (v instanceof Data_Either.Left) {
                                return Prelude.bind(Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Ref.writeRef(failureRef)(new Data_Maybe.Just(v.value0))))(function () {
                                    return Control_Monad_Aff["later'"](policy.delayCurve(n))(go(failureRef)(n + 1 | 0));
                                });
                            };
                            if (v instanceof Data_Either.Right) {
                                return Prelude.pure(Control_Monad_Aff.applicativeAff)(v.value0);
                            };
                            throw new Error("Failed pattern match at Network.HTTP.Affjax line 207, column 7 - line 214, column 1: " + [ v.constructor.name ]);
                        });
                    };
                };
                return Prelude.bind(Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Ref.newRef(Data_Maybe.Nothing.value)))(function (v) {
                    var loop = go(v);
                    if (policy.timeout instanceof Data_Maybe.Nothing) {
                        return loop(1);
                    };
                    if (policy.timeout instanceof Data_Maybe.Just) {
                        return Prelude.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff_AVar.makeVar)(function (v1) {
                            return Prelude.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff.forkAff(Prelude[">>="](Control_Monad_Aff.bindAff)(loop(1))(function ($73) {
                                return Control_Monad_Aff_AVar.putVar(v1)(Data_Maybe.Just.create($73));
                            })))(function (v2) {
                                return Prelude.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff.forkAff(Control_Monad_Aff["later'"](policy.timeout.value0)(Prelude.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff_AVar.putVar(v1)(Data_Maybe.Nothing.value))(function () {
                                    return Control_Monad_Aff.cancel(v2)(Control_Monad_Eff_Exception.error("Cancel"));
                                }))))(function (v3) {
                                    return Prelude.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff_AVar.takeVar(v1))(function (v4) {
                                        if (v4 instanceof Data_Maybe.Nothing) {
                                            return Prelude.bind(Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Ref.readRef(v)))(function (v5) {
                                                if (v5 instanceof Data_Maybe.Nothing) {
                                                    return Control_Monad_Error_Class.throwError(Control_Monad_Aff.monadErrorAff)(Control_Monad_Eff_Exception.error("Timeout"));
                                                };
                                                if (v5 instanceof Data_Maybe.Just) {
                                                    return Data_Either.either(Control_Monad_Error_Class.throwError(Control_Monad_Aff.monadErrorAff))(Prelude.pure(Control_Monad_Aff.applicativeAff))(v5.value0);
                                                };
                                                throw new Error("Failed pattern match at Network.HTTP.Affjax line 187, column 11 - line 190, column 9: " + [ v5.constructor.name ]);
                                            });
                                        };
                                        if (v4 instanceof Data_Maybe.Just) {
                                            return Prelude.pure(Control_Monad_Aff.applicativeAff)(v4.value0);
                                        };
                                        throw new Error("Failed pattern match at Network.HTTP.Affjax line 184, column 7 - line 191, column 3: " + [ v4.constructor.name ]);
                                    });
                                });
                            });
                        });
                    };
                    throw new Error("Failed pattern match at Network.HTTP.Affjax line 174, column 3 - line 191, column 3: " + [ policy.timeout.constructor.name ]);
                });
            };
        };
    };
};
var defaultRetryPolicy = {
    timeout: Data_Maybe.Nothing.value, 
    delayCurve: function (n) {
        return Data_Int.round($$Math.max(30.0 * 1000.0)(100.0 * $$Math.pow(2.0)(Data_Int.toNumber(n - 1))));
    }, 
    shouldRetryWithStatusCode: Prelude["const"](false)
};
var defaultRequest = {
    method: new Data_Either.Left(Data_HTTP_Method_1.GET.value), 
    url: "/", 
    headers: [  ], 
    content: Data_Maybe.Nothing.value, 
    username: Data_Maybe.Nothing.value, 
    password: Data_Maybe.Nothing.value, 
    withCredentials: false
};
var cancelAjax = function (xhr) {
    return function (err) {
        return Control_Monad_Aff.makeAff(function (eb) {
            return function (cb) {
                return $foreign._cancelAjax(xhr, err, eb, cb);
            };
        });
    };
};
var affjax$prime = function (dictRequestable) {
    return function (dictRespondable) {
        return function (req) {
            return function (eb) {
                return function (cb) {
                    var responseSettings = Network_HTTP_Affjax_Response.responseType(dictRespondable);
                    var requestSettings = (function () {
                        var $49 = Prelude["<$>"](Data_Maybe.functorMaybe)(Network_HTTP_Affjax_Request.toRequest(dictRequestable))(req.content);
                        if ($49 instanceof Data_Maybe.Nothing) {
                            return new Data_Tuple.Tuple(Data_Maybe.Nothing.value, Data_Maybe.Nothing.value);
                        };
                        if ($49 instanceof Data_Maybe.Just) {
                            return new Data_Tuple.Tuple($49.value0.value0, new Data_Maybe.Just($49.value0.value1));
                        };
                        throw new Error("Failed pattern match at Network.HTTP.Affjax line 238, column 21 - line 242, column 3: " + [ $49.constructor.name ]);
                    })();
                    var fromResponse$prime = (function () {
                        var $53 = Data_Tuple.snd(responseSettings);
                        if ($53 instanceof Network_HTTP_Affjax_Response.JSONResponse) {
                            return Control_Bind["<=<"](Data_Either.bindEither)(Network_HTTP_Affjax_Response.fromResponse(dictRespondable))(Control_Bind["<=<"](Data_Either.bindEither)(Data_Foreign.parseJSON)(Data_Foreign.readString));
                        };
                        return Network_HTTP_Affjax_Response.fromResponse(dictRespondable);
                    })();
                    var cb$prime = function (res) {
                        var $56 = Prelude["<$>"](Data_Either.functorEither)(function (v) {
                            var $54 = {};
                            for (var $55 in res) {
                                if (res.hasOwnProperty($55)) {
                                    $54[$55] = res[$55];
                                };
                            };
                            $54.response = v;
                            return $54;
                        })(fromResponse$prime(res.response));
                        if ($56 instanceof Data_Either.Left) {
                            return eb(Control_Monad_Eff_Exception.error(Prelude.show(Data_Foreign.showForeignError)($56.value0)));
                        };
                        if ($56 instanceof Data_Either.Right) {
                            return cb($56.value0);
                        };
                        throw new Error("Failed pattern match at Network.HTTP.Affjax line 257, column 13 - line 261, column 3: " + [ $56.constructor.name ]);
                    };
                    var addHeader = function (h) {
                        return function (hs) {
                            if (h instanceof Data_Maybe.Just && !Data_Foldable.any(Data_Foldable.foldableArray)(Prelude.booleanAlgebraBoolean)(Data_Function.on(Prelude.eq(Prelude.eqString))(Network_HTTP_RequestHeader.requestHeaderName)(h.value0))(hs)) {
                                return Data_Array.snoc(hs)(h.value0);
                            };
                            return hs;
                        };
                    };
                    var headers = addHeader(Prelude["<$>"](Data_Maybe.functorMaybe)(Network_HTTP_RequestHeader.ContentType.create)(Data_Tuple.fst(requestSettings)))(addHeader(Prelude["<$>"](Data_Maybe.functorMaybe)(Network_HTTP_RequestHeader.Accept.create)(Data_Tuple.fst(responseSettings)))(req.headers));
                    var req$prime = {
                        method: Data_HTTP_Method_1.print(req.method), 
                        url: req.url, 
                        headers: Prelude["<$>"](Prelude.functorArray)(function (h) {
                            return {
                                field: Network_HTTP_RequestHeader.requestHeaderName(h), 
                                value: Network_HTTP_RequestHeader.requestHeaderValue(h)
                            };
                        })(headers), 
                        content: Data_Nullable.toNullable(Data_Tuple.snd(requestSettings)), 
                        responseType: Network_HTTP_Affjax_Response.responseTypeToString(Data_Tuple.snd(responseSettings)), 
                        username: Data_Nullable.toNullable(req.username), 
                        password: Data_Nullable.toNullable(req.password), 
                        withCredentials: req.withCredentials
                    };
                    return $foreign._ajax(Network_HTTP_ResponseHeader.responseHeader, req$prime, cancelAjax, eb, cb$prime);
                };
            };
        };
    };
};
var affjax = function (dictRequestable) {
    return function (dictRespondable) {
        return function ($74) {
            return Control_Monad_Aff["makeAff'"](affjax$prime(dictRequestable)(dictRespondable)($74));
        };
    };
};
var $$delete = function (dictRespondable) {
    return function (u) {
        return affjax(Network_HTTP_Affjax_Request.requestableUnit)(dictRespondable)((function () {
            var $61 = {};
            for (var $62 in defaultRequest) {
                if (defaultRequest.hasOwnProperty($62)) {
                    $61[$62] = defaultRequest[$62];
                };
            };
            $61.method = new Data_Either.Left(Data_HTTP_Method_1.DELETE.value);
            $61.url = u;
            return $61;
        })());
    };
};
var delete_ = $$delete(Network_HTTP_Affjax_Response.responsableUnit);
var get = function (dictRespondable) {
    return function (u) {
        return affjax(Network_HTTP_Affjax_Request.requestableUnit)(dictRespondable)((function () {
            var $63 = {};
            for (var $64 in defaultRequest) {
                if (defaultRequest.hasOwnProperty($64)) {
                    $63[$64] = defaultRequest[$64];
                };
            };
            $63.url = u;
            return $63;
        })());
    };
};
var post = function (dictRequestable) {
    return function (dictRespondable) {
        return function (u) {
            return function (c) {
                return affjax(dictRequestable)(dictRespondable)((function () {
                    var $65 = {};
                    for (var $66 in defaultRequest) {
                        if (defaultRequest.hasOwnProperty($66)) {
                            $65[$66] = defaultRequest[$66];
                        };
                    };
                    $65.method = new Data_Either.Left(Data_HTTP_Method_1.POST.value);
                    $65.url = u;
                    $65.content = new Data_Maybe.Just(c);
                    return $65;
                })());
            };
        };
    };
};
var post_ = function (dictRequestable) {
    return post(dictRequestable)(Network_HTTP_Affjax_Response.responsableUnit);
};
var post$prime = function (dictRequestable) {
    return function (dictRespondable) {
        return function (u) {
            return function (c) {
                return affjax(dictRequestable)(dictRespondable)((function () {
                    var $67 = {};
                    for (var $68 in defaultRequest) {
                        if (defaultRequest.hasOwnProperty($68)) {
                            $67[$68] = defaultRequest[$68];
                        };
                    };
                    $67.method = new Data_Either.Left(Data_HTTP_Method_1.POST.value);
                    $67.url = u;
                    $67.content = c;
                    return $67;
                })());
            };
        };
    };
};
var post_$prime = function (dictRequestable) {
    return post$prime(dictRequestable)(Network_HTTP_Affjax_Response.responsableUnit);
};
var put = function (dictRequestable) {
    return function (dictRespondable) {
        return function (u) {
            return function (c) {
                return affjax(dictRequestable)(dictRespondable)((function () {
                    var $69 = {};
                    for (var $70 in defaultRequest) {
                        if (defaultRequest.hasOwnProperty($70)) {
                            $69[$70] = defaultRequest[$70];
                        };
                    };
                    $69.method = new Data_Either.Left(Data_HTTP_Method_1.PUT.value);
                    $69.url = u;
                    $69.content = new Data_Maybe.Just(c);
                    return $69;
                })());
            };
        };
    };
};
var put_ = function (dictRequestable) {
    return put(dictRequestable)(Network_HTTP_Affjax_Response.responsableUnit);
};
var put$prime = function (dictRequestable) {
    return function (dictRespondable) {
        return function (u) {
            return function (c) {
                return affjax(dictRequestable)(dictRespondable)((function () {
                    var $71 = {};
                    for (var $72 in defaultRequest) {
                        if (defaultRequest.hasOwnProperty($72)) {
                            $71[$72] = defaultRequest[$72];
                        };
                    };
                    $71.method = new Data_Either.Left(Data_HTTP_Method_1.PUT.value);
                    $71.url = u;
                    $71.content = c;
                    return $71;
                })());
            };
        };
    };
};
var put_$prime = function (dictRequestable) {
    return put$prime(dictRequestable)(Network_HTTP_Affjax_Response.responsableUnit);
};
module.exports = {
    retry: retry, 
    defaultRetryPolicy: defaultRetryPolicy, 
    delete_: delete_, 
    "delete": $$delete, 
    "put_'": put_$prime, 
    "put'": put$prime, 
    put_: put_, 
    put: put, 
    "post_'": post_$prime, 
    "post'": post$prime, 
    post_: post_, 
    post: post, 
    get: get, 
    "affjax'": affjax$prime, 
    affjax: affjax, 
    defaultRequest: defaultRequest
};
