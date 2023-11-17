
class User {
  id: number;
  email: string;
  password: string;
  role: string;

  constructor(id: number, email: string, password: string, role: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}

class Student extends User {
  studentId: number;

  constructor(id: number, email: string, password: string, role: string, studentId: number) {
    super(id, email, password, role);
    this.studentId = studentId;
  }
}

class Course {
  courseId: number;
  title: string;
  date: string[];

  constructor(courseId: number, name: string) {
    this.courseId = courseId;
    this.title = name;
    this.date = [];
  }

  addStudent(student: Student) {
    this.date.push(student.email);
  }
}

class Admin extends User {
  adminId: number;
  courses: Course[];

  constructor(id: number, email: string, password: string, role: string, adminId: number) {
    super(id, email, password, role);
    this.adminId = adminId;
    this.courses = [];
  }

  createCourse(courseId: number, name: string) {
    const course = new Course(courseId, name);
    this.courses.push(course);
  }

  addStudentToCourse(courseId: number, student: Student) {
    const course = this.courses.find(course => course.courseId === courseId);
    if (course) {
      course.addStudent(student);
    }
  }
}

