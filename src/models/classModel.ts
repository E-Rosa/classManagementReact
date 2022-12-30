import { formatDateToString } from "./_helpers.js";

class ClassModel {
  teacher_name: string;
  student_name: string;
  title: string;
  description: string;
  date: Date;
  duration: string;
  status: string;
  grade: number;
  time: string;
  id: string;
  payment_id: string;
  frontEnd: ClassModelFrontEnd;
  constructor(
    constructor1: ClassModel | undefined = undefined,
    teacher_name: string = "",
    student_name: string = "",
    title: string = "",
    description: string = "",
    date: Date = new Date(),
    duration: string = "",
    status: string = "",
    grade: number = 1,
    time: string = "",
    id: string = "",
    payment_id: string = "",
    frontEnd: ClassModelFrontEnd = new ClassModelFrontEnd()
  ) {
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
      this.payment_id = constructor1.payment_id
      this.frontEnd = constructor1.frontEnd;
      this.frontEnd.dateString = formatDateToString(date);
    } else {
      this.id = id!;
      this.teacher_name = teacher_name;
      this.student_name = student_name;
      this.title = title;
      this.description = description;
      this.date = date;
      this.duration = duration;
      this.status = status;
      this.grade = grade;
      this.time = time;
      this.payment_id = payment_id
      this.frontEnd = frontEnd;
      this.frontEnd.dateString = formatDateToString(date);
    }
  }
}
class ClassModelFrontEnd {
  repeat: number;
  dateString: string;
  constructor(repeat: number = 0, dateString: string = "") {
    this.repeat = repeat;
    this.dateString = dateString;
  }
}

export {
  ClassModel,
  ClassModelFrontEnd
};
