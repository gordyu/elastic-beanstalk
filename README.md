This project is for use on AWS Elastic Beanstalk.  
The .npmrc file fixes permissions issues with npm sharp package, setting the 'unsafe-perm' flag to 'true'. Several packages are included in the package.json file that are not being used to demonstrate the deployment works.     

Running locally requires a '.env' file to be created with a 'DB' variable pointing to your local MongoDB instance, typically:  
DB=mongodb://localhost:27017/notes?retryWrites=true  
  
Correlating YouTube Video (https://youtu.be/GbudiCx_t9M) 
