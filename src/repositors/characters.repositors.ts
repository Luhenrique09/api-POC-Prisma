import prisma from "../database/db.js";
import { Characters } from "../protocols/protocols.js";

export async function findAllRep() {
    return  prisma.characters.findMany({
      select:{
        id:true,
        name: true,
        level: true,
        transformations: true,
        image: true,
        breed: {
          select: {
            breedName: true
          }
        }
      }
    });

}


export async function createRep(characters: Characters) {
  return prisma.characters.create({
    data: characters
  });
} 

export async function findByIdRep(id:number) {
   return prisma.characters.findUnique({
    where: {
        id: id
    },
    select:{
      id:true,
      name: true,
      level: true,
      transformations: true,
      image: true,
      breed: {
        select: {
          breedName: true
        }
      }
    }
   })
}

export async function updateRep(characters : Characters, id:number)  {
  return prisma.characters.upsert({
    where:{id: id || 0 },
    create: characters as Characters,
    update: characters
  })
}


export async function removeRep(id:number)  {
return prisma.characters.delete({
    where: {
        id: id
    }
})
}