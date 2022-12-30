import { formatDateToString } from "./_helpers";

class PaymentModel {
  id: string = "";
  teacher_id: string = "";
  student_id: string = "";
  date: Date = new Date();
  value: number = 1;
  status: "paid" | "pending" | "late" | "" = "";
  frontEnd: PaymentModelFrontEnd = new PaymentModelFrontEnd();
  constructor(
    constructor1: PaymentModel | undefined = undefined,
    id: string = "",
    teacher_id: string = "",
    student_id: string = "",
    date: Date = new Date(),
    value: number = 1,
    status: "paid" | "pending" | "late" | "" = "",
    frontEnd: PaymentModelFrontEnd = new PaymentModelFrontEnd()
  ) {
    if (constructor1 != undefined) {
      this.id = constructor1.id;
      this.teacher_id = constructor1.teacher_id;
      this.student_id = constructor1.student_id;
      this.date = constructor1.date;
      this.value = constructor1.value;
      this.status = constructor1.status;
      this.frontEnd = constructor1.frontEnd;
      this.frontEnd.dateString = formatDateToString(date);
    } else {
      this.id = id;
      this.teacher_id = teacher_id;
      this.student_id = student_id;
      this.date = date;
      this.value = value;
      this.status = status;
      this.frontEnd = frontEnd;
      this.frontEnd.dateString = formatDateToString(date);
    }
  }
  getCredits(classPrice: number): number {
    return Math.ceil(classPrice / this.value);
  }
}

class PaymentModelFrontEnd {
  teacher_name: string;
  student_name: string;
  dateString: string;

  constructor(
    teacher_name: string = "",
    student_name: string = "",
    dateString: string = ""
  ) {
    this.teacher_name = teacher_name;
    this.student_name = student_name;
    this.dateString = dateString;
  }
}

interface PaymentModelDB {
  id: string;
  teacher_id: string;
  student_id: string;
  date: Date;
  value: number;
  status: "paid" | "pending" | "late" | "";
}

export { PaymentModel, PaymentModelFrontEnd };
