# AWS Elastic Beanstalk using Node.js and MongoDB

This project is for use on AWS Elastic Beanstalk.  
The ```.npmrc``` file fixes permission issues for the ```NPM sharp``` package and other packages which require elevated permissions, setting the 'unsafe-perm' flag to ```true```. Several packages are included in the ```package.json``` file which are not being used in this project to demonstrate the deployment works for image upload/resizing packages.     

Running this code locally requires that you add a ```.env``` file at the root of your project with a ```DB``` environment variable pointing to your local MongoDB instance.  Example: ```DB=mongodb://localhost:27017/notes?retryWrites=true```  
  

[![AWS Elastic Beanstalk](https://i9.ytimg.com/vi/GbudiCx_t9M/mqdefault.jpg?sqp=CPCE2OYF&rs=AOn4CLAbkuR8U_Sl7TRXTGmW0HMNGv6B4Q&time=1557529249777)](http://www.youtube.com/watch?v=GbudiCx_t9M)
