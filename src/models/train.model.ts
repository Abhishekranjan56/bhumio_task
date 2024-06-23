export class Train {
  id: string;
  coaches: Coach[];
  engine: Engine;
  pantryCar: PantryCar | null;

  constructor(id: string) {
    this.id = id;
    this.coaches = [];
    this.engine = new Engine();
    this.pantryCar = null;
  }

  addCoach(coach: Coach) {
    this.coaches.push(coach);
  }

  addPantryCar(pantryCar: PantryCar) {
    this.pantryCar = pantryCar;
  }
}

export class Coach {
  id: string;
  type: string;

  constructor(id: string, type: string) {
    this.id = id;
    this.type = type;
  }
}

export class Engine {
  id: string;
  running: boolean;

  constructor() {
    this.id = 'engine';
    this.running = false;
  }

  start() {
    this.running = true;
  }

  stop() {
    this.running = false;
  }
}

export class PantryCar {
  id: string;
  full: boolean;

  constructor(id: string, full: boolean) {
    this.id = id;
    this.full = full;
  }
}
