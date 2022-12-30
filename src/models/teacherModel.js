"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherProfile = void 0;
class TeacherProfile {
    constructor(name, id, city, level) {
        this.name = name;
        this.id = id;
        this.city = city;
        this.level = level;
    }
}
exports.TeacherProfile = TeacherProfile;
//tsc --module commonjs ./api/models/teacherModel.ts
