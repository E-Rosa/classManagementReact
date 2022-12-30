"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentProfileModel = exports.StudentCardModel = void 0;
const _helpers_1 = require("./_helpers");
class StudentCardModel {
    constructor(name = '', status = '', id = '') {
        this.name = name;
        this.status = status;
        this.id = id;
    }
}
exports.StudentCardModel = StudentCardModel;
class StudentProfileModel {
    constructor(constructor1 = undefined, name = '', status = '', id = '', birthday = '', city = '', level = '', subscription = new Date(), frequency = '', description = '', teacher_name = '', teacher_id = '', credits = 0, frontEnd = new StudentProfileModelFrontEnd()) {
        if (constructor1 != undefined) {
            this.name = constructor1.name;
            this.status = constructor1.status;
            this.id = constructor1.id;
            this.birthday = constructor1.birthday;
            this.city = constructor1.city;
            this.level = constructor1.level;
            this.subscription = constructor1.subscription;
            this.frequency = constructor1.frequency;
            this.description = constructor1.description;
            this.teacher_name = constructor1.teacher_name;
            this.teacher_id = constructor1.teacher_id;
            this.credits = constructor1.credits;
            this.frontEnd = constructor1.frontEnd;
            this.frontEnd.subscriptionString = (0, _helpers_1.formatDateToString)(new Date(constructor1.subscription));
        }
        else {
            this.name = name;
            this.status = status;
            this.id = id;
            this.birthday = birthday;
            this.city = city;
            this.level = level;
            this.subscription = subscription;
            this.frequency = frequency;
            this.description = description;
            this.teacher_name = teacher_name;
            this.teacher_id = teacher_id;
            this.credits = credits;
            this.frontEnd = frontEnd;
            this.frontEnd.subscriptionString = (0, _helpers_1.formatDateToString)(subscription);
        }
    }
}
exports.StudentProfileModel = StudentProfileModel;
class StudentProfileModelFrontEnd {
    constructor(subscriptionString = '') {
        this.subscriptionString = subscriptionString;
    }
}
//tsc --module commonjs ./api/models/studentModel.ts
