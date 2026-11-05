export function generateSequence(pool, length, noRepeat = false, random = Math.random) {
  if (!pool.length || length <= 0) return [];

  if (!noRepeat) {
    return Array.from({ length }, () => pool[Math.floor(random() * pool.length)]);
  }

  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, length);
}

export function getExpectedSequence(sequence, reverse = false) {
  if (!Array.isArray(sequence)) return [];
  return reverse ? [...sequence].reverse() : [...sequence];
}
