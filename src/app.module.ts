import { Module } from '@nestjs/common';
import { VideosModule } from './videos/videos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/videos'),
    AutomapperModule.forRoot({ strategyInitializer: classes() }),
    HealthModule,
    VideosModule,
  ],
  providers: [],
})
export class AppModule {}
