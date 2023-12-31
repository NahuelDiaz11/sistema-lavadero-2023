import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const allCars = await prisma.vehiculos.findMany();
  console.log(allCars);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });