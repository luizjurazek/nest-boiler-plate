import { Controller, Get } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { User } from "generated/prisma";

@Controller("user")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("all")
  getUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }
}
