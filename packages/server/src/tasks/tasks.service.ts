import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTaskDto } from './dto/createTask';
import { getTasksQuery } from './dto/task.interface';
import { UpdateTaskDto } from './dto/updateTask';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getTasks(task: getTasksQuery) {
    const { id, limit, offset } = task;

    const variableProps = Object.assign({}, limit > 0 && { take: limit });

    if (!isNaN(id) && id != null) {
      return await this.prisma.tasks.findUnique({
        where: { id },
      });
    }
    return this.prisma.tasks.findMany({
      skip: offset ?? 0,
      ...variableProps,
    });
  }

  async createTask(task: CreateTaskDto) {
    const user = await this.prisma.tasks.findUnique({
      where: { name: task.name },
    });
    if (user)
      throw new HttpException(
        'Tasks with this name already exists',
        HttpStatus.CONFLICT,
      );

    return await this.prisma.tasks.create({
      data: { ...task, createdAt: new Date(), status: false },
    });
  }

  async updateTask(task: UpdateTaskDto, id: number) {
    const user = await this.prisma.tasks.findUnique({ where: { id } });
    if (!user)
      throw new HttpException(
        'ID Task does not exists in the database',
        HttpStatus.BAD_REQUEST,
      );

    return await this.prisma.tasks.update({
      where: { id },
      data: task,
    });
  }

  async deleteTask(id: number) {
    const user = await this.prisma.tasks.findUnique({ where: { id } });
    if (!user)
      throw new HttpException(
        'ID Task does not exists in the database',
        HttpStatus.BAD_REQUEST,
      );

    return await this.prisma.tasks.delete({
      where: { id },
    });
  }
}
