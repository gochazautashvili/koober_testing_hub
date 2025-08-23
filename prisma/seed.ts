import { db } from '@/library/database';

async function main() {
  await db.profession.createMany({
    data: [
      { name: 'Full stack developer' },
      { name: 'Front end developer' },
      { name: 'Back end developer' },
      { name: 'Mobile developer' },
      { name: 'Tester' },
    ],
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
