import { table, getMinifiedRecords } from './utils/Airtable'

export default async (req, res) => {
    const {id} = req.body
  try {
    const deletedTodo = await table.destroy([id])
    res.statusCode = 200
    res.json(getMinifiedRecords(deletedTodo))
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    res.json({ msg: 'Something went wrong' })
  }
}
