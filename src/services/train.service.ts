import { Injectable } from '@nestjs/common';
import { Train, Coach, PantryCar } from '../models/train.model';

@Injectable()
export class TrainService {
  private train: Train;

  constructor() {
    this.train = new Train('1');
  }

  runEngine() {
    this.train.engine.start();
    return 'Engine started';
  }

  stopEngine() {
    this.train.engine.stop();
    return 'Engine stopped';
  }

  addCoach(coach: Coach) {
    this.train.addCoach(coach);
    return `Coach ${coach.id} added`;
  }

  addPantryCar(pantryCar: PantryCar) {
    this.train.addPantryCar(pantryCar);
    return `Pantry Car ${pantryCar.id} added`;
  }

  getTrainStatus() {
    return this.train;
  }
}
