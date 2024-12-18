import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/createTask';
import { TasksPipe } from './pipes/tasks.pipe';
import { getTasksQuery } from './dto/task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(@Query(TasksPipe) taskQuery: getTasksQuery) {
    return this.taskService.getTasks(taskQuery);
  }

  @Post()
  createTask(@Body() createTask: CreateTaskDto) {
    return this.taskService.createTask(createTask);
  }
}
