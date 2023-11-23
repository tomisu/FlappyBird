export default function compareScores(entryA, entryB) {
  const aScore = entryA[1];
  const bScore = entryB[1];

  if (aScore === null && bScore === null) {
    return 0;
  }

  if (aScore === null) {
    return -1;
  }
  if (bScore === null) {
    return 1;
  }

  return aScore >= bScore ? -1 : 1;
}