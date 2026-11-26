import { d as defineEventHandler, r as requireAdmin } from '../../../_/nitro.mjs';
import { eq, desc } from 'drizzle-orm';
import { d as db, c as classes, e as users, f as certificates } from '../../../_/connection.mjs';
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
import 'drizzle-orm/mysql2';
import 'mysql2/promise';
import 'drizzle-orm/mysql-core';

const certificates_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const rows = await db.select({
    id: certificates.id,
    certificateNumber: certificates.certificateNumber,
    status: certificates.status,
    finalScore: certificates.finalScore,
    issuedAt: certificates.issuedAt,
    mentorName: certificates.mentorName,
    recipientName: users.name,
    recipientEmail: users.email,
    className: classes.title,
    classSlug: classes.slug
  }).from(certificates).innerJoin(users, eq(certificates.userId, users.id)).innerJoin(classes, eq(certificates.classId, classes.id)).orderBy(desc(certificates.issuedAt));
  return { certificates: rows };
});

export { certificates_get as default };
//# sourceMappingURL=certificates.get.mjs.map
