import { db } from 'src/lib/db'

export const people = () => {
  return db.person.findMany()
}

export const person = ({ x1 }) => {
  return db.person.findUnique({
    where: { x1 },
  })
}

export const createPerson = ({ input }) => {
  return db.person.create({
    data: input,
  })
}

export const updatePerson = ({ x1, input }) => {
  return db.person.update({
    data: input,
    where: { x1 },
  })
}

export const deletePerson = ({ x1 }) => {
  return db.person.delete({
    where: { x1 },
  })
}

export const Person = {
  parent: (_obj, { root }) => {
    return db.person.findUnique({ where: { x1: root?.x1 } }).parent()
  },
  children: (_obj, { root }) => {
    return db.person.findUnique({ where: { x1: root?.x1 } }).children()
  },
  position: (_obj, { root }) => {
    return db.person.findUnique({ where: { x1: root?.x1 } }).position()
  },
}
