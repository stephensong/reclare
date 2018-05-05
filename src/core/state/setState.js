import { fail } from '../utils/alert';
import ctx from '../ctx';
import { BEFORE_SET_STATE, AFTER_SET_STATE } from '../middlewares/hookTypes';

import executeHooks from '../middlewares/executeHooks';

export default nextState => {
  const prevState = ctx.state;

  executeHooks({ id: BEFORE_SET_STATE }, ctx.state, nextState);

  ctx.state = nextState;

  executeHooks({ id: AFTER_SET_STATE }, prevState, ctx.state);
};