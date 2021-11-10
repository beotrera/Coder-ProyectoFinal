import wiston from 'winston';
 
const logger =  wiston.createLogger({
    transports: [
      new wiston.transports.Http({
        level: 'warn',
        format: wiston.format.json()
      }),
      new wiston.transports.Console({
        level: 'info',
        format: wiston.format.combine(
          wiston.format.colorize(),
          wiston.format.simple()
        )
      }),
      new wiston.transports.File({
        filename: 'error.log',
        level: 'error',
        format: wiston.format.json()
      }),
    ]
  });


export default logger