import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SearchModule } from './modules/search/search.module';

@Module({
  imports: [
    SearchModule, 
    ConfigModule.forRoot({
      envFilePath:['.env.development'],
      isGlobal: true
    })]
})
export class AppModule {}
