# Koober Testing Hub — არქიტექტურის დოკუმენტაცია (ქართული)

> ეს დოკუმენტაცია განკუთვნილია პროექტში ახლად შემოსული სტაჟიორებისთვის. ის მოიცავს სრულ არქიტექტურას, საქაღალდეთა სტრუქტურას, კოდის წერის კონვენციებს და საუკეთესო პრაქტიკებს.

---

## შინაარსი

1. [პროექტის მიმოხილვა](#1-პროექტის-მიმოხილვა)
2. [ტექნოლოგიური სტეკი](#2-ტექნოლოგიური-სტეკი)
3. [პროექტის სტრუქტურა](#3-პროექტის-სტრუქტურა)
4. [არქიტექტურის პატერნი — Feature Modules](#4-არქიტექტურის-პატერნი--feature-modules)
5. [მარშრუტიზაცია (Next.js App Router)](#5-მარშრუტიზაცია-nextjs-app-router)
6. [API შრე (Hono)](#6-api-შრე-hono)
7. [მონაცემთა ბაზა (Prisma + PostgreSQL)](#7-მონაცემთა-ბაზა-prisma--postgresql)
8. [ავთენტიფიკაცია (Lucia)](#8-ავთენტიფიკაცია-lucia)
9. [მონაცემთა მოთხოვნა (TanStack Query)](#9-მონაცემთა-მოთხოვნა-tanstack-query)
10. [ფორმები (React Hook Form + Zod)](#10-ფორმები-react-hook-form--zod)
11. [სტილიზება (Tailwind CSS + Shadcn/ui)](#11-სტილიზება-tailwind-css--shadcnui)
12. [State Management](#12-state-management)
13. [ელ-ფოსტის სისტემა (Resend + React Email)](#13-ელ-ფოსტის-სისტემა-resend--react-email)
14. [ფაილების ატვირთვა (Uploadthing)](#14-ფაილების-ატვირთვა-uploadthing)
15. [კოდის კონვენციები და საუკეთესო პრაქტიკები](#15-კოდის-კონვენციები-და-საუკეთესო-პრაქტიკები)
16. [გარემოს კონფიგურაცია](#16-გარემოს-კონფიგურაცია)
17. [როგორ დავამატოთ ახალი ფუნქცია](#17-როგორ-დავამატოთ-ახალი-ფუნქცია)

---

## 1. პროექტის მიმოხილვა

Koober Testing Hub არის **full-stack პროექტ- და დავალებების მართვის პლატფორმა**, დამზადებული Next.js 15-ით (App Router). ის განკუთვნილია პროგრამული უზრუნველყოფის გუნდებისთვის, რათა ერთ სივრცეში მართონ პროექტები, დავალებები, გუნდის წევრები, შეტყობინებები, ანალიტიკა და ანგარიშები.

აპლიკაციის მახასიათებლები:
- მომხმარებლის ავთენტიფიკაცია სესიების მართვით
- როლებზე დაფუძნებული წვდომის კონტროლი (admin, tester, developer)
- პროექტებისა და დავალებების სასიცოცხლო ციკლის მართვა
- რეალურ დროში შეტყობინებები
- ანალიტიკა და ანგარიშები
- ელ-ფოსტის შეტყობინებები (მოწვევები, პაროლის განახლება, როლის ცვლილება)
- ფაილების მიმაგრება
- მუქი თემის მხარდაჭერა

---

## 2. ტექნოლოგიური სტეკი

| კატეგორია | ტექნოლოგია | ვერსია |
|---|---|---|
| ფრეიმვორქი | Next.js (App Router) | 15.4.2 |
| ენა | TypeScript | 5.9.2 |
| UI ბიბლიოთეკა | React | 19.1.0 |
| სტილიზება | Tailwind CSS | 4.1.11 |
| კომპონენტების ბიბლიოთეკა | Shadcn/ui + Radix UI | Latest |
| იკონები | Lucide React | Latest |
| სერვერის ფრეიმვორქი | Hono | 4.9.4 |
| ORM | Prisma | 6.14.0 |
| მონაცემთა ბაზა | PostgreSQL | — |
| ავთენტიფიკაცია | Lucia | 3.2.2 |
| მონაცემთა მოთხოვნა | TanStack React Query | 5.85.2 |
| ფორმები | React Hook Form | 7.62.0 |
| ვალიდაცია | Zod | 4.0.17 |
| ელ-ფოსტის სერვისი | Resend | 6.0.1 |
| ელ-ფოსტის თემფლეიტები | React Email | 4.2.8 |
| ფაილების ატვირთვა | Uploadthing | 7.7.3 |
| HTTP კლიენტი | Axios | 1.11.0 |
| URL-ის სთეითი | nuqs | 2.4.3 |
| Toast შეტყობინებები | Sonner | 2.0.7 |
| თარიღის ინსტრუმენტები | date-fns | 4.1.0 |
| Bundler | Turbopack (Next.js-ის მეშვეობით) | — |

---

## 3. პროექტის სტრუქტურა

```
koober_testing_hub/
│
├── src/                          # აპლიკაციის ყველა საწყისი კოდი
│   ├── app/                      # Next.js App Router გვერდები და API მარშრუტები
│   ├── modules/                  # ფუნქციაზე დაფუძნებული მოდულები (ძირითადი ნაწილი)
│   ├── components/               # გლობალური საერთო UI კომპონენტები
│   ├── layout/                   # აპლიკაციის განლაგება (sidebar, header, navigation)
│   ├── providers/                # React Context პროვაიდერები
│   ├── hooks/                    # გლობალური custom React hooks
│   ├── library/                  # გარე სერვისების კლიენტები (Prisma, Hono და სხვ.)
│   ├── server/                   # გლობალური სერვერ-only კოდი (მარშრუტები, სერვისები)
│   ├── services/                 # საერთო სერვისები (ვალიდაციები)
│   ├── helpers/                  # დამხმარე ფუნქციები (env, errors, UI utils)
│   ├── constants/                # აპლიკაციის მასშტაბის კონსტანტები
│   └── types/                    # გლობალური TypeScript ტიპები
│
├── prisma/                       # მონაცემთა ბაზის სქემა და seed მონაცემები
├── generated/prisma/             # ავტომატურად გენერირებული Prisma კლიენტი (არ შეცვალოთ!)
├── emails/                       # React Email-ის თემფლეიტები
├── public/                       # სტატიკური ასეტები
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── components.json               # Shadcn/ui-ის კონფიგურაცია
└── .prettierrc
```

---

## 4. არქიტექტურის პატერნი — Feature Modules

პროექტის ყველაზე მნიშვნელოვანი არქიტექტურული გადაწყვეტილება არის **Feature Module** პატერნი. თითოეული ფუნქცია (team, projects, tasks, auth და სხვ.) ცხოვრობს საკუთარ, თვითმყოფად მოდულში `src/modules/`-ში.

### მოდულის სტრუქტურა

```
src/modules/{feature}/
│
├── index.tsx                     # შესასვლელი წერტილი — მთავარი view კომპონენტი
│
├── components/
│   ├── sections/                 # დიდი section კომპონენტები (გვერდის დონის კომპოზიციები)
│   ├── common/                   # ამ მოდულის შიგნით გამოყენებული პატარა კომპონენტები
│   ├── dialogs/                  # Modal და dialog კომპონენტები
│   └── skeletons/                # ჩატვირთვის skeleton კომპონენტები
│
├── hooks/
│   ├── queries/                  # TanStack Query hooks (მონაცემთა მოთხოვნა)
│   ├── mutations/                # TanStack Mutation hooks (შექმნა/განახლება/წაშლა)
│   └── search/                   # Search და filter სთეითის hooks
│
├── server/
│   ├── routes/                   # Hono API-ის მარშრუტის ჰენდლერები
│   │   ├── get.routes.ts         # GET endpoint-ები
│   │   ├── post.routes.ts        # POST endpoint-ები
│   │   ├── put.routes.ts         # PUT endpoint-ები
│   │   └── delete.routes.ts      # DELETE endpoint-ები
│   ├── validations/              # ამ მოდულის API-სთვის Zod სქემები
│   │   ├── get.validations.ts
│   │   ├── post.validations.ts
│   │   └── put.validations.ts
│   └── selectors/                # Prisma-ს select ობიექტები (ველების ექსპლიციტური შერჩევა)
│
├── services/
│   ├── actions.ts                # Next.js Server Actions (ფორმების გაგზავნა)
│   └── validations.ts            # Server Actions-ისთვის Zod სქემები
│
└── constants/                    # მოდულის სპეციფიური კონსტანტები
```

### რატომ ეს პატერნი?

- **ლოკალობა**: ფუნქციასთან დაკავშირებული ყველაფერი ერთ ადგილზეა
- **მასშტაბურობა**: ახალი ფუნქციის დამატება ნიშნავს ახალი მოდულის საქაღალდის დამატებას
- **მკაფიო საზღვრები**: გუნდის წევრებს შეუძლიათ სხვადასხვა მოდულზე დამოუკიდებლად იმუშაონ
- **ადვილი ნავიგაცია**: ახალი დეველოპერი პირდაპირ მის ფუნქციაზე ნავიგაციას ახდენს

### მაგალითი: Team მოდული

```
src/modules/team/
├── index.tsx                     # გუნდის მართვის გვერდის render-ი
├── components/
│   ├── sections/
│   │   ├── TeamHeader.tsx        # გვერდის სათაური
│   │   └── MembersList.tsx       # წევრების სია
│   ├── dialogs/
│   │   └── InviteMemberDialog.tsx  # მოწვევის dialog
│   └── skeletons/
│       └── MembersListSkeleton.tsx # ჩატვირთვის skeleton
├── hooks/
│   ├── queries/
│   │   └── useTeamMembers.ts     # გუნდის წევრების ჩამოტვირთვა
│   └── mutations/
│       └── useInviteMember.ts    # მოწვევის ფორმის გაგზავნა
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

## 5. მარშრუტიზაცია (Next.js App Router)

აპლიკაცია იყენებს მხოლოდ Next.js 15 **App Router**-ს. ყველა გვერდის ფაილი `src/app/`-შია.

### გვერდების მარშრუტები

```
/                               → src/app/page.tsx             (სახლის გვერდი / redirect)
/auth                           → src/app/auth/page.tsx        (შესვლის გვერდი)
/auth/reset-password/[token]    → src/app/auth/reset-password/[token]/page.tsx
/dashboard                      → src/app/dashboard/page.tsx   (მთავარი dashboard)
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

### Layouts (განლაგების ფაილები)

- `src/app/layout.tsx` — root layout, მთელ აპლიკაციას პროვაიდერებით ახვევს
- `src/app/auth/layout.tsx` — ავთენტიფიკაციის სპეციფიური layout (sidebar-ის გარეშე)
- `src/app/dashboard/layout.tsx` — dashboard-ის layout sidebar-ითა და header-ით

### გვერდის კომპონენტის კონვენცია

გვერდის კომპონენტები ნაგულისხმევად **server components** არიან. ისინი ახდენენ ავთენტიფიკაციის შემოწმებას და გადასცემენ მონაცემებს მოდულის შესასვლელ წერტილებს:

```tsx
// src/app/dashboard/team/page.tsx
import { getAuth } from "@/auth/helpers";
import TeamModule from "@/modules/team";

export default async function TeamPage() {
  const { user } = await getAuth(); // სერვერ-მხარის ავთენტიფიკაციის შემოწმება
  return <TeamModule user={user} />;
}
```

### მთავარი წესი

> `src/app/`-ში გვერდები უნდა იყოს **მინიმალური** — ისინი მხოლოდ ავთენტიფიკაციის შემოწმებასა და მონაცემების გადაცემას ახდენენ. ყველა რეალური UI ცხოვრობს `src/modules/`-ში.

---

## 6. API შრე (Hono)

პროექტი იყენებს **Hono**-ს, როგორც backend API ფრეიმვორქს, რომელიც მუშაობს Next.js-ში catch-all API მარშრუტის მეშვეობით.

### შესასვლელი წერტილი

```
src/app/api/[[...route]]/route.ts
```

ეს ერთი ფაილი ახდენს ყველა Hono მარშრუტის ჯგუფის mount-ს და ექსპორტავს Next.js ჰენდლერებს:

```ts
import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.route("/team", teamRoutes);
app.route("/projects", projectRoutes);
// ...

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
```

### მარშრუტების განსაზღვრა

თითოეული მოდული განსაზღვრავს საკუთარ routes ფაილს. მარშრუტის ჰენდლერები მიჰყვებიან ამ პატერნს:

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
    requireAuthMiddleware,          // ← ავთენტიფიკაციის შემოწმება
    zValidator("query", getMembersSchema), // ← query პარამეტრების ვალიდაცია
    async (c) => {
      const query = c.req.valid("query");
      const members = await db.user.findMany({
        where: { /* query-ს ფილტრები */ },
        select: getMembersSelect,
      });
      return c.json({ data: members });
    }
  );

export default teamGetRoutes;
```

### Middleware-ები

`src/auth/middlewares.ts`-ში განსაზღვრულია ორი მთავარი middleware:

- `requireAuthMiddleware` — ახდენს სესიის cookie-ს ვალიდაციას; არაავთენტიფიცირებული მოთხოვნებს 401-ით უარყოფს
- `requireRoleMiddleware(role)` — უარყოფს მოთხოვნებს საჭირო როლის გარეშე

### Type-safe კლიენტი

Hono გენერირებს სრულად type-safe კლიენტს მარშრუტების განსაზღვრებიდან. კლიენტი ინსტანციირდება `src/library/server.ts`-ში:

```ts
import { hc } from "hono/client";
import type { AppType } from "@/app/api/[[...route]]/route";

export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);
```

კლიენტის გამოყენება hooks-ში:
```ts
const response = await client.api.team.members.$get({ query: params });
// ← TypeScript-ი ზუსტად იცის რა პარამეტრებს და პასუხს ელოდება
```

### ვალიდაციები

ყველა მარშრუტი, რომელიც პარამეტრებს იღებს, იყენებს `@hono/zod-validator`-ს შეყვანის ვალიდაციისთვის. სქემები `server/validations/`-შია:

```ts
// get.validations.ts
export const getMembersSchema = z.object({
  search: z.string().optional(),
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
});
```

### Selectors

Over-fetching-ის თავიდან ასაცილებლად, ყველა Prisma query-ი იყენებს ექსპლიციტურ `select` ობიექტებს `server/selectors/`-ში:

```ts
// get.selectors.ts
export const getMembersSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  image: true,
} satisfies Prisma.UserSelect;
// ↑ satisfies-ი TypeScript-ს ამოწმებინებს selector-ს Prisma მოდელთან
```

---

## 7. მონაცემთა ბაზა (Prisma + PostgreSQL)

### სქემის მდებარეობა

`prisma/schema.prisma`

### Prisma კლიენტის Singleton

ერთი Prisma კლიენტის ინსტანცია გაზიარებულია მთელ აპლიკაციაში, development-ში connection pool-ის ამოწურვის თავიდან ასაცილებლად:

```ts
// src/library/database.ts
import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
```

> **მნიშვნელოვანია:** ყოველთვის import-ავდეთ `db`-ს `@/library/database`-დან. **არასოდეს** შექმნათ `new PrismaClient()` სხვა ადგილას.

### ძირითადი მოდელები

| მოდელი | დანიშნულება |
|---|---|
| `User` | პლატფორმის მომხმარებლები როლებით: `admin`, `tester`, `developer` |
| `Session` | Lucia-ს ავთენტიფიკაციის სესიები |
| `ResetPassword` | პაროლის განახლების ტოკენები ვადიანობით |
| `Project` | პროექტები სტატუსითა და ტიპით |
| `ProjectMember` | პროექტებზე მიბმული მომხმარებლები როლებით |
| `Task` | დავალებები სიმძიმით, ტიპით, სტატუსით, მინიჭებით |
| `Subtask` | მშობელი დავალების ქვე-დავალებები |
| `Comment` | Thread-ული კომენტარები დავალებებზე |
| `Attachment` | ფაილების მიმაგრება დავალებებზე |
| `Activity` | ყველა მოქმედების audit log |
| `Notification` | მომხმარებლის in-app შეტყობინებები |
| `Profession` | გუნდის წევრების უნარები/სპეციალობები |
| `DailyStats` | ანალიტიკა: ყოველდღიური სტატისტიკა |
| `BugReportTemplate` | ხელახლა გამოყენებადი bug report-ის შაბლონები |

### NPM სკრიპტები

```bash
npm run db:push       # სქემის ცვლილებების გამოყენება მონაცემთა ბაზაზე
npm run db:generate   # სქემის ცვლილების შემდეგ Prisma კლიენტის ხელახლა გენერება
npm run db:seed       # seed მონაცემების გაშვება (prisma/seed.ts)
```

> `prisma/schema.prisma`-ს რედაქტირების შემდეგ ყოველთვის გაუშვით `db:generate`.

---

## 8. ავთენტიფიკაცია (Lucia)

### როგორ მუშაობს

ავთენტიფიკაცია მართავს **Lucia** (v3), სესიაზე დაფუძნებული auth ბიბლიოთეკა.

1. შესვლის დროს Lucia სესია იქმნება და ინახება `Session` ცხრილში
2. სესიის cookie-ი ბრაუზერში ინახება
3. ყოველ სერვერ მოთხოვნაზე `getAuth()` კითხულობს და ამოწმებს cookie-ს
4. სესიები შეიძლება გაუქმდეს (გამოსვლა, პაროლის ცვლილება)

### მთავარი ფაილები

| ფაილი | დანიშნულება |
|---|---|
| `src/auth/auth.ts` | Lucia ინსტანცია და adapter-ის კონფიგურაცია |
| `src/auth/actions.ts` | `logout` server action |
| `src/auth/helpers.ts` | `getAuth()` — სესიის ვალიდაცია და მომხმარებლის დაბრუნება |
| `src/auth/middlewares.ts` | API მარშრუტების დაცვის Hono middleware-ები |

### `getAuth()` გამოყენება

```ts
// ნებისმიერ Server Component-ში ან გვერდში
import { getAuth } from "@/auth/helpers";

export default async function Page() {
  const { user, session } = await getAuth();
  // user = null თუ ავთენტიფიკაცია არ გავლია
}
```

### პაროლის განახლების Flow

1. მომხმარებელი ამ ელ-ფოსტას წარადგენს forgot-password ფორმაზე
2. 6-ციფრიანი კოდი გენერდება
3. JWT ტოკენი იქმნება (HS256, 15 წუთის ვადა) კოდით და ელ-ფოსტით
4. ტოკენი ინახება `ResetPassword` ცხრილში
5. ელ-ფოსტა იგზავნება reset ბმულით: `/auth/reset-password/{token}`
6. მომხმარებელი ხსნის ბმულს და წარადგენს 6-ციფრიან კოდს
7. კოდი ვერიფიცირდება JWT payload-ის წინააღმდეგ
8. პაროლი ჰეშირდება bcryptjs-ით და განახლდება
9. მომხმარებლის ყველა არსებული სესია გაუქმდება

---

## 9. მონაცემთა მოთხოვნა (TanStack Query)

ყველა **კლიენტ-მხარის** მონაცემთა მოთხოვნა კეთდება **TanStack React Query v5**-ით.

### დაყენება

Query კლიენტი კონფიგურირებულია `src/providers/query-provider.tsx`-ში და გახვეულია აპლიკაციაში `src/providers/index.tsx`-ით.

### კონვენცია: Custom Query Hooks

ყოველ მონაცემთა მოთხოვნას აქვს მისი სპეციალური custom hook `modules/{feature}/hooks/queries/`-ში:

```ts
// src/modules/team/hooks/queries/useTeamMembers.ts
import { useQuery } from "@tanstack/react-query";
import { client } from "@/library/server";

export const useTeamMembers = (params: GetMembersParams) => {
  return useQuery({
    queryKey: ["team", "members", params],  // ← კეშის გასაღები
    queryFn: async () => {
      const res = await client.api.team.members.$get({ query: params });
      return res.json();
    },
  });
};
```

### კონვენცია: Custom Mutation Hooks

შექმნა/განახლება/წაშლის ოპერაციები იყენებს `useMutation` hooks-ებს `hooks/mutations/`-ში:

```ts
export const useInviteMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InviteData) => {
      // server action-ის ან API-ს გამოძახება
    },
    onSuccess: () => {
      // ❗ invalidate ახდენს გუნდის წევრების ხელახლა fetch-ს
      queryClient.invalidateQueries({ queryKey: ["team", "members"] });
      toast.success("წევრი წარმატებით მოიწვია");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
```

### Query Key-ის კონვენცია

Query key-ები არის arrays, რომლებიც მონაცემებს აღწერს:
- `["team", "members"]` — ყველა გუნდის წევრი
- `["team", "members", { search: "gio", page: 1 }]` — ფილტრირებული წევრები
- `["projects", projectId, "tasks"]` — კონკრეტული პროექტის დავალებები

---

## 10. ფორმები (React Hook Form + Zod)

ფორმები იყენებს **React Hook Form**-ს **Zod**-ით type-safe ვალიდაციისთვის.

### პატერნი

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof schema>; // ← ტიპი სქემიდან ავტომატურად

export function LoginForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: FormData) => {
    // server action-ის გამოძახება
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ელ-ფოსტა</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage /> {/* ← Zod-ის validation შეცდომები */}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
```

### Server Actions

ფორმების გაგზავნა ხდება Next.js **Server Actions**-ის მეშვეობით, განსაზღვრული `modules/{feature}/services/actions.ts`-ში. Server Actions სერვერზე მუშაობენ და პირდაპირ შეუძლიათ Prisma-ს ან Lucia-ს გამოძახება.

---

## 11. სტილიზება (Tailwind CSS + Shadcn/ui)

### Tailwind CSS v4

პროექტი იყენებს **Tailwind CSS v4**-ს PostCSS plugin-ით (`@tailwindcss/postcss`). ყველა utility კლასი JSX-ში inline-ად არის დაწერილი.

### Shadcn/ui

კომპონენტების ბიბლიოთეკა **Radix UI** primitives-ებზე დაყრდნობით. წინასწარ მოდელირებული კომპონენტები `src/components/ui/`-ში ცხოვრობს. ეს **კოდბეისში კოპირებულია** — ის node_module dependency არ არის — რაც ნიშნავს, რომ თავისუფლად შეიძლება მისი კასტომიზება.

მთავარი utility `src/library/utils.ts`-ში:
```ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

> **წესი:** ყოველთვის გამოიყენეთ `cn()` Tailwind კლასების პირობითი შერწყმისთვის.

### Theme სისტემა

- Dark mode მართავს **next-themes** (`src/providers/theme-provider.tsx`)
- ნაგულისხმევი თემა `dark`
- CSS ცვლადები განსაზღვრავს ფერთა პალიტრას (`src/app/globals.css`-ში)
- Shadcn CSS ცვლადებს იყენებს კონსისტენტური theming-ისთვის

### ფერის Utility ფუნქციები

`src/helpers/utils.tsx`-ში helper ფუნქციები Tailwind კლასებს აბრუნებს მონაცემების მნიშვნელობების მიხედვით:

```ts
// სიმძიმის მიხედვით ფერის მიღება
getSeverityColor(severity: TaskSeverity): string
// სტატუსის მიხედვით ფერის მიღება
getStatusColor(status: TaskStatus): string
// როლის მიხედვით ფერის მიღება
getRoleColor(role: UserRole): string
```

---

## 12. State Management

პროექტი განზრახ ერიდება მძიმე გლობალური სთეითის ბიბლიოთეკებს (Redux, Zustand). სთეითი სამ დონეზე მართავს:

### 1. სერვერის სთეითი — TanStack Query

დისტანციური მონაცემები (მონაცემთა ბაზიდან) მთლიანად TanStack Query-ს მიერ მართავს. ის მართავს კეშირებას, ხელახლა fetch-ს, ჩატვირთვის სთეითებს და invalidation-ს.

### 2. URL სთეითი — nuqs

ფილტრებისა და pagination-ის სთეითი URL-ში ინახება **nuqs**-ის მეშვეობით. ეს ნიშნავს:
- ფილტრები გადარჩება გვერდის განახლებისას
- ფილტრების სთეითი შეიძლება bookmarked ან გაზიარებულ იყოს
- ფილტრებისთვის დამატებითი სთეით მენეჯმენტი საჭირო არ არის

```ts
// src/hooks/helpers/use-paginated-query-params.ts
import { useQueryState } from "nuqs";

export function usePaginatedQueryParams() {
  const [page, setPage] = useQueryState("page", { defaultValue: 1 });
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  return { page, setPage, search, setSearch };
}
```

### 3. ლოკალური UI სთეითი — React useState / Context

გარდამავალი UI სთეითი (dialog-ების გახსნა/დახურვა, toggle მნიშვნელობები) იყენებს ლოკალურ `useState`-ს. ავთ. მომხმარებლის მონაცემები გლობალურად ხელმისაწვდომია `src/providers/auth-provider.tsx`-ის მეშვეობით.

---

## 13. ელ-ფოსტის სისტემა (Resend + React Email)

### ელ-ფოსტის შაბლონები

შაბლონები `emails/`-შია და React კომპონენტებად დაწერილია **@react-email/components**-ის გამოყენებით:

```tsx
// emails/password-reset-email.tsx
import { Html, Text, Button } from "@react-email/components";

export function PasswordResetEmail({ resetLink }: { resetLink: string }) {
  return (
    <Html>
      <Text>დააჭირეთ ქვემოთ პაროლის განახლებისთვის:</Text>
      <Button href={resetLink}>პაროლის განახლება</Button>
    </Html>
  );
}
```

### ელ-ფოსტის გაგზავნა

Resend კლიენტი `src/library/smtp.ts`-შია:

```ts
import { Resend } from "resend";
export const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
```

გამოყენება:
```ts
await resend.emails.send({
  from: "noreply@yourdomain.com",
  to: user.email,
  subject: "პაროლის განახლება",
  react: <PasswordResetEmail resetLink={link} />,
});
```

### ელ-ფოსტის ტიპები

| შაბლონი | ტრიგერი |
|---|---|
| `password-reset-email.tsx` | მომხმარებელი ითხოვს პაროლის განახლებას |
| `invite-member-email.tsx` | admin-ი ახალ გუნდის წევრს იწვევს |
| `new-project-email.tsx` | მომხმარებელი ახალ პროექტს ემატება |
| `role-change-email.tsx` | მომხმარებლის როლი იცვლება |

---

## 14. ფაილების ატვირთვა (Uploadthing)

ფაილების ატვირთვა **Uploadthing**-ით კეთდება, რომელიც type-safe ფაილების ატვირთვის API-ს უზრუნველყოფს.

- კონფიგურაცია: `src/library/uploadthing.ts`
- API მარშრუტი: `src/app/api/uploadthing/`
- Attachments-ები დავალებებს უკავშირდება Prisma-ს `Attachment` მოდელის მეშვეობით

---

## 15. კოდის კონვენციები და საუკეთესო პრაქტიკები

### სახელდების კონვენციები

| ტიპი | კონვენცია | მაგალითი |
|---|---|---|
| კომპონენტები | PascalCase | `TaskCard`, `MembersList` |
| Hooks | camelCase `use` პრეფიქსით | `useTeamMembers`, `useInviteMember` |
| ფაილები | kebab-case ან აღწერილი სახელი | `get.routes.ts`, `use-mobile.ts` |
| ცვლადები | camelCase | `teamMembers`, `isLoading` |
| კონსტანტები | UPPER_SNAKE_CASE | `MAX_FILE_SIZE`, `DEFAULT_PAGE_SIZE` |
| ტიპები/Interfaces | PascalCase | `UserRole`, `TaskStatus` |
| Zod სქემები | camelCase `Schema` სუფიქსით | `getMembersSchema` |

### ფაილების სახელდება Server საქაღალდეში

`server/`-ში ფაილები მიჰყვებიან ზმნაზე დაფუძნებულ სახელდების პატერნს HTTP მეთოდის მითითებით:
- `get.routes.ts` — GET მოთხოვნებს ამუშავებს
- `post.routes.ts` — POST მოთხოვნებს ამუშავებს
- `put.routes.ts` — PUT/PATCH მოთხოვნებს ამუშავებს
- `delete.routes.ts` — DELETE მოთხოვნებს ამუშავებს

იგივე პატერნი ვრცელდება `validations/`-სა და `selectors/`-ზე.

### TypeScript-ის საუკეთესო პრაქტიკები

**გამოიყენეთ `satisfies` `as`-ის ნაცვლად:**
```ts
// კარგი — TypeScript ამოწმებს ტიპს
const select = { id: true, name: true } satisfies Prisma.UserSelect;

// არ გამოიყენოთ — TypeScript-ს გვერდს უვლის
const select = { id: true, name: true } as Prisma.UserSelect;
```

**ტიპების Zod სქემებიდან inference:**
```ts
const schema = z.object({ name: z.string() });
type FormData = z.infer<typeof schema>; // ← არასოდეს დაწეროთ ტიპები ორჯერ
```

**Prisma payload ტიპები derived ტიპებისთვის:**
```ts
type Member = Prisma.UserGetPayload<{ select: typeof getMembersSelect }>;
```

**გამოუყენებელ ცვლადებს პრეფიქსი `_` მიეცით:**
```ts
const [_value, setValue] = useState(null); // _value განზრახ გამოუყენებელია
```

### კომპონენტების საუკეთესო პრაქტიკები

- ამჯობინეთ პატარა, ფოკუსირებული კომპონენტები დიდებს
- გამოიყენეთ skeleton კომპონენტები (`skeletons/`) ყველა async section-ისთვის
- section-ები ამოიღეთ `sections/`-ში — მოერიდეთ ყველა კონტენტის ერთ დიდ კომპონენტში დაწერას
- `cn()`-ი გამოიყენეთ ყველა პირობითი კლასების შერწყმისთვის
- არასოდეს გამოიყენოთ inline styles (მხოლოდ Tailwind კლასები)
- `index.tsx` მოდულის შესასვლელ წერტილად დატოვეთ — ის section-ებს კომპოზიციით ქმნის

### API-ს საუკეთესო პრაქტიკები

- ყოველთვის ახდენეთ შეყვანის ვალიდაცია `zValidator`-ით request მონაცემებზე წვდომამდე
- ყოველთვის გამოიყენეთ Prisma `select` (`selectors/`-დან) — არასოდეს დააბრუნოთ სრული მოდელის ობიექტები
- გამოიყენეთ `requireAuthMiddleware` ყოველ დაცულ მარშრუტზე
- დააბრუნეთ კონსისტენტური JSON ფორმა: `{ data: ... }` ან `{ error: ... }`
- შეცდომები გაამუშავეთ try/catch-ით და დააბრუნეთ შესაბამისი HTTP სტატუს კოდები

### შეცდომების გამუშავება

Utility ფუნქცია ნორმალიზებს შეცდომებს მთელ კოდბეისში:

```ts
// src/helpers/errors.ts
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "მოულოდნელი შეცდომა მოხდა";
}
```

ყოველთვის გამოიყენეთ ეს mutations-ის ან server actions-ის შეცდომის შეტყობინებების ჩვენებისას.

### კოდის ფორმატირება

- Prettier კონფიგურირებულია `.prettierrc`-ის მეშვეობით
- სტრიქონის სიგანე: 120 სიმბოლო
- Tab-ის სიგანე: 2 სივრცე
- Trailing commas: all
- Single quotes
- Tailwind კლასების დახარისხება `prettier-plugin-tailwindcss`-ით

ფორმატირება: `npx prettier --write .`

---

## 16. გარემოს კონფიგურაცია

### გარემოს ცვლადები

| ცვლადი | დანიშნულება |
|---|---|
| `DATABASE_URL` | PostgreSQL კავშირის სტრიქონი |
| `NEXT_PUBLIC_RESEND_API_KEY` | Resend ელ-ფოსტის სერვისის API გასაღები |
| `RESET_PASSWORD_JWT_SECRET` | პაროლის reset JWT ტოკენების ხელმოწერის საიდუმლო |
| `NEXT_PUBLIC_APP_URL` | აპლიკაციის სრული URL (მაგ. `http://localhost:3000`) |

### TypeScript Path Aliases

კონფიგურირებულია `tsconfig.json`-ში:

| Alias | გადამისამართება |
|---|---|
| `@/*` | `./src/*` |
| `@/generated/prisma/*` | `./generated/*` |
| `@/emails/*` | `./emails/*` |

> **წესი:** ყოველთვის გამოიყენეთ `@/` aliases — **არასოდეს** გამოიყენოთ relative paths, მაგ. `../../`.

---

## 17. როგორ დავამატოთ ახალი ფუნქცია

მიჰყვეთ ამ ნაბიჯებს ახალი feature მოდულის დამატებისას:

### ნაბიჯი 1: შექმენით მოდულის საქაღალდე

```
src/modules/{feature}/
```

### ნაბიჯი 2: განსაზღვრეთ მონაცემთა ბაზის სქემა

დაამატეთ ახალი მოდელები `prisma/schema.prisma`-ში, შემდეგ გაუშვით:

```bash
npm run db:push
npm run db:generate
```

### ნაბიჯი 3: შექმენით სერვერის მარშრუტები

შექმენით `server/validations/`, `server/selectors/`, და `server/routes/` ფაილები თქვენი feature-ისთვის.

### ნაბიჯი 4: დაარეგისტრირეთ მარშრუტები API-ს შესასვლელ წერტილში

```ts
// src/app/api/[[...route]]/route.ts
import myFeatureGetRoutes from "@/modules/{feature}/server/routes/get.routes";
app.route("/{feature}", myFeatureGetRoutes);
```

### ნაბიჯი 5: შექმენით Query/Mutation Hooks

შექმენით hooks `hooks/queries/`-სა და `hooks/mutations/`-ში `useQuery`-სა და `useMutation`-ის გამოყენებით.

### ნაბიჯი 6: ააშენეთ კომპონენტები

შექმენით UI კომპონენტები `components/sections/`, `components/dialogs/` და სხვ.-ში.

### ნაბიჯი 7: შექმენით გვერდი

დაამატეთ გვერდი `src/app/dashboard/{feature}/page.tsx`-ში და import-ავდეთ თქვენი მოდულის `index.tsx`-ს.

### ნაბიჯი 8: ნავიგაციაში დამატება

განაახლეთ `src/layout/navigation.tsx` ახალი გვერდის ბმულის დასამატებლად.

---

## შეჯამება

| საკითხი | გამოსავალი |
|---|---|
| Routing | Next.js App Router |
| API | Hono (catch-all მარშრუტი) |
| მონაცემთა ბაზა | Prisma + PostgreSQL |
| ავთენტიფიკაცია | Lucia v3 (სესიაზე დაფუძნებული) |
| მონაცემთა მოთხოვნა | TanStack Query |
| ფორმები | React Hook Form + Zod |
| სტილიზება | Tailwind CSS v4 + Shadcn/ui |
| სთეითი | TanStack Query + nuqs + useState |
| ელ-ფოსტა | Resend + React Email |
| ფაილები | Uploadthing |
| არქიტექტურა | Feature Module პატერნი |

ეს არქიტექტურა შექმნილია იყოს **პროგნოზირებადი, მასშტაბური და ადვილად ნავიგირებადი**. ყოველი feature მიჰყვება ერთსა და იმავე პატერნებს — ერთი მოდულის გაგების შემდეგ, ყველა სხვა მოდულსაც გაიგებთ.
