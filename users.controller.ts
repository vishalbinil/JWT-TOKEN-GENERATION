

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':email')
  async getUser(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  @Post()
  async createUser(@Body() body: { email: string; password: string }) {
    return this.usersService.createUser(body.email, body.password);
  }
}
