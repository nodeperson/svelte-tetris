import { writable } from 'svelte/store';
import { MinLevel } from '../../src/lib/settings';

const zero = {
    level: MinLevel, lines: 0
}

export const Stats = writable({ ...zero })

export function reset() {
    Stats.set(zero);
}