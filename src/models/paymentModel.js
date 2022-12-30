"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModelFrontEnd = exports.PaymentModel = void 0;
const _helpers_1 = require("./_helpers");
class PaymentModel {
    constructor(constructor1 = undefined, id = "", teacher_id = "", student_id = "", date = new Date(), value = 1, status = "", frontEnd = new PaymentModelFrontEnd()) {
        this.id = "";
        this.teacher_id = "";
        this.student_id = "";
        this.date = new Date();
        this.value = 1;
        this.status = "";
        this.frontEnd = new PaymentModelFrontEnd();
        if (constructor1 != undefined) {
            this.id = constructor1.id;
            this.teacher_id = constructor1.teacher_id;
            this.student_id = constructor1.student_id;
            this.date = constructor1.date;
            this.value = constructor1.value;
            this.status = constructor1.status;
            this.frontEnd = constructor1.frontEnd;
            this.frontEnd.dateString = (0, _helpers_1.formatDateToString)(date);
        }
        else {
            this.id = id;
            this.teacher_id = teacher_id;
            this.student_id = student_id;
            this.date = date;
            this.value = value;
            this.status = status;
            this.frontEnd = frontEnd;
            this.frontEnd.dateString = (0, _helpers_1.formatDateToString)(date);
        }
    }
    getCredits(classPrice) {
        return Math.ceil(classPrice / this.value);
    }
}
exports.PaymentModel = PaymentModel;
class PaymentModelFrontEnd {
    constructor(teacher_name = "", student_name = "", dateString = "") {
        this.teacher_name = teacher_name;
        this.student_name = student_name;
        this.dateString = dateString;
    }
}
exports.PaymentModelFrontEnd = PaymentModelFrontEnd;
