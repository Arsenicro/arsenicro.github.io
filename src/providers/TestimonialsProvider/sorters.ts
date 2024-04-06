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
  // Extract course names without parentheses
  const courseNameA = a.replace(/\([^()]*\)/g, "").trim();
  const courseNameB = b.replace(/\([^()]*\)/g, "").trim();

  // Compare course names alphabetically
  if (courseNameA !== courseNameB) {
    return courseNameA.localeCompare(courseNameB); // Compare as strings
  }

  // If course names are equal, compare by course type
  const getTypePriority = (course: string) => {
    if (course.includes("(Wykład)")) return 1;
    if (course.includes("(Seminarium)")) return 2;
    if (course.includes("(Pracownia)")) return 3;
    if (course.includes("(Ćwiczenia)")) return 4;
    return 5; // Rest
  };

  const typePriorityA = getTypePriority(a);
  const typePriorityB = getTypePriority(b);

  return typePriorityA - typePriorityB; // Higher priority first
};
