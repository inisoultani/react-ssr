# Introduction

This app is a ReactJS app that implementing Server Side Rendering (SSR)

## How to run locally

open terminal and run command :

```sh
➜ react-ssr (main) ✔ npm run dev
```

## Integration with Micro Frontend project

This project also has an implementation related to react micro frontend, but only on the client side for now, since I have not found any source related to micro frontend implementation on the server side. To make the menu `Marketing-MFE` works, we need to clone project [mfe](https://github.com/inisoultani/mfe) and start the `marketing` sub project with command `npm run start`

## How to deploy to production

in this sample we deploy the node.js app to the AWS Elastic Beanstalk (EB). There are many ways to deploy the app, for example, we can use `github action`, `gitlab CI/CD`, `eb cli`. In this example we will be use `eb cli` and using `Docker` platform type.

Prerequisite :

- Active AWS account
- [IAM User](https://console.aws.amazon.com/iamv2/home#/users)
  with permission policies (AWS managed policy) :

  - AmazonEC2FullAccess
  - AmazonS3FullAccess
  - AWSElasticBeanstalkEnhancedHealth
  - AdministratorAccess-AWSElasticBeanstalk
  - AWSElasticBeanstalkRoleCore

  Since this is only for sample app, with testing account I can share almost all policy to the IAM User, but need to be more selective when using real account.

- AWS Access Key Id and AWS Secret Access Key ([how to generate one](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html))
- Installed docker engine.

Step by step setup:

1. Create [Dockerfile](https://github.com/inisoultani/react-ssr/blob/main/Dockerfile) on the root project. There are several way to deploy our app in a docker container. One of them by creating the `Dockerfile`, the other way, you can refer to the [doc](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/single-container-docker-configuration.html).
2. Setup `eb cli`, since I'm using macbook now, I'll install the tools through homebrew.
   ```
   ➜ react-ssr (main) ✔ brew install awsebcli
   ```
   For other installation method, you can refer to the [docs](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install-advanced.html).
3. After finish the installation we need to configure our `eb cli`

   ```sh
   ➜ react-ssr (main) ✔ eb init

      Select a default region
      1) us-east-1 : US East (N. Virginia)
      2) us-west-1 : US West (N. California)
      3) us-west-2 : US West (Oregon)
      4) eu-west-1 : EU (Ireland)
      5) eu-central-1 : EU (Frankfurt)
      6) ap-south-1 : Asia Pacific (Mumbai)
      7) ap-southeast-1 : Asia Pacific (Singapore)
      8) ap-southeast-2 : Asia Pacific (Sydney)
      9) ap-northeast-1 : Asia Pacific (Tokyo)
      10) ap-northeast-2 : Asia Pacific (Seoul)
      11) sa-east-1 : South America (Sao Paulo)
      12) cn-north-1 : China (Beijing)
      13) cn-northwest-1 : China (Ningxia)
      14) us-east-2 : US East (Ohio)
      15) ca-central-1 : Canada (Central)
      16) eu-west-2 : EU (London)
      17) eu-west-3 : EU (Paris)
      18) eu-north-1 : EU (Stockholm)
      19) eu-south-1 : EU (Milano)
      20) ap-east-1 : Asia Pacific (Hong Kong)
      21) me-south-1 : Middle East (Bahrain)
      22) af-south-1 : Africa (Cape Town)
      (default is 3):


      Enter Application Name
      (default is "react-ssr"):
      Application react-ssr has been created.

      It appears you are using Docker. Is this correct?
      (Y/n): y
      Select a platform branch.
      1) Docker running on 64bit Amazon Linux 2
      2) Multi-container Docker running on 64bit Amazon Linux (Deprecated)
      3) Docker running on 64bit Amazon Linux (Deprecated)
      (default is 1): 1

      Do you wish to continue with CodeCommit? (Y/n): n
      Do you want to set up SSH for your instances?
      (Y/n): n
   ```

   Since I have configure my AWS credential previously, it didn't ask me to configure on above example. For more information about configuring `eb cli` you can refer to the [doc](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-configuration.html).

4. Now before actually deploy our app, we can try to run our docker setup locally with command :

   ```sh
   ➜ react-ssr (main) ✔ eb local run --port 5000

    15.6.0-alpine: Pulling from library/node
    Digest: sha256:9b731474409d0eb68a888963590d68385d3fcfe652042b5da2a71e0d64109172
    Status: Image is up to date for node:15.6.0-alpine
    docker.io/library/node:15.6.0-alpine
    #1 [internal] load build definition from Dockerfile
    #1 sha256:fac477b29f56afc8d03613b19f00b2803d32c8fd2988ccb940db14cb43ddad8f
    #1 transferring dockerfile: 212B 0.0s done
    #1 DONE 0.0s
    #2 [internal] load .dockerignore
    #2 sha256:60094016ca0c3b79a26598934f79a31e067455b735babd665e81354c4c27d970
    #2 transferring context: 617B done
    #2 DONE 0.0s
    #3 [internal] load metadata for docker.io/library/node:15.6.0-alpine
    #3 sha256:e8c3afb819f40d0fadcd7fc177708db1f72d7675ca68d8b422e27e91aaca125a
    #3 DONE 0.0s
    #4 [1/6] FROM docker.io/library/node:15.6.0-alpine
    #4 sha256:805b4dd76dff25be1afc4355835a88666a30fc0b9df9bce53f9442f4a9b092c9
    #4 DONE 0.0s
    #5 [2/6] WORKDIR /usr/src/app
    #5 sha256:2ed3b17fddab350b4258e1792aba474b19494e97f0df81229ea9d2c9751dd797
    #5 CACHED
    #6 [internal] load build context
    #6 sha256:65b1149451aa23898c7ddb276175896a6b9b85b794a7a2c42722566fd149f887
    #6 transferring context: 5.60kB done
    #6 DONE 0.0s
    #7 [3/6] COPY . .
    #7 sha256:7e11cb2ee8ccd41cb9c75f97db07334b7dab5f1fdbaa654245da659922b9bca7
    #7 DONE 0.0s
    #8 [4/6] RUN npm install
    #8 sha256:d8fefdb063908ddbda50dab342bf504fa9f89439317ba9da7d7afdb3bd9b4ad5
    #8 9.771 npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
    #8 9.842 npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
    #8 10.02 npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
    #8 11.09 npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
    #8 12.01 npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
    #8 15.39 npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
    #8 17.43 npm WARN deprecated chokidar@1.7.0: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
    #8 21.15 npm WARN deprecated core-js@2.6.12: core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.
    #8 23.66
    #8 23.66 added 1001 packages, and audited 1002 packages in 23s
    #8 23.66
    #8 23.66 68 packages are looking for funding
    #8 23.66   run `npm fund` for details
    #8 23.67
    #8 23.67 9 vulnerabilities (2 low, 7 moderate)
    #8 23.67
    #8 23.67 To address all issues possible (including breaking changes), run:
    #8 23.67   npm audit fix --force
    #8 23.67
    #8 23.67 Some issues need review, and may require choosing
    #8 23.67 a different dependency.
    #8 23.67
    #8 23.67 Run `npm audit` for details.
    #8 23.67 npm notice
    #8 23.67 npm notice New minor version of npm available! 7.4.0 -> 7.20.6
    #8 23.67 npm notice Changelog: <https://github.com/npm/cli/releases/tag/v7.20.6>
    #8 23.67 npm notice Run `npm install -g npm@7.20.6` to update!
    #8 23.68 npm notice
    #8 DONE 24.2s
    #9 [5/6] RUN ls -la
    #9 sha256:cbbf1abeb9aa71d42ea258e700cd5d022e7a0db3a8a8eac3f8352aaeea0cdb8f
    #9 0.428 total 800
    #9 0.428 drwxr-xr-x    1 root     root          4096 Aug 17 17:49 .
    #9 0.428 drwxr-xr-x    1 root     root          4096 Aug 17 11:06 ..
    #9 0.428 -rw-r--r--    1 root     root           575 Aug 17 17:49 .dockerignore
    #9 0.428 drwxr-xr-x    2 root     root          4096 Aug 17 10:51 .elasticbeanstalk
    #9 0.428 -rw-r--r--    1 root     root            85 Aug 15 06:07 .prettierrc
    #9 0.428 -rw-r--r--    1 root     root           168 Aug 17 17:47 Dockerfile
    #9 0.428 -rw-r--r--    1 root     root          1462 Aug 17 17:45 README.MD
    #9 0.428 drwxr-xr-x    2 root     root          4096 Aug 17 17:49 config
    #9 0.428 drwxr-xr-x  583 root     root         20480 Aug 17 17:49 node_modules
    #9 0.428 -rw-r--r--    1 root     root        744860 Aug 17 17:49 package-lock.json
    #9 0.428 -rw-r--r--    1 root     root          1782 Aug 17 17:49 package.json
    #9 0.428 drwxr-xr-x    6 root     root          4096 Aug 17 10:58 src
    #9 0.428 drwxr-xr-x    4 root     root          4096 Aug 17 10:58 test
    #9 DONE 0.4s
    #10 [6/6] RUN npm run build
    #10 sha256:f6b337dcb53071f38486c4eb95e9ea6c8c528525af741a572a4014cabe2b01fb
    #10 0.911
    #10 0.911 > react-ssr@1.0.0 build
    #10 0.911 > npm-run-all --parallel prod:*
    #10 0.911
    #10 1.579
    #10 1.579 > react-ssr@1.0.0 prod:build-server
    #10 1.579 > webpack --config config/webpack.server.js --mode production
    #10 1.579
    #10 1.596
    #10 1.596 > react-ssr@1.0.0 prod:build-client
    #10 1.596 > webpack --config config/webpack.client.js --mode production
    #10 1.596
    #10 4.306 asset bundle.js 4.76 KiB [emitted] [minimized] (name: main) 1 related asset
    #10 4.306 orphan modules 10.4 KiB [orphan] 25 modules
    #10 4.306 runtime modules 663 bytes 3 modules
    #10 4.306 ./src/index.js + 25 modules 10.7 KiB [not cacheable] [built] [code generated]
    #10 4.306 webpack 5.50.0 compiled successfully in 1718 ms
    #10 9.709 asset bundle.js 231 KiB [emitted] [minimized] (name: main) 2 related assets
    #10 9.709 orphan modules 246 KiB [orphan] 63 modules
    #10 9.709 runtime modules 1.2 KiB 5 modules
    #10 9.709 cacheable modules 489 KiB
    #10 9.709   modules by path ./node_modules/axios/ 41.3 KiB 27 modules
    #10 9.709   modules by path ./node_modules/prop-types/ 2.58 KiB 3 modules
    #10 9.709   modules by path ./node_modules/react/ 6.48 KiB 2 modules
    #10 9.709   modules by path ./node_modules/react-dom/ 119 KiB 2 modules
    #10 9.709   modules by path ./node_modules/@babel/runtime/ 24.3 KiB 2 modules
    #10 9.709   modules by path ./node_modules/react-router/ 10.7 KiB 2 modules
    #10 9.709   modules by path ./node_modules/scheduler/ 4.91 KiB
    #10 9.709     ./node_modules/scheduler/index.js 198 bytes [built] [code generated]
    #10 9.709     ./node_modules/scheduler/cjs/scheduler.production.min.js 4.72 KiB [built] [code generated]
    #10 9.709   modules by path ./node_modules/react-is/ 2.69 KiB
    #10 9.709     ./node_modules/react-is/index.js 196 bytes [built] [code generated]
    #10 9.709     ./node_modules/react-is/cjs/react-is.production.min.js 2.49 KiB [built] [code generated]
    #10 9.709 webpack 5.50.0 compiled successfully in 7111 ms
    #10 9.759 npm notice
    #10 9.759 npm notice New minor version of npm available! 7.4.0 -> 7.20.6
    #10 9.759 npm notice Changelog: <https://github.com/npm/cli/releases/tag/v7.20.6>
    #10 9.759 npm notice Run `npm install -g npm@7.20.6` to update!
    #10 9.759 npm notice
    #10 DONE 9.8s
    #11 exporting to image
    #11 sha256:e8c613e07b0b7ff33893b694f7759a10d42e180f2b4dc349fb57dc6b71dcab00
    #11 exporting layers
    #11 exporting layers 4.8s done
    #11 writing image sha256:6a29c82f7acc4bf18c7e78ee391db6cd7f99fbdfb28ab83cf431999070d6298e done
    #11 naming to docker.io/library/goq0t8:i053b1 done
    #11 DONE 4.8s
    Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
    Start listenting on port 3000
   ```

   Above will try to build docker image based on provided `Dockerfile`, run it locally and map the port 5000 to 3000 (port number that I used on the sample app). We can check in with command :

   ```sh
   ➜ react-ssr (main) ✗ docker ps
    CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                    NAMES
    b45aadd16e09   6a29c82f7acc   "docker-entrypoint.s…"   34 seconds ago   Up 32 seconds   0.0.0.0:5000->3000/tcp        18d0f0273be5d5ecfe998ad912a0276d4076fbbd
   ```

5. Deploy the sample app with command :

   ```sh
   ➜ react-ssr (main) ✗ eb create

    Enter Environment Name
    (default is react-ssr-dev):
    Enter DNS CNAME prefix
    (default is react-ssr-dev):

    Select a load balancer type
    1) classic
    2) application
    3) network
    (default is 2): 2


    Would you like to enable Spot Fleet requests for this environment? (y/N): n
    Creating application version archive "app-3200-210818_003858".
    Uploading react-ssr/app-3200-210818_003858.zip to S3. This may take a while.
    Upload Complete.
    Application react-ssr has been created.
    Environment details for: react-ssr-dev
      Application name: react-ssr
      Region: us-west-2
      Deployed Version: app-3200-210818_003858
      Environment ID: e-8amim8h6tw
      Platform: arn:aws:elasticbeanstalk:us-west-2::platform/Docker running on 64bit Amazon Linux 2/3.4.4
      Tier: WebServer-Standard-1.0
      CNAME: react-ssr-dev.us-west-2.elasticbeanstalk.com
      Updated: 2021-08-17 17:39:10.293000+00:00
    Printing Status:
    2021-08-17 17:39:08    INFO    createEnvironment is starting.
    2021-08-17 17:39:10    INFO    Using elasticbeanstalk-us-west-2-326950516803 as Amazon S3 storage bucket for environment data.
    2021-08-17 17:39:31    INFO    Created target group named: arn:aws:elasticloadbalancing:us-west-2:326950516803:targetgroup/awseb-AWSEB-1JTJROYKXPBUN/ee84e920362b4ae4
    2021-08-17 17:39:31    INFO    Created security group named: sg-090b887f42b3cb1bf
    2021-08-17 17:39:47    INFO    Created security group named: awseb-e-8amim8h6tw-stack-AWSEBSecurityGroup-1TCPD43HEKE5A
    2021-08-17 17:39:47    INFO    Created Auto Scaling launch configuration named: awseb-e-8amim8h6tw-stack-AWSEBAutoScalingLaunchConfiguration-1T2XSWVSS6HZB
    2021-08-17 17:40:48    INFO    Created Auto Scaling group named: awseb-e-8amim8h6tw-stack-AWSEBAutoScalingGroup-Y3YP2QCT8K86
    2021-08-17 17:40:48    INFO    Waiting for EC2 instances to launch. This may take a few minutes.
    2021-08-17 17:40:48    INFO    Created Auto Scaling group policy named: arn:aws:autoscaling:us-west-2:326950516803:scalingPolicy:0d61a1e1-9b90-4615-b9f5-8fa84a4b9019:autoScalingGroupName/awseb-e-8amim8h6tw-stack-AWSEBAutoScalingGroup-Y3YP2QCT8K86:policyName/awseb-e-8amim8h6tw-stack-AWSEBAutoScalingScaleDownPolicy-ENUQGMQLLO5E
    2021-08-17 17:40:48    INFO    Created Auto Scaling group policy named: arn:aws:autoscaling:us-west-2:326950516803:scalingPolicy:b24b011c-fa82-4708-b97d-0b5029f6c89b:autoScalingGroupName/awseb-e-8amim8h6tw-stack-AWSEBAutoScalingGroup-Y3YP2QCT8K86:policyName/awseb-e-8amim8h6tw-stack-AWSEBAutoScalingScaleUpPolicy-1F0RZ0Z1IBNAR
    2021-08-17 17:40:48    INFO    Created CloudWatch alarm named: awseb-e-8amim8h6tw-stack-AWSEBCloudwatchAlarmLow-16PX61BHGW3VF
    2021-08-17 17:40:49    INFO    Created CloudWatch alarm named: awseb-e-8amim8h6tw-stack-AWSEBCloudwatchAlarmHigh-1UE51UWYC0Z6F
    2021-08-17 17:41:37    INFO    Created load balancer named: arn:aws:elasticloadbalancing:us-west-2:326950516803:loadbalancer/app/awseb-AWSEB-1XP4X14D74ZE6/8e28dd8329ead51e
    2021-08-17 17:41:37    INFO    Created Load Balancer listener named: arn:aws:elasticloadbalancing:us-west-2:326950516803:listener/app/awseb-AWSEB-1XP4X14D74ZE6/8e28dd8329ead51e/c7b124632d5a67a8
    2021-08-17 17:43:42    INFO    Instance deployment completed successfully.
    2021-08-17 17:43:58    INFO    Application available at react-ssr-dev.us-west-2.elasticbeanstalk.com.
    2021-08-17 17:43:59    INFO    Successfully launched environment: react-ssr-dev
   ```

6. If we made some changes, we can try re-deploy the app with command

   ```sh
   ➜ react-ssr (main) ✗ eb deploy

    Creating application version archive "app-dae1-210817_195418".
    Uploading react-ssr/app-dae1-210817_195418.zip to S3. This may take a while.
    Upload Complete.
    2021-08-17 12:54:30    INFO    Environment update is starting.
    2021-08-17 12:54:35    INFO    Deploying new version to instance(s).
    2021-08-17 12:55:21    INFO    Instance deployment completed successfully.
    2021-08-17 12:55:27    INFO    New application version was deployed to running EC2 instances.
    2021-08-17 12:55:27    INFO    Environment update completed successfully.
   ```

7. To terminate the app in AWS EB we can run command :
   ```sh
   ➜ react-ssr (main) ✔ eb terminate
   ```

## Important note :

---

## the AWS `eb cli` has an specific approach when deploying an app with `.git` folder exist in the root of the project app, so we need to make sure that every changes that we made must be committed to the local branch before we do our deployment, because `eb cli` create a zip deployment package based on latest commit on the local active branch. For more details you can refer to the [doc](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-cli-git.html).
