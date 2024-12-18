import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTaskDto } from './dto/createTask';
import { getTasksQuery } from './dto/task.interface';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  getTasks(task: getTasksQuery) {
    const { id, limit, offset } = task;

    const variableProps = Object.assign({}, limit > 0 && { take: limit });

    if (!isNaN(id) && id != null) {
      return this.prisma.tasks.findUnique({
        where: { id },
      });
    }
    return this.prisma.tasks.findMany({
      skip: offset ?? 0,
      ...variableProps,
    });
  }

  createTask(task: CreateTaskDto) {
    return this.prisma.tasks.create({
      data: { ...task, createdAt: new Date(), status: false },
    });
  }
}
