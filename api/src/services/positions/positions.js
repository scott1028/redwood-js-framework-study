import { db } from 'src/lib/db'

export const positions = () => {
  return db.position.findMany()
}

export const position = ({ id }) => {
  return db.position.findUnique({
    where: { id },
  })
}

export const createPosition = ({ input }) => {
  return db.position.create({
    data: input,
  })
}

export const updatePosition = ({ id, input }) => {
  return db.position.update({
    data: input,
    where: { id },
  })
}

export const deletePosition = ({ id }) => {
  return db.position.delete({
    where: { id },
  })
}

export const Position = {
  person: (_obj, { root }) => {
    return db.position.findUnique({ where: { id: root?.id } }).person()
  },
}
