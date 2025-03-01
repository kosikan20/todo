import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  create(createTodoDto: CreateTodoDto) {
    try {
      return this.prisma.todo.create({
        data: createTodoDto,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    try {
      return this.prisma.todo.update({
        where: { id },
        data: updateTodoDto,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  remove(id: number) {
    try {
      return this.prisma.todo.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
