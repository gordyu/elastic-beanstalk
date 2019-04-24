This project is for use on AWS Elastic Beanstalk.  
The .npmrc file fixes permissions issues with the npm sharp package, setting the 'unsafe-perm' flag to 'true'. Several packages are included in the package.json file which are not being used in this project to demonstrate the deployment works with image upload/resizing packages.     

Running this code locally requires that you add a '.env' file at the root of your project with a 'DB' environment variable pointing to your local MongoDB instance.  Example: DB=mongodb://localhost:27017/notes?retryWrites=true  
  
Correlating YouTube Video (https://youtu.be/GbudiCx_t9M)
