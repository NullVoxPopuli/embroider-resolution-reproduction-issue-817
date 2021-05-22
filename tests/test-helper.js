import Application from 'embroider-resolution-reproduction-issue-817/app';
import config from 'embroider-resolution-reproduction-issue-817/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
