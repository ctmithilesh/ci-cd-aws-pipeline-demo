// import * as cdk from 'aws-cdk-lib';
// import { Template } from 'aws-cdk-lib/assertions';
// import * as CiCdAwsPipelineDemo from '../lib/ci-cd-aws-pipeline-demo-stack';

import { handler } from "../lib/lambda/handler";
// example test. To run these tests, uncomment this file along with the
// example resource in lib/ci-cd-aws-pipeline-demo-stack.ts
test('SQS Queue Created', () => {
//   const app = new cdk.App();
//     // WHEN
//   const stack = new CiCdAwsPipelineDemo.CiCdAwsPipelineDemoStack(app, 'MyTestStack');
//     // THEN
//   const template = Template.fromStack(stack);

//   template.hasResourceProperties('AWS::SQS::Queue', {
//     VisibilityTimeout: 300
//   });
});

test('foo', async () => {
    const result = await handler("", "");
    expect(result.statusCode).toEqual(300);
});
