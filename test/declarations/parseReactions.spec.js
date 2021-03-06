import createContext from '../../src/ctx/createContext';
import { INVALID_REACTION } from '../../src/utils/alert';
import { ON_EVENT } from '../../src/config/constants';

describe('parseReaction', () => {
  it('should fail when invalid reaction passed', () => {
    expect(() =>
      createContext({
        [ON_EVENT]: [
          {
            on: 'test',
            reaction: 'not a func or func array'
          }
        ]
      })
    ).toThrow(INVALID_REACTION);
  });

  it('should not fail when reaction is omitted', () => {
    expect(() =>
      createContext({
        [ON_EVENT]: [
          {
            on: 'test'
          }
        ]
      })
    ).not.toThrow(INVALID_REACTION);
  });
});
