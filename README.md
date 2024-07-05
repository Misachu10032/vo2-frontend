# VO2-take-home

# Demo
There is a video demo of the project in src/assets. It is in case that I overlooked the potential issue that may caused by screen resolution, broswers or system enviorment.


# To Run
1. clone and navigate to the folder
2. npm install(Assuming you have npm install.Please install npm if you don't)
3. npm run start
4. the project is hosted on http://localhost:3000/

# Tech
1. used CSS for styling. I use TailWind on a daily basis and I realized how I have been spoiled by TailWind.
2. used socket.io and axios for api connection
3. used formik and yup for forms and validation
4. installed prettier for formatting. `npm run format` 


# Code Structure
1.  Since this is small project, I did not consider to have a global css. I took the module.css approach and you may see some repeated css.
2.  Since this is an one page project, I do not have a page folder. You can find almost everything in components folder.
3.  You can find api connections in service folder, Helper tools in the utils folder, figma image in assets folder.