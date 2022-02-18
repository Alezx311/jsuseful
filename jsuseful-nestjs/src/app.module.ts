import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConstantsModule } from './constants/constants.module';
import { RandomModule } from './random/random.module';
import { TextModule } from './text/text.module';
import { OtherModule } from './other/other.module';
import { LoggersModule } from './loggers/loggers.module';

@Module({
  imports: [ConstantsModule, RandomModule, TextModule, OtherModule, LoggersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
