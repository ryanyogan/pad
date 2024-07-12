import { colors } from "@/data/colors";
import { users } from "@/data/users";

export async function getUser(userId: string) {
  let user = users.find((user) => user.id === userId);
  if (!user) {
    return null;
  }

  let color = getRandom(colors, userId);

  return { ...user, color };
}

export function getRandom<T>(array: T[], seed?: string): T {
  let index = seed
    ? Math.abs(hashCode(seed)) % array.length
    : Math.floor(Math.random() * array.length);

  return array[index];
}

/**
 * Calculates the hash code for a given string.
 *
 * @param string - The string to calculate the hash code for.
 * @returns The hash code of the string.
 */
function hashCode(string: string) {
  let hash = 0;
  if (string.length > 0) {
    let index = 0;

    while (index < string.length) {
      hash = ((hash << 5) - hash + string.charCodeAt(index++)) | 0;
    }
  }
  return hash;
}
