import { writable } from 'svelte/store';
import { randomFigure } from '../../src/lib/figures';

export const Next = writable(randomFigure())