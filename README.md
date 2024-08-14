# VO2-take-home
# 做TAKE-HOME的时候请斟酌
我上交了这个take-home后被HR告知这个take-home做的不错，之后就被鸽了，没有任何回馈。
面试感受：这家公司面试的CTO法国人感觉说话还挺正常。但是中国人HR说话方式蛮恶心的，喜欢中英混搭。感觉想用些洋文来混淆是非。我问她们为啥告诉我take-home结果很好但不能推进的时候整了一大堆洋文。。。因为我英语水平很棒，都听得懂，当时没有发现她在干嘛，现在想想蛮恶心的。
如果你也遇到相同的情况，希望你不要焦虑，把这个take-home当个小游戏做做玩玩。放平心态。


# Demo
There is a video demo of the project in src/assets. It is in case that I overlooked the potential issue that may caused by screen resolution, broswers, system enviorment etc. 


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
