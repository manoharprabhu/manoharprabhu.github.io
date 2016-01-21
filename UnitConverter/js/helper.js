var Helper = (function () {
    'use strict';
    var convertFromSourceToTarget = function (sourceUnit, targetUnit, sourceInput, conversionMap) {
        // Convert sourceInput to Base unit.
        var baseConversion = conversionMap[sourceUnit] * sourceInput;
        // Convert Base unit to targetUnit
        var targetConversion = baseConversion / conversionMap[targetUnit];
        return targetConversion;
    };
    var isNumeric = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    return {
        convertFromSourceToTarget: convertFromSourceToTarget,
        isNumeric: isNumeric
    };
})();