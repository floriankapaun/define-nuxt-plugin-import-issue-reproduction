import { expect, it, vi } from 'vitest';

import { xyz } from '~~/plugins/my-plugin';

// NOTE: This test will only work, if the following 3 lines are uncommented
// vi.mock('#app', () => ({
//     defineNuxtPlugin: vi.fn(),
// }));

it('works', () => {
    expect(xyz).toEqual('xyz');
});
