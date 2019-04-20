This project is for use on AWS Elastic Beanstalk.  
The .npmrc file fixes permissions issues with npm sharp package, setting the 'unsafe-perm' flag to 'true'.  

Running locally requires a '.env' file to be created with a 'DB' variable pointing to your local MongoDB instance, typically as below: 
MONGODB_URI=mongodb://localhost:27017/notes?retryWrites=true