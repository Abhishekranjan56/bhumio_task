import { Controller, Post, Body, Get } from '@nestjs/common';
import { TrainService } from '../services/train.service';
import { Coach, PantryCar } from '../models/train.model';

@Controller('train')
export class TrainController {
  constructor(private readonly trainService: TrainService) {}

  @Post('run')
  runEngine() {
    return this.trainService.runEngine();
  }

  @Post('stop')
  stopEngine() {
    return this.trainService.stopEngine();
  }

  @Post('add-coach')
  addCoach(@Body() coach: Coach) {
    return this.trainService.addCoach(coach);
  }

  @Post('add-pantry-car')
  addPantryCar(@Body() pantryCar: PantryCar) {
    return this.trainService.addPantryCar(pantryCar);
  }

  @Get('status')
  getTrainStatus() {
    return this.trainService.getTrainStatus();
  }
}
