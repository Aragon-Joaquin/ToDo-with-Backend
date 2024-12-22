import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTaskDto } from './dto/createTask';
import { getTasksQuery } from './dto/task.interface';
import e from 'express';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

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
    try {
      return await this.prisma.tasks.create({
        data: { ...task, createdAt: new Date(), status: false },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new HttpException('Task already exists', HttpStatus.CONFLICT);
      }
    }
  }
}
