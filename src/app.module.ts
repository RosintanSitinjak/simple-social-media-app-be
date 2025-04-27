import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AlatBeratModule } from './alat-berat/alat-berat.module';
import { PemesananModule } from './pemesanan/pemesanan.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<string>('POSTGRES_PORT')
          ? configService.get<number>('POSTGRES_PORT')
          : 5432,
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DATABASE'),
        ssl: {
          rejectUnauthorized: false,
        },
        autoLoadEntities: true,
        synchronize: true, // pastikan hanya di development, production harus false + migration
      }),
    }),
    AuthModule,
    UserModule,
    PostModule,
    AlatBeratModule,
    PemesananModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    JwtService,
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class AppModule {}
