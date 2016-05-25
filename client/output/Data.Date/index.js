// Generated by psc version 0.8.5.0
"use strict";
var $foreign = require("./foreign");
var Prelude = require("../Prelude");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_Enum = require("../Data.Enum");
var Data_Function = require("../Data.Function");
var Data_Maybe = require("../Data.Maybe");
var Data_Time = require("../Data.Time");
var Global = require("../Global");
var Year = function (x) {
    return x;
};
var January = (function () {
    function January() {

    };
    January.value = new January();
    return January;
})();
var February = (function () {
    function February() {

    };
    February.value = new February();
    return February;
})();
var March = (function () {
    function March() {

    };
    March.value = new March();
    return March;
})();
var April = (function () {
    function April() {

    };
    April.value = new April();
    return April;
})();
var May = (function () {
    function May() {

    };
    May.value = new May();
    return May;
})();
var June = (function () {
    function June() {

    };
    June.value = new June();
    return June;
})();
var July = (function () {
    function July() {

    };
    July.value = new July();
    return July;
})();
var August = (function () {
    function August() {

    };
    August.value = new August();
    return August;
})();
var September = (function () {
    function September() {

    };
    September.value = new September();
    return September;
})();
var October = (function () {
    function October() {

    };
    October.value = new October();
    return October;
})();
var November = (function () {
    function November() {

    };
    November.value = new November();
    return November;
})();
var December = (function () {
    function December() {

    };
    December.value = new December();
    return December;
})();
var LocaleOffset = function (x) {
    return x;
};
var Sunday = (function () {
    function Sunday() {

    };
    Sunday.value = new Sunday();
    return Sunday;
})();
var Monday = (function () {
    function Monday() {

    };
    Monday.value = new Monday();
    return Monday;
})();
var Tuesday = (function () {
    function Tuesday() {

    };
    Tuesday.value = new Tuesday();
    return Tuesday;
})();
var Wednesday = (function () {
    function Wednesday() {

    };
    Wednesday.value = new Wednesday();
    return Wednesday;
})();
var Thursday = (function () {
    function Thursday() {

    };
    Thursday.value = new Thursday();
    return Thursday;
})();
var Friday = (function () {
    function Friday() {

    };
    Friday.value = new Friday();
    return Friday;
})();
var Saturday = (function () {
    function Saturday() {

    };
    Saturday.value = new Saturday();
    return Saturday;
})();
var DayOfMonth = function (x) {
    return x;
};
var DateTime = function (x) {
    return x;
};
var toJSDate = function (v) {
    return v;
};
var toISOString = function (v) {
    return $foreign.jsDateMethod("toISOString", v);
};
var toEpochMilliseconds = function (v) {
    return $foreign.jsDateMethod("getTime", v);
};
var timezoneOffset = function (v) {
    return $foreign.jsDateMethod("getTimezoneOffset", v);
};
var showYear = new Prelude.Show(function (v) {
    return "(Year " + (Prelude.show(Prelude.showInt)(v) + ")");
});
var showMonth = new Prelude.Show(function (v) {
    if (v instanceof January) {
        return "January";
    };
    if (v instanceof February) {
        return "February";
    };
    if (v instanceof March) {
        return "March";
    };
    if (v instanceof April) {
        return "April";
    };
    if (v instanceof May) {
        return "May";
    };
    if (v instanceof June) {
        return "June";
    };
    if (v instanceof July) {
        return "July";
    };
    if (v instanceof August) {
        return "August";
    };
    if (v instanceof September) {
        return "September";
    };
    if (v instanceof October) {
        return "October";
    };
    if (v instanceof November) {
        return "November";
    };
    if (v instanceof December) {
        return "December";
    };
    throw new Error("Failed pattern match at Data.Date line 167, column 3 - line 168, column 3: " + [ v.constructor.name ]);
});
var showDayOfWeek = new Prelude.Show(function (v) {
    if (v instanceof Sunday) {
        return "Sunday";
    };
    if (v instanceof Monday) {
        return "Monday";
    };
    if (v instanceof Tuesday) {
        return "Tuesday";
    };
    if (v instanceof Wednesday) {
        return "Wednesday";
    };
    if (v instanceof Thursday) {
        return "Thursday";
    };
    if (v instanceof Friday) {
        return "Friday";
    };
    if (v instanceof Saturday) {
        return "Saturday";
    };
    throw new Error("Failed pattern match at Data.Date line 258, column 3 - line 259, column 3: " + [ v.constructor.name ]);
});
var showDayOfMonth = new Prelude.Show(function (v) {
    return "(DayOfMonth " + (Prelude.show(Prelude.showInt)(v) + ")");
});
var showDate = new Prelude.Show(function (d) {
    return "(fromEpochMilliseconds " + (Prelude.show(Data_Time.showMilliseconds)(toEpochMilliseconds(d)) + ")");
});
var semiringYear = new Prelude.Semiring(function (v) {
    return function (v1) {
        return v + v1 | 0;
    };
}, function (v) {
    return function (v1) {
        return v * v1 | 0;
    };
}, 1, 0);
var ringYear = new Prelude.Ring(function () {
    return semiringYear;
}, function (v) {
    return function (v1) {
        return v - v1;
    };
});
var now = $foreign.nowImpl(DateTime);
var monthToEnum = function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(January.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(February.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(March.value);
    };
    if (v === 3) {
        return new Data_Maybe.Just(April.value);
    };
    if (v === 4) {
        return new Data_Maybe.Just(May.value);
    };
    if (v === 5) {
        return new Data_Maybe.Just(June.value);
    };
    if (v === 6) {
        return new Data_Maybe.Just(July.value);
    };
    if (v === 7) {
        return new Data_Maybe.Just(August.value);
    };
    if (v === 8) {
        return new Data_Maybe.Just(September.value);
    };
    if (v === 9) {
        return new Data_Maybe.Just(October.value);
    };
    if (v === 10) {
        return new Data_Maybe.Just(November.value);
    };
    if (v === 11) {
        return new Data_Maybe.Just(December.value);
    };
    return Data_Maybe.Nothing.value;
};
var monthFromEnum = function (v) {
    if (v instanceof January) {
        return 0;
    };
    if (v instanceof February) {
        return 1;
    };
    if (v instanceof March) {
        return 2;
    };
    if (v instanceof April) {
        return 3;
    };
    if (v instanceof May) {
        return 4;
    };
    if (v instanceof June) {
        return 5;
    };
    if (v instanceof July) {
        return 6;
    };
    if (v instanceof August) {
        return 7;
    };
    if (v instanceof September) {
        return 8;
    };
    if (v instanceof October) {
        return 9;
    };
    if (v instanceof November) {
        return 10;
    };
    if (v instanceof December) {
        return 11;
    };
    throw new Error("Failed pattern match at Data.Date line 203, column 1 - line 204, column 1: " + [ v.constructor.name ]);
};
var fromJSDate = function (d) {
    var $46 = Global["isNaN"]($foreign.jsDateMethod("getTime", d));
    if ($46) {
        return Data_Maybe.Nothing.value;
    };
    if (!$46) {
        return new Data_Maybe.Just(d);
    };
    throw new Error("Failed pattern match at Data.Date line 53, column 3 - line 58, column 1: " + [ $46.constructor.name ]);
};
var fromString = function ($61) {
    return fromJSDate($foreign.jsDateConstructor($61));
};
var fromStringStrict = function (s) {
    return Prelude[">>="](Data_Maybe.bindMaybe)($foreign.strictJsDate(Data_Maybe.Just.create, Data_Maybe.Nothing.value, s))(fromJSDate);
};
var fromEpochMilliseconds = function ($62) {
    return fromJSDate($foreign.jsDateConstructor($62));
};
var eqYear = new Prelude.Eq(function (v) {
    return function (v1) {
        return v === v1;
    };
});
var ordYear = new Prelude.Ord(function () {
    return eqYear;
}, function (v) {
    return function (v1) {
        return Prelude.compare(Prelude.ordInt)(v)(v1);
    };
});
var eqMonth = new Prelude.Eq(function (v) {
    return function (v1) {
        if (v instanceof January && v1 instanceof January) {
            return true;
        };
        if (v instanceof February && v1 instanceof February) {
            return true;
        };
        if (v instanceof March && v1 instanceof March) {
            return true;
        };
        if (v instanceof April && v1 instanceof April) {
            return true;
        };
        if (v instanceof May && v1 instanceof May) {
            return true;
        };
        if (v instanceof June && v1 instanceof June) {
            return true;
        };
        if (v instanceof July && v1 instanceof July) {
            return true;
        };
        if (v instanceof August && v1 instanceof August) {
            return true;
        };
        if (v instanceof September && v1 instanceof September) {
            return true;
        };
        if (v instanceof October && v1 instanceof October) {
            return true;
        };
        if (v instanceof November && v1 instanceof November) {
            return true;
        };
        if (v instanceof December && v1 instanceof December) {
            return true;
        };
        return false;
    };
});
var eqDayOfWeek = new Prelude.Eq(function (v) {
    return function (v1) {
        if (v instanceof Sunday && v1 instanceof Sunday) {
            return true;
        };
        if (v instanceof Monday && v1 instanceof Monday) {
            return true;
        };
        if (v instanceof Tuesday && v1 instanceof Tuesday) {
            return true;
        };
        if (v instanceof Wednesday && v1 instanceof Wednesday) {
            return true;
        };
        if (v instanceof Thursday && v1 instanceof Thursday) {
            return true;
        };
        if (v instanceof Friday && v1 instanceof Friday) {
            return true;
        };
        if (v instanceof Saturday && v1 instanceof Saturday) {
            return true;
        };
        return false;
    };
});
var eqDayOfMonth = new Prelude.Eq(function (v) {
    return function (v1) {
        return v === v1;
    };
});
var ordDayOfMonth = new Prelude.Ord(function () {
    return eqDayOfMonth;
}, function (v) {
    return function (v1) {
        return Prelude.compare(Prelude.ordInt)(v)(v1);
    };
});
var eqDate = new Prelude.Eq(Data_Function.on(Prelude.eq(Data_Time.eqMilliseconds))(toEpochMilliseconds));
var ordDate = new Prelude.Ord(function () {
    return eqDate;
}, Data_Function.on(Prelude.compare(Data_Time.ordMilliseconds))(toEpochMilliseconds));
var dayOfWeekToEnum = function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(Sunday.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(Monday.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(Tuesday.value);
    };
    if (v === 3) {
        return new Data_Maybe.Just(Wednesday.value);
    };
    if (v === 4) {
        return new Data_Maybe.Just(Thursday.value);
    };
    if (v === 5) {
        return new Data_Maybe.Just(Friday.value);
    };
    if (v === 6) {
        return new Data_Maybe.Just(Saturday.value);
    };
    return Data_Maybe.Nothing.value;
};
var dayOfWeekFromEnum = function (v) {
    if (v instanceof Sunday) {
        return 0;
    };
    if (v instanceof Monday) {
        return 1;
    };
    if (v instanceof Tuesday) {
        return 2;
    };
    if (v instanceof Wednesday) {
        return 3;
    };
    if (v instanceof Thursday) {
        return 4;
    };
    if (v instanceof Friday) {
        return 5;
    };
    if (v instanceof Saturday) {
        return 6;
    };
    throw new Error("Failed pattern match at Data.Date line 284, column 1 - line 285, column 1: " + [ v.constructor.name ]);
};
var boundedMonth = new Prelude.Bounded(January.value, December.value);
var enumMonth = new Data_Enum.Enum(function () {
    return boundedMonth;
}, 12, monthFromEnum, Data_Enum.defaultPred(monthToEnum)(monthFromEnum), Data_Enum.defaultSucc(monthToEnum)(monthFromEnum), monthToEnum);
var ordMonth = new Prelude.Ord(function () {
    return eqMonth;
}, Data_Function.on(Prelude.compare(Prelude.ordInt))(Data_Enum.fromEnum(enumMonth)));
var boundedOrdMonth = new Prelude.BoundedOrd(function () {
    return boundedMonth;
}, function () {
    return ordMonth;
});
var boundedDayOfWeek = new Prelude.Bounded(Sunday.value, Saturday.value);
var enumDayOfWeek = new Data_Enum.Enum(function () {
    return boundedDayOfWeek;
}, 7, dayOfWeekFromEnum, Data_Enum.defaultPred(dayOfWeekToEnum)(dayOfWeekFromEnum), Data_Enum.defaultSucc(dayOfWeekToEnum)(dayOfWeekFromEnum), dayOfWeekToEnum);
var ordDayOfWeek = new Prelude.Ord(function () {
    return eqDayOfWeek;
}, Data_Function.on(Prelude.compare(Prelude.ordInt))(Data_Enum.fromEnum(enumDayOfWeek)));
var boundedOrdDayOfWeek = new Prelude.BoundedOrd(function () {
    return boundedDayOfWeek;
}, function () {
    return ordDayOfWeek;
});
module.exports = {
    Sunday: Sunday, 
    Monday: Monday, 
    Tuesday: Tuesday, 
    Wednesday: Wednesday, 
    Thursday: Thursday, 
    Friday: Friday, 
    Saturday: Saturday, 
    DayOfMonth: DayOfMonth, 
    January: January, 
    February: February, 
    March: March, 
    April: April, 
    May: May, 
    June: June, 
    July: July, 
    August: August, 
    September: September, 
    October: October, 
    November: November, 
    December: December, 
    Year: Year, 
    LocaleOffset: LocaleOffset, 
    toISOString: toISOString, 
    timezoneOffset: timezoneOffset, 
    now: now, 
    fromStringStrict: fromStringStrict, 
    fromString: fromString, 
    toEpochMilliseconds: toEpochMilliseconds, 
    fromEpochMilliseconds: fromEpochMilliseconds, 
    toJSDate: toJSDate, 
    fromJSDate: fromJSDate, 
    eqDate: eqDate, 
    ordDate: ordDate, 
    showDate: showDate, 
    eqYear: eqYear, 
    ordYear: ordYear, 
    semiringYear: semiringYear, 
    ringYear: ringYear, 
    showYear: showYear, 
    eqMonth: eqMonth, 
    ordMonth: ordMonth, 
    boundedMonth: boundedMonth, 
    boundedOrdMonth: boundedOrdMonth, 
    showMonth: showMonth, 
    enumMonth: enumMonth, 
    eqDayOfMonth: eqDayOfMonth, 
    ordDayOfMonth: ordDayOfMonth, 
    showDayOfMonth: showDayOfMonth, 
    eqDayOfWeek: eqDayOfWeek, 
    ordDayOfWeek: ordDayOfWeek, 
    boundedDayOfWeek: boundedDayOfWeek, 
    boundedOrdDayOfWeek: boundedOrdDayOfWeek, 
    showDayOfWeek: showDayOfWeek, 
    enumDayOfWeek: enumDayOfWeek, 
    nowEpochMilliseconds: $foreign.nowEpochMilliseconds
};