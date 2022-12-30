
class aClass {
  teacher_name: string = '';
  student_name: string = '';
  title: string = '';
  description: string = '';
  date: Date = new Date();
  duration: string = '';
  status: string = '';
  grade: number = 1;
  time: string = '';
  id?: string = '';
  constructor(

    teacher_name: string = '',
    student_name: string = '',
    title: string = '',
    description: string = '',
    date: Date = new Date(),
    duration: string = '',
    status: string = '',
    grade: number = 1,
    time: string = '',
    id: string = ''
  ) {
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
  }
}

const oneClass = new aClass();