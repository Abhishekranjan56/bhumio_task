import { Injectable } from '@nestjs/common';
import { TrainService } from './train.service';
import { WorkflowStep } from '../models/workflow-step.model';
import { PantryCar, Coach } from '../models/train.model';

@Injectable()
export class WorkflowService {
  private workflowModel: Record<string, WorkflowStep> = {};

  constructor(private readonly trainService: TrainService) {}

  simulateWorkflow(data: Record<string, WorkflowStep>) {
    this.workflowModel = data;
    for (const step of Object.values(data)) {
      const { start_role, present_role, next_role } = step;

      if (present_role === 'Engine') {
        this.trainService.runEngine();
      } else if (present_role.includes('Pantry')) {
        this.trainService.addPantryCar(new PantryCar('Pantry', true));
      } else {
        this.trainService.addCoach(new Coach(present_role, 'General'));
      }
    }
    return this.trainService.getTrainStatus();
  }

  printWorkflowModel(): string {
    let modelString = '';
    for (const [key, step] of Object.entries(this.workflowModel)) {
      modelString += `Step ${key}: \n`;
      modelString += `  Start Role: ${step.start_role.join(', ')}\n`;
      modelString += `  Present Role: ${step.present_role}\n`;
      modelString += `  Next Role: ${step.next_role.join(', ')}\n\n`;
    }
    return modelString;
  }
}
