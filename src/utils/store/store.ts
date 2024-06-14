import { createStoreon } from 'storeon';

import { userModule } from './modules';

export const store = createStoreon([userModule]);
