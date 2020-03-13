import { Module } from '@nestjs/common';
import { SponsorsService } from './sponsors.service';
import { SponsorsController } from './sponsors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sponsor } from './sponsor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sponsor])],
  providers: [SponsorsService],
  controllers: [SponsorsController],
})
export class SponsorsModule {}
