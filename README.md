<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS npm Custom Logger package</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Installation

```bash
npm install
```

## Usage

Import `LoggerModule`:

```typescript
@Module({
  imports: [ConfigModule],
  providers: [...],
})
export class AppModule {}
```

Inject `LoggerService`:

```typescript
@Injectable()
export class YourService {
  constructor(private readonly logger: LoggerService) {
    logger.setContext('my context');
  }

  show() {
    this.logger.log('This is my log');
    this.logger.log({key: 'This example using an object'});
  }
}
```

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

Contributions welcome! See [Contributing](CONTRIBUTING.md).

## Author

**Syukur Kassim (On linkedin[Linkedin](https://www.linkedin.com/in/syukurilexs))**

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.