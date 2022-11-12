import prisma from "../../../src/db/prisma"
import dayjs from "dayjs";
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { getToken } from "next-auth/jwt"

dayjs.extend(weekOfYear)

export default async function handle(req, res) {
  const method = req.method;
  const token = await getToken({ req })
  if (token) {

    var updatedAt = dayjs(Date.now()).toDate()
    if (method == "POST") {
      const { content, date } = req.body;
      await prisma.entrys.create({
        data: {
          content: content,
          updatedAt: updatedAt,
          entryDate: date,
          week: dayjs(date).week(),
          commentAdded: false
        },
      });
    }
    res.json({ message: "success" })

  }
  else {
    return res
      .status(401)
      .send({ success: false });
  }
}