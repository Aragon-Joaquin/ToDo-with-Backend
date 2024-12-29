import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/createTask';
import { TasksPipe } from './pipes/tasks.pipe';
import { getTasksQuery } from './dto/task.interface';
import { UpdateTaskDto } from './dto/updateTask';
import { type } from 'node:os';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(@Param(TasksPipe) taskQuery: getTasksQuery) {
    return this.taskService.getTasks(taskQuery);
  }

  @Post()
  createTask(@Body() createTask: CreateTaskDto) {
    return this.taskService.createTask(createTask);
  }

  @Patch(':id')
  updateTask(@Body() updateTask: UpdateTaskDto, @Param(TasksPipe) id: number) {
    return this.taskService.updateTask(updateTask, id);
  }

  @Delete(':id')
  deleteTask(@Param(TasksPipe) id: number) {
    return this.taskService.deleteTask(id);
  }
}
