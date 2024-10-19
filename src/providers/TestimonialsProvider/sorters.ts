export const semesterSorter = (a: string, b: string) => {
  const [yearA, seasonA] = a.split(" ");
  const [yearB, seasonB] = b.split(" ");

  if (yearA !== yearB) {
    return yearB.localeCompare(yearA);
  }

  if (seasonA === "letni" && seasonB === "zimowy") {
    return -1;
  }
  if (seasonA === "zimowy" && seasonB === "letni") {
    return 1;
  }
  return 0;
};

export const courseSorter = (a: string, b: string) => {
  const courseNameA = a.replace(/\([^()]*\)/g, "").trim();
  const courseNameB = b.replace(/\([^()]*\)/g, "").trim();

  if (courseNameA !== courseNameB) {
    return courseNameA.localeCompare(courseNameB); // Compare as strings
  }

  const getTypePriority = (course: string) => {
    if (course.includes("(Wykład)")) return 1;
    if (course.includes("(Pracownia)")) return 2;
    if (course.includes("(Ćwiczenia)")) return 3;
    return 4;
  };

  const typePriorityA = getTypePriority(a);
  const typePriorityB = getTypePriority(b);

  return typePriorityA - typePriorityB;
};
