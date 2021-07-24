export default function CalculateStatus(students) {
  students.forEach((s) => {
    let sum = 0;
    for (const grade in s.grades) {
      sum += s.grades[grade];
    }
    const average = sum / Object.keys(s.grades).length;
    s.averageGPA = average;

    let attendanceScore = 0;
    let behaviorScore = 0;
    let epScore = 0;
    let gpaScore = 0;
    let status = 'DANGER';
    let attendanceStatus = 'DANGER';
    let behaviorStatus = 'DANGER';
    let epStatus = 'DANGER';
    let gpaStatus = 'DANGER';

    if (s.attendance > 50 && s.attendance < 80) {
      attendanceScore = 1;
      attendanceStatus = 'WARNING';
    }
    if (s.attendance > 80) {
      attendanceScore = 2;
      attendanceStatus = 'ON_TRACK';
    }
    if (s.behavior <= 2 && s.suspensions <= 2) {
      behaviorScore = 1;
      behaviorStatus = 'ON_TRACK';
    }
    if (s.ep) {
      epScore = 1;
      epStatus = 'ON_TRACK';
    }
    if (s.averageGPA >= 3.0) {
      gpaScore = 2;
      gpaStatus = 'ON_TRACK';
    } else if (s.averageGPA < 3.0 && s.averageGPA >= 2) {
      gpaScore = 1;
      gpaStatus = 'WARNING';
    }

    const totalScore = behaviorScore + attendanceScore + epScore + gpaScore;
    if (totalScore >= 4) {
      status = 'ON_TRACK';
    } else if (totalScore < 4 && totalScore >= 2) {
      status = 'WARNING';
    }
    s.status = status;
    s.attendanceStatus = attendanceStatus;
    s.behaviorStatus = behaviorStatus;
    s.epStatus = epStatus;
    s.gpaStatus = gpaStatus;
  });

  return students;
}
