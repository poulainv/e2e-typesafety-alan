import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

const cares = [
  {
    price: 12.7,
    name: 'Ostéopathie',
    doctor: {
      firstName: 'Jean',
      lastName: 'Becote',
    },
  },
  {
    price: 190.7,
    emoji: '🦷',
    name: 'Dentiste',
    doctor: {
      firstName: 'Violette',
      lastName: 'Caen',
    },
  },
  {
    price: 129.8,
    name: 'Ophtalmo',
    emoji: '🤓',
    doctor: {
      firstName: 'Henry',
      lastName: 'Gumy',
    },
  },
]

async function main() {
  await client.careEvent.deleteMany({})
  // await client.doctor.deleteMany({})

  // 0. Add emoji
  // 1. Add doctor in create
  await Promise.all(
    cares.map(async (careEvent) => {
      return client.careEvent.create({
        data: {
          name: careEvent.name,
          price: careEvent.price,
          emoji: careEvent.emoji,
          doctor: {
            create: {
              firstName: careEvent.doctor.firstName,
              lastName: careEvent.doctor.lastName,
            },
          },
        },
      })
    }),
  )

  // 2. Show findOne interface
  // const result = await client.careEvent.findOne({
  //   where: { id: 1 },
  //   select: { id: true, name: true },
  // })
  // result.

  client.$disconnect()
}

main()
