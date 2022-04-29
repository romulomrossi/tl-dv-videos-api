import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoDto, VideoSchema } from './models/video.dto';
import { VideoProfile } from './models/video.profile';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: VideoDto.name, schema: VideoSchema }]),
  ],
  controllers: [VideosController],
  providers: [VideosService, VideoProfile],
})
export class VideosModule {}
