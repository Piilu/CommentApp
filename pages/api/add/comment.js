import prisma from "../../../src/db/prisma"
import dayjs from "dayjs";
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)


export default async function handle(req, res) {
    const method = req.method;
    if (method == "PUT") {
        const { comment, week } = req.body;
        var updatedAt = dayjs(Date.now()).toDate()
        const updateEntrys = await prisma.entrys.updateMany({
            where: {
              week: parseInt(week)
            },
            data: {
              comment: comment,
              updatedAt: updatedAt,
              commentAdded:true
            },
          })
       
    }
    res.json({ message: "success" })
}