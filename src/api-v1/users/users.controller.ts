//import * as bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default class UserController {
  public createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(200).send({
      success: "true",
      createdUser: user,
    });
  };

  public getUser = async (req: Request, res: Response) => {
    const { user_id } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        user_id,
      },
    });

    res.status(200).send({
      success: "true",
      user,
    });
  };

  public updateUser = async (req: Request, res: Response) => {
    const { user_id, name, email } = req.body;
    const user = await prisma.user.update({
      where: {
        user_id,
      },
      data: {
        name,
        email,
      }, // data to update
    });
    res.status(200).send({
      success: "true",
      updatedUser: user,
    });
  };

  public deleteUser = async (req: Request, res: Response) => {
    const { user_id } = req.body;
    const user = await prisma.user.delete({
      where: {
        user_id,
      },
    });
    res.status(200).send({
      success: "true",
      deletedUser: user,
    });
  };

  public getAllUsers = async (req: Request, res: Response): Promise<any> => {
    try {
      const users = await prisma.user.findMany();
      return res.status(200).json({
        message: "Success",
        users,
      });
    } catch (e) {
      console.error(e);
      res.status(500).send({
        success: false,
        message: e.toString(),
      });
    }
  };
}
