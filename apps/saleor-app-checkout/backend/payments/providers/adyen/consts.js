"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failedEvents = void 0;
const api_library_1 = require("@adyen/api-library");
const EventCodeEnum = api_library_1.Types.notification.NotificationRequestItem.EventCodeEnum;
exports.failedEvents = new Set([EventCodeEnum.CaptureFailed, EventCodeEnum.RefundFailed]);
