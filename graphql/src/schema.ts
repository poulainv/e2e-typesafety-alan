import { makeSchema, objectType } from '@nexus/schema'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'

// 0. Awkard syntax because we are using a plugin to have a simple with Prisma

// 1. Create new type (Doctor) to expose
const Doctor = objectType({
  name: 'Doctor',
  definition(t) {
    t.model.id()
    t.model.firstName()
  },
})

// 2. Add it to the schema
// 3. Generate the GraphQL schema and look at it

// 4. Expose emoji and doctor
const CareEvent = objectType({
  name: 'CareEvent',
  definition(t) {
    t.model.id()
    t.model.emoji()
    t.model.doctor()
    t.model.name()
    t.model.price()
    t.model.price()
  },
})

// 4. Take a look to the graphQL schema
const Query = objectType({
  name: 'Query',
  definition(t) {
    t.list.field('careEvents', {
      type: 'CareEvent',
      resolve: (_, args, ctx) => {
        return ctx.prisma.careEvent.findMany()
      },
    })
    // If we have time...
    // t.crud.doctor()
  },
})

// 5 Take a look to http://localhost:4000/ GraphQL explorer

export const schema = makeSchema({
  types: [Query, Doctor, CareEvent],
  plugins: [nexusSchemaPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
