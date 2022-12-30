class TeacherProfile {
  name: string;
  id: string;
  city: string;
  level: string;

  constructor(name: string, id: string, city: string, level: string) {
    this.name = name;
    this.id = id;
    this.city = city;
    this.level = level;
  }
}

export { TeacherProfile };

//tsc --module commonjs ./api/models/teacherModel.ts
