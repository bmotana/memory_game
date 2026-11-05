import test from 'node:test';
import assert from 'node:assert/strict';
import { generateSequence, getExpectedSequence } from '../src/sequence.js';

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

test('returns sequence in forward order when reverse is disabled', () => {
  const input = ['1', '3', '4', '7'];
  assert.deepEqual(getExpectedSequence(input, false), ['1', '3', '4', '7']);
});

test('returns sequence in reverse order when reverse is enabled', () => {
  const input = ['1', '3', '4', '7'];
  assert.deepEqual(getExpectedSequence(input, true), ['7', '4', '3', '1']);
});

test('does not mutate original sequence when reversing', () => {
  const input = ['1', '3', '4', '7'];
  getExpectedSequence(input, true);
  assert.deepEqual(input, ['1', '3', '4', '7']);
});

test('handles non-array or empty input in getExpectedSequence', () => {
  assert.deepEqual(getExpectedSequence([], true), []);
  assert.deepEqual(getExpectedSequence(null, true), []);
});

test('defaults reverse to false in getExpectedSequence', () => {
  const input = ['A', 'B', 'C'];
  assert.deepEqual(getExpectedSequence(input), ['A', 'B', 'C']);
});

test('defaults noRepeat to false in generateSequence', () => {
  const sequence = generateSequence(['A'], 3);
  assert.deepEqual(sequence, ['A', 'A', 'A']);
});
