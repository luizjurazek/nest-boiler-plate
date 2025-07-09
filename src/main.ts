import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>("PORT");

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Boiler plate nest api")
    .setDescription("a boiler plate to start any project with nest")
    .setVersion("1.0")
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("API", app, documentFactory);

  await app.listen(port ?? 3000);
}

bootstrap();
