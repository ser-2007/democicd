#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DemoawspipelineStack } from '../lib/demoawspipeline-stack';

const app = new cdk.App();
new DemoawspipelineStack(app, 'DemoawspipelineStack', {
  env: { account: 'aws-id', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
