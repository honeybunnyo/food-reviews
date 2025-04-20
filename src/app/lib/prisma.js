// lib/prisma.ts
import { PrismaClient } from "./../../generated/prisma/client";

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  errorFormat: 'pretty',
  log: ['query', 'error'],
})

