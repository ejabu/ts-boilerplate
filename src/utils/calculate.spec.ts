import { calculate } from './calculate';

describe('Calculate', () => {
  test('use-case-1', async () => {
    const res = calculate();
    expect(res).toEqual(1);
  });
});
