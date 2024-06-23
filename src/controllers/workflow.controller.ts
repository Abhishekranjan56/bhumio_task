import { Controller, Post, Body, Get } from '@nestjs/common';
import { WorkflowService } from '../services/workflow.service';
import { WorkflowStep } from '../models/workflow-step.model';

@Controller('workflow')
export class WorkflowController {
  constructor(private readonly workflowService: WorkflowService) {}

  @Post('simulate')
  simulateWorkflow(@Body() data: Record<string, WorkflowStep>) {
    return this.workflowService.simulateWorkflow(data);
  }

  @Get('print-model')
  printWorkflowModel() {
    return this.workflowService.printWorkflowModel();
  }
}
