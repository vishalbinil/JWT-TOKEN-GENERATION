import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/nest-auth'),
    AuthModule, // Importing the AuthModule which contains AuthController and AuthService
  ],
})
export class AppModule {}
