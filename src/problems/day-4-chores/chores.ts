/**
 * Interface for a Range structure with a start and an end.
 */
interface Range {
  start: number;
  end: number;
}

/**
 * Interface for a pair of ranges.
 */
interface RangePair {
  first: Range;
  second: Range;
}

/**
 * Parse a string of the form <range1start>-<range1end>,<range2start>-<range2end> into a RangePair.
 *
 * @param chorePair The string to parse
 * @returns The RangePair
 */
function parseChorePair(chorePair: string): RangePair {
  const [range1, range2] = chorePair.split(',');

  if (!range1 || !range2) {
    throw new Error(`Invalid range pair: ${chorePair}`);
  }

  const [range1Start, range1End] = range1.split('-');
  const [range2Start, range2End] = range2.split('-');

  return {
    first: { start: Number(range1Start), end: Number(range1End) },
    second: { start: Number(range2Start), end: Number(range2End) }
  };
}

/**
 * Check if a entirely contains b.
 *
 * @param a The first Range
 * @param b The second Range
 * @returns true if Range a entirely contains Range b.
 */
function detectContains(a: Range, b: Range): boolean {
  return a.start <= b.start && a.end >= b.end;
}

/**
 * Check if either Ranges in RangePair pair contain the other.
 *
 * @param pair The RangePair
 * @returns true if either Ranges in pair contain the other.
 */
function detectCrossContains(pair: RangePair) {
  return detectContains(pair.first, pair.second) || detectContains(pair.second, pair.first);
}

/**
 * Check if there is any overlap between the Ranges in pair.
 *
 * @param pair The RangePair
 * @returns true if any overlap exists in pair
 */
function detectOverlap(pair: RangePair): boolean {
  const chronoFirst = pair.first.start < pair.second.start ? pair.first : pair.second;
  const chronoSecond = chronoFirst === pair.first ? pair.second : pair.first;

  return chronoFirst.end >= chronoSecond.start;
}

/**
 * Calculate the number of pairs of Elves whos chores entirely overlap.
 *
 * https://adventofcode.com/2022/day/4
 *
 * @param chorePairs A list of string of the form <range1start>-<range1end>,<range2start>-<range2end>
 */
export function calulculateTotalOverlap(chorePairs: string[]): number {
  let countCompleteOverlaps = 0;

  chorePairs.forEach(chorePair => {
    if (detectCrossContains(parseChorePair(chorePair))) {
      countCompleteOverlaps++;
    }
  });

  return countCompleteOverlaps;
}

/**
 * Calculate the number of pairs of Elves whos chores overlap at all.
 *
 * https://adventofcode.com/2022/day/4
 *
 * @param chorePairs A list of string of the form <range1start>-<range1end>,<range2start>-<range2end>
 */
export function calculateAnyOverlap(chorePairs: string[]): number {
  let countCompleteOverlaps = 0;

  chorePairs.forEach(chorePair => {
    if (detectOverlap(parseChorePair(chorePair))) {
      countCompleteOverlaps++;
    }
  });

  return countCompleteOverlaps;
}
