import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { VideoDto } from './video.dto';
import { Video } from './video';

@Injectable()
export class VideoProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, VideoDto, Video);
      createMap(mapper, Video, VideoDto);
    };
  }
}
