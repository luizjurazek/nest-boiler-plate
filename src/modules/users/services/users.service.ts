import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../repository/users.repository";
import { User } from "generated/prisma";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this.usersRepo.findAll();
  }
}
