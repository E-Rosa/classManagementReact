"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassModelFrontEnd = exports.ClassModel = void 0;
const _helpers_js_1 = require("./_helpers.js");
class ClassModel {
    constructor(constructor1 = undefined, teacher_name = "", student_name = "", title = "", description = "", date = new Date(), duration = "", status = "", grade = 1, time = "", id = "", payment_id = "", frontEnd = new ClassModelFrontEnd()) {
        if (constructor1 != undefined) {
            this.id = constructor1.id;
            this.teacher_name = constructor1.teacher_name;
            this.student_name = constructor1.student_name;
            this.title = constructor1.title;
            this.description = constructor1.description;
            this.date = constructor1.date;
            this.duration = constructor1.duration;
            this.status = constructor1.status;
            this.grade = constructor1.grade;
            this.time = constructor1.time;
            this.payment_id = constructor1.payment_id;
            this.frontEnd = constructor1.frontEnd;
            this.frontEnd.dateString = (0, _helpers_js_1.formatDateToString)(date);
        }
        else {
            this.id = id;
            this.teacher_name = teacher_name;
            this.student_name = student_name;
            this.title = title;
            this.description = description;
            this.date = date;
            this.duration = duration;
            this.status = status;
            this.grade = grade;
            this.time = time;
            this.payment_id = payment_id;
            this.frontEnd = frontEnd;
            this.frontEnd.dateString = (0, _helpers_js_1.formatDateToString)(date);
        }
    }
}
exports.ClassModel = ClassModel;
class ClassModelFrontEnd {
    constructor(repeat = 0, dateString = "") {
        this.repeat = repeat;
        this.dateString = dateString;
    }
}
exports.ClassModelFrontEnd = ClassModelFrontEnd;
