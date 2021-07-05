"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusCommand;
(function (StatusCommand) {
    StatusCommand[StatusCommand["CANCELED"] = 0] = "CANCELED";
    StatusCommand[StatusCommand["ERROR"] = 1] = "ERROR";
    StatusCommand[StatusCommand["EXPIRED"] = 2] = "EXPIRED";
    StatusCommand[StatusCommand["PENDING"] = 3] = "PENDING";
    StatusCommand[StatusCommand["PROCESSED"] = 4] = "PROCESSED";
    StatusCommand[StatusCommand["PROCESSING"] = 5] = "PROCESSING";
    StatusCommand[StatusCommand["RETRYING"] = 6] = "RETRYING";
    StatusCommand[StatusCommand["UNKNOWN"] = 7] = "UNKNOWN";
})(StatusCommand || (StatusCommand = {}));
