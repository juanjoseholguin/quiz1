function computeGrades(grades) {
    const parsed = i;
    let passed = 0;
    let failed = 0;

    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];
        if (grade >= 90) {
            parsed.push('A');
            passed++;
        } else if (grade >= 80) {
            parsed.push('B');
            passed++;
        } else if (grade >= 70) {
            parsed.push('C');
            passed++;
        } else if (grade >= 60) {
            parsed.push('D');
            passed++;
        } else {
            parsed.push('F');
            failed++;
        }

  
