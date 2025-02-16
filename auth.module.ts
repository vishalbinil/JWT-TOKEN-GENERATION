import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/user.schema';
import { JwtModule } from '@nestjs/jwt';  // ✅ Import JwtModule
import { JwtService } from '@nestjs/jwt'; // ✅ Import JwtService

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({    // ✅ Register JWT Module
      secret: 'your-secret-key',  // ⚠️ Use env variables in production!
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtService], // ✅ Provide JwtService
  exports: [AuthService, JwtService],   // ✅ Export if needed elsewhere
})
export class AuthModule {}
