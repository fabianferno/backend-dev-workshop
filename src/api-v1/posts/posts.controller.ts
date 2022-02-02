//import * as bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default class PostController {
  public getBlogs = async (req: Request, res: Response) => {
    const { author_id } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        user_id: author_id,
      },
      include: {
        posts: true,
      },
    });

    res.status(200).send({
      success: "true",
      user,
    });
  };
}
