# Koober Testing Hub — Architecture Documentation (English)

> This documentation is intended for new interns joining the project. It covers the full architecture, folder structure, coding conventions, and best practices used throughout the codebase.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Architecture Pattern — Feature Modules](#4-architecture-pattern--feature-modules)
5. [Routing (Next.js App Router)](#5-routing-nextjs-app-router)
6. [API Layer (Hono)](#6-api-layer-hono)
7. [Database Layer (Prisma + PostgreSQL)](#7-database-layer-prisma--postgresql)
8. [Authentication (Lucia)](#8-authentication-lucia)
9. [Data Fetching (TanStack Query)](#9-data-fetching-tanstack-query)
10. [Form Handling (React Hook Form + Zod)](#10-form-handling-react-hook-form--zod)
11. [Styling (Tailwind CSS + Shadcn/ui)](#11-styling-tailwind-css--shadcnui)
12. [State Management](#12-state-management)
13. [Email System (Resend + React Email)](#13-email-system-resend--react-email)
14. [File Uploads (Uploadthing)](#14-file-uploads-uploadthing)
15. [Code Conventions & Best Practices](#15-code-conventions--best-practices)
16. [Environment Configuration](#16-environment-configuration)
17. [How to Work on a New Feature](#17-how-to-work-on-a-new-feature)

---

## 1. Project Overview

Koober Testing Hub is a **full-stack project and task management platform** built with Next.js 15 (App Router). It is designed for software teams to manage projects, tasks, team members, notifications, analytics, and reports — all in one place.

The application features:
- User authentication with session management
- Role-based access control (admin, tester, developer)
- Project and task lifecycle management
- Real-time notifications
- Analytics and reporting
- Email notifications (invites, password reset, role changes)
- File attachments
- Dark mode support

---

## 2. Tech Stack

| Category | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.4.2 |
| Language | TypeScript | 5.9.2 |
| UI Library | React | 19.1.0 |
| Styling | Tailwind CSS | 4.1.11 |
| Component Library | Shadcn/ui + Radix UI | Latest |
| Icons | Lucide React | Latest |
| Server Framework | Hono | 4.9.4 |
| ORM | Prisma | 6.14.0 |
| Database | PostgreSQL | — |
| Authentication | Lucia | 3.2.2 |
| Data Fetching | TanStack React Query | 5.85.2 |
| Forms | React Hook Form | 7.62.0 |
| Validation | Zod | 4.0.17 |
| Email Service | Resend | 6.0.1 |
| Email Templates | React Email | 4.2.8 |
| File Uploads | Uploadthing | 7.7.3 |
| HTTP Client | Axios | 1.11.0 |
| URL State | nuqs | 2.4.3 |
| Notifications (UI) | Sonner | 2.0.7 |
| Date Utilities | date-fns | 4.1.0 |
| Bundler | Turbopack (via Next.js) | — |

---

## 3. Project Structure

```
koober_testing_hub/
│
├── src/                          # All application source code
│   ├── app/                      # Next.js App Router pages & API routes
│   ├── modules/                  # Feature-based modules (core of the app)
│   ├── components/               # Global shared UI components
│   ├── layout/                   # App layout (sidebar, header, navigation)
│   ├── providers/                # React context providers
│   ├── hooks/                    # Global custom React hooks
│   ├── library/                  # External service clients (Prisma, Hono, etc.)
│   ├── server/                   # Global server-only code (routes, services)
│   ├── services/                 # Shared services (validations)
│   ├── helpers/                  # Utility functions (env, errors, UI utils)
│   ├── constants/                # Application-wide constants
│   └── types/                    # Global TypeScript types
│
├── prisma/                       # Database schema and seed data
├── generated/prisma/             # Auto-generated Prisma client (do not edit)
├── emails/                       # React Email templates
├── public/                       # Static assets
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── components.json               # Shadcn/ui configuration
└── .prettierrc
```

---

## 4. Architecture Pattern — Feature Modules

The most important architectural decision in this project is the **Feature Module** pattern. Every feature (team, projects, tasks, auth, etc.) lives in its own self-contained module under `src/modules/`.

### Module Structure

```
src/modules/{feature}/
│
├── index.tsx                     # Entry point — the main view component
│
├── components/
│   ├── sections/                 # Large section components (page-level compositions)
│   ├── common/                   # Small reusable components within this module
│   ├── dialogs/                  # Modal and dialog components
│   └── skeletons/                # Loading skeleton components
│
├── hooks/
│   ├── queries/                  # TanStack Query hooks (data fetching)
│   ├── mutations/                # TanStack Mutation hooks (create/update/delete)
│   └── search/                   # Hooks for search and filter state
│
├── server/
│   ├── routes/                   # Hono API route handlers
│   │   ├── get.routes.ts         # GET endpoints
│   │   ├── post.routes.ts        # POST endpoints
│   │   ├── put.routes.ts         # PUT endpoints
│   │   └── delete.routes.ts      # DELETE endpoints
│   ├── validations/              # Zod schemas for this module's API
│   │   ├── get.validations.ts
│   │   ├── post.validations.ts
│   │   └── put.validations.ts
│   └── selectors/                # Prisma select objects (explicit field selection)
│
├── services/
│   ├── actions.ts                # Next.js Server Actions (form submissions)
│   └── validations.ts            # Zod schemas for server actions
│
└── constants/                    # Module-specific constants
```

### Why This Pattern?

- **Locality**: everything related to a feature is in one place
- **Scalability**: adding a new feature means adding a new module folder
- **Clear boundaries**: team members can work on different modules independently
- **Discoverability**: new developers can navigate directly to the feature they're working on

### Example: Team Module

```
src/modules/team/
├── index.tsx                     # Renders the team management page
├── components/
│   ├── sections/
│   │   ├── TeamHeader.tsx
│   │   └── MembersList.tsx
│   ├── dialogs/
│   │   └── InviteMemberDialog.tsx
│   └── skeletons/
│       └── MembersListSkeleton.tsx
├── hooks/
│   ├── queries/
│   │   └── useTeamMembers.ts     # Fetches team members list
│   └── mutations/
│       └── useInviteMember.ts    # Handles invite form submission
├── server/
│   ├── routes/
│   │   ├── get.routes.ts
│   │   └── post.routes.ts
│   ├── validations/
│   │   └── get.validations.ts
│   └── selectors/
│       └── get.selectors.ts
└── services/
    └── actions.ts
```

---

## 5. Routing (Next.js App Router)

The application uses Next.js 15 **App Router** exclusively. All page files are in `src/app/`.

### Page Routes

```
/                               → src/app/page.tsx           (landing / redirect)
/auth                           → src/app/auth/page.tsx      (login page)
/auth/reset-password/[token]    → src/app/auth/reset-password/[token]/page.tsx
/dashboard                      → src/app/dashboard/page.tsx
/dashboard/projects/[id]        → src/app/dashboard/projects/[id]/page.tsx
/dashboard/tasks/[id]           → src/app/dashboard/tasks/[id]/page.tsx
/dashboard/team                 → src/app/dashboard/team/page.tsx
/dashboard/analytics            → src/app/dashboard/analytics/page.tsx
/dashboard/notifications        → src/app/dashboard/notifications/page.tsx
/dashboard/reports              → src/app/dashboard/reports/page.tsx
/dashboard/profile              → src/app/dashboard/profile/page.tsx
/dashboard/settings             → src/app/dashboard/settings/page.tsx
/dashboard/search               → src/app/dashboard/search/page.tsx
```

### Layouts

- `src/app/layout.tsx` — root layout, wraps the entire app with providers
- `src/app/auth/layout.tsx` — auth-specific layout (no sidebar)
- `src/app/dashboard/layout.tsx` — dashboard layout with sidebar and header

### Page Component Convention

Page components are **server components** by default. They perform authentication and pass initial data as props to module entry points:

```tsx
// src/app/dashboard/team/page.tsx
import { getAuth } from "@/auth/helpers";
import TeamModule from "@/modules/team";

export default async function TeamPage() {
  const { user } = await getAuth(); // Server-side auth check
  return <TeamModule user={user} />;
}
```

### Key Rule

> Pages in `src/app/` should be **thin** — they only handle authentication checks and pass data down. All actual UI lives in `src/modules/`.

---

## 6. API Layer (Hono)

The project uses **Hono** as its backend API framework, running within Next.js via a catch-all API route.

### Entry Point

```
src/app/api/[[...route]]/route.ts
```

This single file mounts all Hono route groups and exports Next.js handlers:

```ts
import { Hono } from "hono";
import { handle } from "hono/vercel";
import teamRoutes from "@/modules/team/server/routes/...";

const app = new Hono().basePath("/api");

app.route("/team", teamRoutes);
app.route("/projects", projectRoutes);
// ...

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
```

### Defining Routes

Each module defines its own routes file. Route handlers follow this pattern:

```ts
// src/modules/team/server/routes/get.routes.ts
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { requireAuthMiddleware } from "@/auth/middlewares";
import { getMembersSchema } from "../validations/get.validations";
import { getMembersSelect } from "../selectors/get.selectors";

const teamGetRoutes = new Hono()
  .get(
    "/members",
    requireAuthMiddleware,
    zValidator("query", getMembersSchema),
    async (c) => {
      const query = c.req.valid("query");
      const members = await db.user.findMany({
        where: { /* filters from query */ },
        select: getMembersSelect,
      });
      return c.json({ data: members });
    }
  );

export default teamGetRoutes;
```

### Middleware

Two key middlewares are defined in `src/auth/middlewares.ts`:

- `requireAuthMiddleware` — validates the session cookie; rejects unauthenticated requests with 401
- `requireRoleMiddleware(role)` — rejects requests from users without the required role

### Type-Safe Client

Hono generates a fully type-safe client from the route definitions. The client is instantiated in `src/library/server.ts`:

```ts
import { hc } from "hono/client";
import type { AppType } from "@/app/api/[[...route]]/route";

export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);
```

Client usage in hooks:
```ts
const response = await client.api.team.members.$get({ query: params });
```

### Validations

Every route that accepts parameters uses `@hono/zod-validator` for input validation. Schemas live in `server/validations/`:

```ts
// get.validations.ts
export const getMembersSchema = z.object({
  search: z.string().optional(),
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
});
```

### Selectors

To avoid over-fetching, all Prisma queries use explicit `select` objects defined in `server/selectors/`:

```ts
// get.selectors.ts
export const getMembersSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  image: true,
} satisfies Prisma.UserSelect;
```

Using `satisfies Prisma.UserSelect` ensures TypeScript checks the selector against the actual Prisma model.

---

## 7. Database Layer (Prisma + PostgreSQL)

### Schema Location

`prisma/schema.prisma`

### Prisma Client Singleton

A single Prisma client instance is shared across the app, preventing connection pool exhaustion in development:

```ts
// src/library/database.ts
import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
```

Always import `db` from `@/library/database`, never instantiate `new PrismaClient()` elsewhere.

### Core Models

| Model | Purpose |
|---|---|
| `User` | Platform users with roles: `admin`, `tester`, `developer` |
| `Session` | Lucia auth sessions |
| `ResetPassword` | Password reset tokens with expiry |
| `Project` | Projects with status and type |
| `ProjectMember` | Users assigned to projects with roles |
| `Task` | Tasks with severity, type, status, assignment |
| `Subtask` | Child tasks under a parent task |
| `Comment` | Threaded comments on tasks |
| `Attachment` | File attachments on tasks |
| `Activity` | Audit log of all actions |
| `Notification` | In-app notifications for users |
| `Profession` | Skills/roles for team members |
| `DailyStats` | Analytics: daily statistics |
| `BugReportTemplate` | Reusable bug report templates |

### NPM Scripts

```bash
npm run db:push       # Apply schema changes to the database
npm run db:generate   # Regenerate the Prisma client after schema change
npm run db:seed       # Run seed data (prisma/seed.ts)
```

> Always run `db:generate` after editing `prisma/schema.prisma`.

---

## 8. Authentication (Lucia)

### How it Works

Authentication is handled by **Lucia** (v3), a session-based auth library.

1. On login, a Lucia session is created and stored in the `Session` table
2. A session cookie is set in the browser
3. On every server request, `getAuth()` reads and validates the cookie
4. Sessions can be invalidated (logout, password change)

### Key Files

| File | Purpose |
|---|---|
| `src/auth/auth.ts` | Lucia instance and adapter configuration |
| `src/auth/actions.ts` | `logout` server action |
| `src/auth/helpers.ts` | `getAuth()` — validate session and return user |
| `src/auth/middlewares.ts` | Hono middlewares for API route protection |

### `getAuth()` Usage

```ts
// In any Server Component or page
import { getAuth } from "@/auth/helpers";

export default async function Page() {
  const { user, session } = await getAuth();
  // user is null if not authenticated
}
```

### Password Reset Flow

1. User submits their email on the forgot-password form
2. A 6-digit numeric code is generated
3. A JWT token is created (HS256, 15-minute expiry) containing the code and user email
4. The token is stored in the `ResetPassword` table
5. An email is sent with the reset link: `/auth/reset-password/{token}`
6. User opens the link and submits the 6-digit code
7. The code is verified against the JWT payload
8. Password is hashed with bcryptjs and updated
9. All existing sessions for the user are invalidated

---

## 9. Data Fetching (TanStack Query)

All **client-side** data fetching is done with **TanStack React Query v5**.

### Setup

The query client is configured in `src/providers/query-provider.tsx` and wrapped around the app in `src/providers/index.tsx`.

### Convention: Custom Query Hooks

Every data fetch has a dedicated custom hook in `modules/{feature}/hooks/queries/`:

```ts
// src/modules/team/hooks/queries/useTeamMembers.ts
import { useQuery } from "@tanstack/react-query";
import { client } from "@/library/server";

export const useTeamMembers = (params: GetMembersParams) => {
  return useQuery({
    queryKey: ["team", "members", params],
    queryFn: async () => {
      const res = await client.api.team.members.$get({ query: params });
      return res.json();
    },
  });
};
```

### Convention: Custom Mutation Hooks

Create/update/delete operations use `useMutation` hooks in `hooks/mutations/`:

```ts
export const useInviteMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InviteData) => {
      // call server action or API
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team", "members"] });
      toast.success("Member invited successfully");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
```

### Query Key Convention

Query keys are arrays that describe the data:
- `["team", "members"]` — all team members
- `["team", "members", { search: "john", page: 1 }]` — filtered members
- `["projects", projectId, "tasks"]` — tasks for a specific project

---

## 10. Form Handling (React Hook Form + Zod)

Forms use **React Hook Form** with **Zod** for type-safe validation.

### Pattern

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof schema>;

export function LoginForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: FormData) => {
    // call server action
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
```

### Server Actions

Form submissions go through Next.js **Server Actions** defined in `modules/{feature}/services/actions.ts`. Server actions run on the server and can directly call Prisma or Lucia.

---

## 11. Styling (Tailwind CSS + Shadcn/ui)

### Tailwind CSS v4

The project uses **Tailwind CSS v4** with the PostCSS plugin (`@tailwindcss/postcss`). All utility classes are written inline in JSX.

### Shadcn/ui

Component library built on **Radix UI** primitives. Pre-built components live in `src/components/ui/`. These are **copied into the codebase** — they are not a node_module dependency — which means they can be customized freely.

Key utilities in `src/library/utils.ts`:
```ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Always use `cn()` to merge Tailwind classes conditionally.

### Theme System

- Dark mode is handled by **next-themes** (`src/providers/theme-provider.tsx`)
- Default theme is `dark`
- CSS variables define the color palette (in `src/app/globals.css`)
- Shadcn uses CSS variables for consistent theming

### Color Utilities

Helper functions in `src/helpers/utils.tsx` return Tailwind classes based on data values:

```ts
export function getSeverityColor(severity: TaskSeverity): string {
  // returns a Tailwind class string like "text-red-500"
}

export function getStatusColor(status: TaskStatus): string { ... }
export function getRoleColor(role: UserRole): string { ... }
```

---

## 12. State Management

The project intentionally avoids heavy global state libraries (no Redux, no Zustand). State is managed at three levels:

### 1. Server State — TanStack Query

Remote data (from the database) is managed entirely by TanStack Query. It handles caching, refetching, loading states, and invalidation.

### 2. URL State — nuqs

Filter and pagination state is kept in the URL via **nuqs**. This means:
- Filters survive page refreshes
- Filter state can be bookmarked or shared
- No extra state management needed for filters

```ts
// src/hooks/helpers/use-paginated-query-params.ts
import { useQueryState } from "nuqs";

export function usePaginatedQueryParams() {
  const [page, setPage] = useQueryState("page", { defaultValue: 1 });
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  return { page, setPage, search, setSearch };
}
```

### 3. Local UI State — React useState / Context

Transient UI state (open/closed dialogs, toggle values) uses local `useState`. Auth user data is available globally via `src/providers/auth-provider.tsx`.

---

## 13. Email System (Resend + React Email)

### Email Templates

Templates are in `emails/` and written as React components using **@react-email/components**:

```tsx
// emails/password-reset-email.tsx
import { Html, Text, Button } from "@react-email/components";

export function PasswordResetEmail({ resetLink }: { resetLink: string }) {
  return (
    <Html>
      <Text>Click below to reset your password:</Text>
      <Button href={resetLink}>Reset Password</Button>
    </Html>
  );
}
```

### Sending Emails

The Resend client is in `src/library/smtp.ts`:

```ts
import { Resend } from "resend";
export const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
```

Usage:
```ts
await resend.emails.send({
  from: "noreply@yourdomain.com",
  to: user.email,
  subject: "Reset your password",
  react: <PasswordResetEmail resetLink={link} />,
});
```

### Email Types

| Template | Trigger |
|---|---|
| `password-reset-email.tsx` | User requests password reset |
| `invite-member-email.tsx` | Admin invites a new team member |
| `new-project-email.tsx` | User is added to a new project |
| `role-change-email.tsx` | User's role is changed |

---

## 14. File Uploads (Uploadthing)

File uploads are handled by **Uploadthing**, which provides a type-safe file upload API.

- Configuration: `src/library/uploadthing.ts`
- API route: `src/app/api/uploadthing/`
- Attachments are linked to tasks via the `Attachment` model in Prisma

---

## 15. Code Conventions & Best Practices

### Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Components | PascalCase | `TaskCard`, `MembersList` |
| Hooks | camelCase with `use` prefix | `useTeamMembers`, `useInviteMember` |
| Files | kebab-case or descriptive name | `get.routes.ts`, `use-mobile.ts` |
| Variables | camelCase | `teamMembers`, `isLoading` |
| Constants | UPPER_SNAKE_CASE | `MAX_FILE_SIZE`, `DEFAULT_PAGE_SIZE` |
| Types/Interfaces | PascalCase | `UserRole`, `TaskStatus` |
| Zod schemas | camelCase with `Schema` suffix | `getMembersSchema` |

### File Naming in Server Folder

Files in `server/` follow a verb-based naming pattern to indicate the HTTP method they serve:
- `get.routes.ts` — handles GET requests
- `post.routes.ts` — handles POST requests
- `put.routes.ts` — handles PUT/PATCH requests
- `delete.routes.ts` — handles DELETE requests

This same pattern applies to `validations/` and `selectors/`.

### TypeScript Best Practices

**Use `satisfies` instead of `as`:**
```ts
// Good
const select = { id: true, name: true } satisfies Prisma.UserSelect;

// Avoid
const select = { id: true, name: true } as Prisma.UserSelect;
```

**Infer types from Zod schemas:**
```ts
const schema = z.object({ name: z.string() });
type FormData = z.infer<typeof schema>; // never write types twice
```

**Use Prisma payload types for derived types:**
```ts
type Member = Prisma.UserGetPayload<{ select: typeof getMembersSelect }>;
```

**Prefix unused variables with `_`:**
```ts
const [_value, setValue] = useState(null); // _value is intentionally unused
```

### Component Best Practices

- Prefer small, focused components over large ones
- Use skeleton components (`skeletons/`) for all async sections
- Extract sections into `sections/` — avoid writing all content in one giant component
- Use `cn()` for all conditional class merging
- Never inline styles (use Tailwind classes only)
- Keep `index.tsx` as the module entry point — it composes sections

### API Best Practices

- Always validate inputs with `zValidator` before accessing request data
- Always use Prisma `select` (from `selectors/`) — never return full model objects
- Use `requireAuthMiddleware` on every protected route
- Return consistent JSON shapes: `{ data: ... }` or `{ error: ... }`
- Handle errors with try/catch and return appropriate HTTP status codes

### Error Handling

A utility function normalizes errors across the codebase:

```ts
// src/helpers/errors.ts
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "An unexpected error occurred";
}
```

Always use this when displaying error messages from mutations or server actions.

### Code Formatting

- Prettier is configured via `.prettierrc`
- Print width: 120 characters
- Tab width: 2 spaces
- Trailing commas: all
- Single quotes
- Tailwind class sorting via `prettier-plugin-tailwindcss`

Run formatter: `npx prettier --write .`

---

## 16. Environment Configuration

### Environment Variables

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXT_PUBLIC_RESEND_API_KEY` | Resend email service API key |
| `RESET_PASSWORD_JWT_SECRET` | Secret for signing password reset JWT tokens |
| `NEXT_PUBLIC_APP_URL` | Full URL of the app (e.g. `http://localhost:3000`) |

### TypeScript Path Aliases

Configured in `tsconfig.json`:

| Alias | Resolves To |
|---|---|
| `@/*` | `./src/*` |
| `@/generated/prisma/*` | `./generated/*` |
| `@/emails/*` | `./emails/*` |

Always use `@/` aliases — never use relative paths like `../../`.

---

## 17. How to Work on a New Feature

Follow these steps when adding a new feature module:

### Step 1: Create the Module Folder

```
src/modules/{feature}/
```

### Step 2: Define the Database Schema

Add your new models in `prisma/schema.prisma`, then run:

```bash
npm run db:push
npm run db:generate
```

### Step 3: Create Server Routes

Create `server/validations/`, `server/selectors/`, and `server/routes/` files for your feature.

### Step 4: Register Routes in the API Entry Point

```ts
// src/app/api/[[...route]]/route.ts
import myFeatureGetRoutes from "@/modules/{feature}/server/routes/get.routes";
app.route("/{feature}", myFeatureGetRoutes);
```

### Step 5: Create Query/Mutation Hooks

Create hooks in `hooks/queries/` and `hooks/mutations/` using `useQuery` and `useMutation`.

### Step 6: Build Components

Create UI components in `components/sections/`, `components/dialogs/`, etc.

### Step 7: Create the Page

Add your page in `src/app/dashboard/{feature}/page.tsx` and import your module's `index.tsx`.

### Step 8: Add to Navigation

Update `src/layout/navigation.tsx` to add a link to the new page.

---

## Summary

| Concern | Solution |
|---|---|
| Routing | Next.js App Router |
| API | Hono (catch-all route) |
| Database | Prisma + PostgreSQL |
| Authentication | Lucia v3 (session-based) |
| Data Fetching | TanStack Query |
| Forms | React Hook Form + Zod |
| Styling | Tailwind CSS v4 + Shadcn/ui |
| State | TanStack Query + nuqs + useState |
| Email | Resend + React Email |
| Files | Uploadthing |
| Architecture | Feature Module pattern |

This architecture is designed to be **predictable, scalable, and easy to navigate**. Every feature follows the same patterns, so once you understand one module, you understand them all.
