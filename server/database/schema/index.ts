import {
  mysqlTable,
  varchar,
  text,
  boolean,
  timestamp,
  decimal,
  int,
  json,
  primaryKey,
  uniqueIndex,
  index
} from 'drizzle-orm/mysql-core'
import { relations } from 'drizzle-orm'

// 1. USERS & AUTHENTICATION
export const users = mysqlTable('users', {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  username: varchar('username', { length: 64 }).notNull().unique(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  phoneNumber: varchar('phone_number', { length: 32 }),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  avatarUrl: text('avatar_url'),
  bio: text('bio'),
  headline: varchar('headline', { length: 255 }),
  githubUrl: varchar('github_url', { length: 255 }),
  websiteUrl: varchar('website_url', { length: 255 }),
  isEmailVerified: boolean('is_email_verified').default(false).notNull(),
  isPortfolioPublic: boolean('is_portfolio_public').default(true).notNull(),
  status: varchar('status', { length: 32 }).default('active').notNull(), // active, suspended
  totalXp: int('total_xp').default(0).notNull(),
  currentLevel: int('current_level').default(1).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
  deletedAt: timestamp('deleted_at'),
})

export const roles = mysqlTable('roles', {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: varchar('name', { length: 64 }).notNull().unique(), // super_admin, mentor, student
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const userRoles = mysqlTable('user_roles', {
  userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  roleId: varchar('role_id', { length: 36 }).notNull().references(() => roles.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => ({
  pk: primaryKey({ columns: [table.userId, table.roleId] }),
}))

export const emailVerificationTokens = mysqlTable('email_verification_tokens', {
  id: varchar('id', { length: 36 }).primaryKey(),
  userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  tokenHash: varchar('token_hash', { length: 255 }).notNull().unique(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const passwordResetTokens = mysqlTable('password_reset_tokens', {
  id: varchar('id', { length: 36 }).primaryKey(),
  userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  tokenHash: varchar('token_hash', { length: 255 }).notNull().unique(),
  isUsed: boolean('is_used').default(false).notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// 2. CATEGORIES & CLASSES
export const categories = mysqlTable('categories', {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  slug: varchar('slug', { length: 128 }).notNull().unique(),
  icon: varchar('icon', { length: 64 }),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const classes = mysqlTable('classes', {
  id: varchar('id', { length: 36 }).primaryKey(),
  categoryId: varchar('category_id', { length: 36 }).references(() => categories.id),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  shortDescription: text('short_description'),
  fullDescription: text('full_description'),
  thumbnailUrl: text('thumbnail_url'),
  bannerUrl: text('banner_url'),
  difficulty: varchar('difficulty', { length: 32 }).default('beginner').notNull(), // beginner, intermediate, advanced
  price: decimal('price', { precision: 12, scale: 2 }).default('0.00').notNull(),
  discountPrice: decimal('discount_price', { precision: 12, scale: 2 }),
  estimatedDurationHours: int('estimated_duration_hours').default(10).notNull(),
  learningOutcomes: json('learning_outcomes').$type<string[]>(),
  prerequisites: json('prerequisites').$type<string[]>(),
  targetAudience: json('target_audience').$type<string[]>(),
  toolsRequired: json('tools_required').$type<string[]>(),
  status: varchar('status', { length: 32 }).default('draft').notNull(), // draft, published, archived
  version: int('version').default(1).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
  deletedAt: timestamp('deleted_at'),
})

export const classMentors = mysqlTable('class_mentors', {
  classId: varchar('class_id', { length: 36 }).notNull().references(() => classes.id, { onDelete: 'cascade' }),
  mentorId: varchar('mentor_id', { length: 36 }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  assignedAt: timestamp('assigned_at').defaultNow().notNull(),
}, (table) => ({
  pk: primaryKey({ columns: [table.classId, table.mentorId] }),
}))

export const classModules = mysqlTable('class_modules', {
  id: varchar('id', { length: 36 }).primaryKey(),
  classId: varchar('class_id', { length: 36 }).notNull().references(() => classes.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  orderIndex: int('order_index').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
})

export const lessons = mysqlTable('lessons', {
  id: varchar('id', { length: 36 }).primaryKey(),
  moduleId: varchar('module_id', { length: 36 }).notNull().references(() => classModules.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
  contentType: varchar('content_type', { length: 32 }).default('text').notNull(), // text, video, pdf
  contentBody: text('content_body'),
  videoUrl: text('video_url'),
  attachmentUrl: text('attachment_url'),
  estimatedMinutes: int('estimated_minutes').default(15).notNull(),
  orderIndex: int('order_index').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
})

// 3. TASKS & QUESTS (SEQUENTIAL LEARNING)
export const tasks = mysqlTable('tasks', {
  id: varchar('id', { length: 36 }).primaryKey(),
  moduleId: varchar('module_id', { length: 36 }).notNull().references(() => classModules.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
  taskType: varchar('task_type', { length: 32 }).default('coding').notNull(), // reading, coding, project, quiz, deployment, final_project
  description: text('description'),
  instructions: text('instructions'),
  referenceMaterials: text('reference_materials'),
  aiPrompt: text('ai_prompt'),
  submissionTypes: json('submission_types').$type<string[]>(), // text, github_url, live_url, zip, screenshot, pdf
  minPassingScore: int('min_passing_score').default(70).notNull(),
  maxScore: int('max_score').default(100).notNull(),
  estimatedDurationMinutes: int('estimated_duration_minutes').default(60).notNull(),
  orderIndex: int('order_index').default(0).notNull(),
  isRequired: boolean('is_required').default(true).notNull(),
  validationMethod: varchar('validation_method', { length: 32 }).default('manual_mentor').notNull(), // manual_mentor, auto_quiz, confirmation
  xpReward: int('xp_reward').default(100).notNull(),
  badgeId: varchar('badge_id', { length: 36 }),
  status: varchar('status', { length: 32 }).default('published').notNull(), // draft, published
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
})

// 4. ENROLLMENTS & TRANSACTIONS
export const enrollments = mysqlTable('enrollments', {
  id: varchar('id', { length: 36 }).primaryKey(),
  userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  classId: varchar('class_id', { length: 36 }).notNull().references(() => classes.id, { onDelete: 'cascade' }),
  status: varchar('status', { length: 32 }).default('pending').notNull(), // pending, active, completed, expired, suspended, revoked
  progressPercentage: int('progress_percentage').default(0).notNull(),
  completedTasksCount: int('completed_tasks_count').default(0).notNull(),
  totalRequiredTasks: int('total_required_tasks').default(0).notNull(),
  enrolledAt: timestamp('enrolled_at').defaultNow().notNull(),
  completedAt: timestamp('completed_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  userClassIdx: uniqueIndex('user_class_idx').on(table.userId, table.classId),
}))

export const transactions = mysqlTable('transactions', {
  id: varchar('id', { length: 36 }).primaryKey(),
  userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id),
  classId: varchar('class_id', { length: 36 }).notNull().references(() => classes.id),
  enrollmentId: varchar('enrollment_id', { length: 36 }).references(() => enrollments.id),
  orderId: varchar('order_id', { length: 64 }).notNull().unique(),
  paymentMethod: varchar('payment_method', { length: 32 }).notNull(), // midtrans, manual_transfer, free
  amount: decimal('amount', { precision: 12, scale: 2 }).notNull(),
  status: varchar('status', { length: 32 }).default('pending').notNull(), // pending, waiting_verification, paid, failed, expired, rejected, cancelled
  paymentProofUrl: text('payment_proof_url'),
  rejectionReason: text('rejection_reason'),
  snapToken: varchar('snap_token', { length: 255 }),
  paidAt: timestamp('paid_at'),
  verifiedByUserId: varchar('verified_by_user_id', { length: 36 }).references(() => users.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
})

// 5. PROGRESS, SUBMISSIONS & REVIEWS
export const lessonProgress = mysqlTable('lesson_progress', {
  id: varchar('id', { length: 36 }).primaryKey(),
  userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  lessonId: varchar('lesson_id', { length: 36 }).notNull().references(() => lessons.id, { onDelete: 'cascade' }),
  isCompleted: boolean('is_completed').default(false).notNull(),
  completedAt: timestamp('completed_at'),
}, (table) => ({
  userLessonIdx: uniqueIndex('user_lesson_idx').on(table.userId, table.lessonId),
}))

export const taskProgress = mysqlTable('task_progress', {
  id: varchar('id', { length: 36 }).primaryKey(),
  userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  taskId: varchar('task_id', { length: 36 }).notNull().references(() => tasks.id, { onDelete: 'cascade' }),
  classId: varchar('class_id', { length: 36 }).notNull().references(() => classes.id, { onDelete: 'cascade' }),
  status: varchar('status', { length: 32 }).default('locked').notNull(), // locked, available, in_progress, submitted, under_review, revision_required, completed
  highestScore: int('highest_score').default(0).notNull(),
  unlockedAt: timestamp('unlocked_at'),
  completedAt: timestamp('completed_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  userTaskIdx: uniqueIndex('user_task_idx').on(table.userId, table.taskId),
}))

export const taskSubmissions = mysqlTable('task_submissions', {
  id: varchar('id', { length: 36 }).primaryKey(),
  taskProgressId: varchar('task_progress_id', { length: 36 }).notNull().references(() => taskProgress.id, { onDelete: 'cascade' }),
  userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id),
  taskId: varchar('task_id', { length: 36 }).notNull().references(() => tasks.id),
  attemptNumber: int('attempt_number').default(1).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  githubUrl: varchar('github_url', { length: 255 }),
  liveUrl: varchar('live_url', { length: 255 }),
  attachmentUrl: text('attachment_url'),
  notes: text('notes'),
  status: varchar('status', { length: 32 }).default('submitted').notNull(), // submitted, approved, revision_required
  score: int('score'),
  mentorFeedback: text('mentor_feedback'),
  reviewedByUserId: varchar('reviewed_by_user_id', { length: 36 }).references(() => users.id),
  submittedAt: timestamp('submitted_at').defaultNow().notNull(),
  reviewedAt: timestamp('reviewed_at'),
})

// 6. GAMIFICATION: BADGES & XP
export const badges = mysqlTable('badges', {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  slug: varchar('slug', { length: 128 }).notNull().unique(),
  description: text('description'),
  iconName: varchar('icon_name', { length: 64 }).default('Award').notNull(),
  imageUrl: text('image_url'),
  rarity: varchar('rarity', { length: 32 }).default('common').notNull(), // common, rare, epic, legendary
  colorHex: varchar('color_hex', { length: 16 }).default('#6366F1').notNull(),
  xpReward: int('xp_reward').default(100).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const userBadges = mysqlTable('user_badges', {
  id: varchar('id', { length: 36 }).primaryKey(),
  userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  badgeId: varchar('badge_id', { length: 36 }).notNull().references(() => badges.id, { onDelete: 'cascade' }),
  taskId: varchar('task_id', { length: 36 }).references(() => tasks.id),
  earnedAt: timestamp('earned_at').defaultNow().notNull(),
}, (table) => ({
  userBadgeIdx: uniqueIndex('user_badge_idx').on(table.userId, table.badgeId),
}))

export const xpTransactions = mysqlTable('xp_transactions', {
  id: varchar('id', { length: 36 }).primaryKey(),
  userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  amount: int('amount').notNull(),
  sourceType: varchar('source_type', { length: 64 }).notNull(), // task_completion, class_completion, streak, bonus
  sourceId: varchar('source_id', { length: 64 }),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// 7. CERTIFICATES
export const certificates = mysqlTable('certificates', {
  id: varchar('id', { length: 36 }).primaryKey(),
  certificateNumber: varchar('certificate_number', { length: 64 }).notNull().unique(), // UA-YYYY-XXXXXXXX
  userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id),
  classId: varchar('class_id', { length: 36 }).notNull().references(() => classes.id),
  finalScore: int('final_score').notNull(),
  totalDurationHours: int('total_duration_hours').notNull(),
  mentorName: varchar('mentor_name', { length: 255 }).notNull(),
  pdfUrl: text('pdf_url').notNull(),
  qrCodeUrl: text('qr_code_url'),
  status: varchar('status', { length: 32 }).default('valid').notNull(), // valid, revoked
  issuedAt: timestamp('issued_at').defaultNow().notNull(),
  revokedAt: timestamp('revoked_at'),
  revokedReason: text('revoked_reason'),
}, (table) => ({
  userClassCertIdx: uniqueIndex('user_class_cert_idx').on(table.userId, table.classId),
}))

// 8. NOTIFICATIONS & AUDIT LOGS
export const notifications = mysqlTable('notifications', {
  id: varchar('id', { length: 36 }).primaryKey(),
  userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 255 }).notNull(),
  message: text('message').notNull(),
  type: varchar('type', { length: 64 }).default('system').notNull(), // task_unlocked, submission_reviewed, badge_earned, certificate_issued
  linkUrl: varchar('link_url', { length: 255 }),
  isRead: boolean('is_read').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const auditLogs = mysqlTable('audit_logs', {
  id: varchar('id', { length: 36 }).primaryKey(),
  userId: varchar('user_id', { length: 36 }),
  action: varchar('action', { length: 128 }).notNull(),
  entityType: varchar('entity_type', { length: 64 }).notNull(),
  entityId: varchar('entity_id', { length: 64 }),
  details: json('details'),
  ipAddress: varchar('ip_address', { length: 64 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
