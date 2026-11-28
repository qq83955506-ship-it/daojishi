import { appRoot } from '@prisma/composer';
import web from './src/service.mjs';

export default appRoot('daojishi', ({ provision }) => {
  provision(web);
});
