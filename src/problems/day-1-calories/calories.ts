import { SimplePriorityQueue } from './SimplePriorityQueue';

/**
 * Given a list of strings that represent calories held by gnomes where each string
 * is a number of calories and an empty string represents the start of a new gnome's
 * snack list, return the total calories for the gnome who has the most calories.
 *
 * @param gnomeSnacks A list of strings representing the calorie values of the gnomes' snacks.
 */
export function gnomeMostCalories(gnomeSnacks: string[]): number {
  let maxCals = 0;
  let currCals = 0;

  gnomeSnacks.forEach((calVal, index) => {
    // Handles '' as 0.
    currCals += Number(calVal);

    if (calVal === '' || index === gnomeSnacks.length - 1) {
      if (currCals > maxCals) {
        maxCals = currCals;
      }

      currCals = 0;
    }
  });

  return maxCals;
}

/**
 * Given a list of strings that represent calories held by gnomes where each string
 * is a number of calories and an empty string represents the start of a new gnome's
 * snack list, return the total calories for the top 3 gnomes who have the most calories.
 *
 * @param gnomeSnacks A list of strings representing the calorie values of the gnomes' snacks.
 */
export function threeGnomesMostCalories(gnomeSnacks: string[]): number {
  const q = new SimplePriorityQueue(3);
  let currCals = 0;

  gnomeSnacks.forEach((calVal, index) => {
    // Handles '' as 0.
    currCals += Number(calVal);

    if (calVal === '' || index === gnomeSnacks.length - 1) {
      q.insert(currCals);
      currCals = 0;
    }
  });

  return q.getItems().reduce((acc, curr) => acc + curr);
}
