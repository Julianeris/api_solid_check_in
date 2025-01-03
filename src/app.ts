import { PrismaClient } from "@prisma/client";
import fastfy from "fastify";

export const app = fastfy()

const prisma = new PrismaClient()

prisma.user.create({
  data:{
    name: 'John Doe',
    email: 'email@email.com'
  },
})