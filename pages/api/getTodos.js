import {table, getMinifiedRecords} from './utils/Airtable'

export default async (req, res) => {
    try {
        const records = await table.select({}).firstPage()
        const minifyRecords = getMinifiedRecords(records)
        res.statusCode = 200
        res.json(minifyRecords) 
    } catch (error) {
        console.error(error)
        res.statusCode = 500
        res.json({msg: 'Something went wrong'})  
    }
}
