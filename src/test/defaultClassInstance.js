"use strict";
class aClass {
    constructor(teacher_name = '', student_name = '', title = '', description = '', date = new Date(), duration = '', status = '', grade = 1, time = '', id = '') {
        this.teacher_name = '';
        this.student_name = '';
        this.title = '';
        this.description = '';
        this.date = new Date();
        this.duration = '';
        this.status = '';
        this.grade = 1;
        this.time = '';
        this.id = '';
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
    }
}
const oneClass = new aClass();
