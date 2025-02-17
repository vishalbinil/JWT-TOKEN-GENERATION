import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module'; 
import { AppController } from './app.controller'; 

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/nest-auth'),
    AuthModule, 
	UsersModule,
	
  ],
   controllers: [AppController]
})
export class AppModule {}
