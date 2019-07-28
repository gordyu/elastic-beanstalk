# Deploy to AWS Elastic Beanstalk with Node.js & MongoDB

### This project is for use on AWS Elastic Beanstalk.  

[Contact me](https://www.aaronwht.com/contact-me) if you run into problems using this repo or tutorial.  


The ```.npmrc``` file fixes permission issues for the ```NPM sharp``` package and other packages which require elevated permissions, setting the 'unsafe-perm' flag to ```true```. Several packages are included in the ```package.json``` file which are not being used in this project to demonstrate the deployment works for image upload/resizing packages.     

Running this code locally requires that you add a ```.env``` file at the root of your project with a ```DB``` environment variable pointing to your local MongoDB instance.  Example: ```DB=mongodb://localhost:27017/restful?retryWrites=true```

[![Deploy to AWS Elastic Beanstalk](https://www.aaronwht.com/images/videos/aws-elastic-beanstalk.jpg)](http://www.youtube.com/watch?v=GbudiCx_t9M)
