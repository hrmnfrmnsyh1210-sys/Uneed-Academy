import { d as defineEventHandler, k as clearUserSession } from '../../../_/nitro.mjs';
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

const logout_post = defineEventHandler(async (event) => {
  await clearUserSession(event);
  return {
    success: true,
    message: "Berhasil keluar"
  };
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
