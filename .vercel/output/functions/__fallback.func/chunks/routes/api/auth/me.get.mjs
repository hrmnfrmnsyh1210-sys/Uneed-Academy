import { d as defineEventHandler, l as getUserSession } from '../../../_/nitro.mjs';
import 'unhead/server';
import '../../../_/vue.mjs';
import 'unhead/legacy';
import 'unhead/plugins';
import 'bcryptjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'consola';
import 'node:fs';
import 'node:path';

const me_get = defineEventHandler(async (event) => {
  const session = await getUserSession(event);
  return {
    authenticated: !!(session == null ? void 0 : session.user),
    user: (session == null ? void 0 : session.user) || null
  };
});

export { me_get as default };
//# sourceMappingURL=me.get.mjs.map
