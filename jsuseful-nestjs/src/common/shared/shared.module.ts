import { Injectable, Module } from '@nestjs/common';
import { ConstantsService } from './constants.service';
import { SourceService } from './source.service';
import { HelpersService } from './helpers.service';
import { LoggerService } from './loggers.service';
import { RandomService } from './random.service';
import { ResultsService } from './results.service';

@Injectable()
export class SharedService {
  constructor(
    private readonly Helpers: HelpersService,
    private readonly Source: SourceService,
    private readonly Random: RandomService,
    private readonly Constants: ConstantsService,
    private readonly Logger: LoggerService,
    private readonly Results: ResultsService,
  ) {}

  test = {
    Shared: {
      Helpers: this.Helpers.test,
      Source: this.Source.test,
      Random: this.Random.test,
      Constants: this.Constants.test,
      Logger: this.Logger.test,
      Results: this.Results.test,
    },
  };
}

const SHARED_SERVICES = [
  HelpersService,
  SourceService,
  RandomService,
  ConstantsService,
  LoggerService,
  ResultsService,
  SharedService,
];

@Module({
  imports: SHARED_SERVICES,
  exports: SHARED_SERVICES,
})
export class SharedModule {}
