/**
 * Calculate the "priority" for a rucksack item. a-z is 1-26, A-Z is 27-52.
 *
 * @param item The item whose priority should be calculated
 * @returns The priority
 */
function getPriority(item: string) {
  const modifier = /[a-z]/.test(item) ? -96 : -38;
  return item.charCodeAt(0) + modifier;
}

/**
 * Total the "priority" of all of the item types that are duplicated across both compartments
 * of gnome backpacks according to https://adventofcode.com/2022/day/3.
 *
 * @param rucksacks The list of rucksack contents represented by a-zA-Z
 * @returns The priority
 */
export function calculateDupePriority(rucksacks: string[]): number {
  let priority = 0;

  rucksacks.forEach((sack: string) => {
    const comp1: string[] = [];
    const comp2 = new Set<string>();

    // Assign to sets
    Array.from(sack).forEach((char, index) => {
      if (index + 1 <= Math.trunc(sack.length / 2)) {
        comp1.push(char);
      } else {
        comp2.add(char);
      }
    });

    // do a set intersection
    const [dupe] = comp1.filter(item => comp2.has(item));

    if (!dupe) {
      throw new Error(`Failed to find overlap: ${sack}`);
    }

    priority += getPriority(dupe);
  });

  return priority;
}

/**
 * Total the "priority" of all of the badges by type that are shared between groups of
 * 3 gnomes backpacks according to https://adventofcode.com/2022/day/3.
 *
 * @param rucksacks The list of rucksack contents represented by a-zA-Z
 * @returns The priority
 */
export function calulculateBadgePriority(sacks: string[]): number {
  let priority = 0;

  for (let i = 0; i <= sacks.length - 3; i += 3) {
    const sack1 = Array.from(sacks[i]!);
    const sack2 = new Set(Array.from(sacks[i + 1]!));
    const sack3 = new Set(Array.from(sacks[i + 2]!));

    const [badge] = sack1.filter(item => sack2.has(item) && sack3.has(item));

    if (!badge) {
      throw new Error('Could not find badge');
    }

    priority += getPriority(badge);
  }

  return priority;
}
