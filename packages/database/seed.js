const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🏈 Seeding Gridiron Intel Database...');

  // Create demo organization
  const org = await prisma.organization.create({
    data: {
      name: 'Demo High School',
      type: 'SCHOOL',
    },
  });

  // Create demo admin user
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@gridiron.local',
      password: await bcrypt.hash('GridironRocks2024!', 10),
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
      organizationId: org.id,
      emailVerified: new Date(),
    },
  });

  // Create demo team
  const team = await prisma.team.create({
    data: {
      name: 'Varsity Football',
      mascot: 'Warriors',
      season: '2024',
      division: '5A',
      organizationId: org.id,
    },
  });

  console.log('✅ Database seeded successfully!');
  console.log('📧 Admin Login: admin@gridiron.local / GridironRocks2024!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
