import { table, getMinifiedRecords } from './utils/Airtable'
import auth0 from './utils/auth0'

export default auth0.requireAuthentication(async (req, res) => {
  const { user } = await auth0.getSession(req)
  try {
    const records = await table
      .select({
        filterByFormula: `userId = '${user.sub}'`,
      })
      .firstPage()
    const minifyRecords = getMinifiedRecords(records)
    res.statusCode = 200
    res.json(minifyRecords)
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    res.json({ msg: 'Something went wrong' })
  }
})
