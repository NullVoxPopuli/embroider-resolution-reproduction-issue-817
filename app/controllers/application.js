import Controller from '@ember/controller';
import { tracked } from 'tracked-built-ins';

export default class ApplicationController extends Controller {
  data = tracked([]);
}
