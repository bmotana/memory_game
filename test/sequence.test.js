import test from 'node:test';
import assert from 'node:assert/strict';
import { generateSequence } from '../src/sequence.js';

test('allows repeated characters when no-repeat is disabled', () => {
  const sequence = generateSequence(['A', 'B'], 4, false, () => 0);
  assert.deepEqual(sequence, ['A', 'A', 'A', 'A']);
});

test('returns unique characters up to the pool size when no-repeat is enabled', () => {
  const sequence = generateSequence(['A', 'B', 'C'], 3, true, () => 0);
  assert.equal(sequence.length, 3);
  assert.equal(new Set(sequence).size, 3);
});

test('does not return more unique characters than the pool contains', () => {
  const sequence = generateSequence(['A', 'B'], 5, true, () => 0);
  assert.equal(sequence.length, 2);
  assert.equal(new Set(sequence).size, sequence.length);
});

test('returns an empty sequence for an empty pool or non-positive length', () => {
  assert.deepEqual(generateSequence([], 3, true), []);
  assert.deepEqual(generateSequence(['A'], 0, true), []);
});
