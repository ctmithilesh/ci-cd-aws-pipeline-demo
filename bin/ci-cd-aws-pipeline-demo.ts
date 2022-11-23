#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CiCdAwsPipelineDemoStack } from '../lib/ci-cd-aws-pipeline-demo-stack';

const app = new cdk.App();
new CiCdAwsPipelineDemoStack(app, 'CiCdAwsPipelineDemoStack', {
  env: {
    account: '758852724677',
    region: 'ap-south-1',
  }
});

app.synth();