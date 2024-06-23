import { Module } from '@nestjs/common';
import { TrainService } from './services/train.service';
import { WorkflowService } from './services/workflow.service';
import { TrainController } from './controllers/train.controller';
import { WorkflowController } from './controllers/workflow.controller';

@Module({
  providers: [TrainService, WorkflowService],
  controllers: [TrainController, WorkflowController],
})
export class TrainModule {}
