# Vonage Media processing QA exersice

## Propose
Test web application.

## Goal
1. Build test plan of what need to be tested.
2. Build some automation testing.

## Get the repo
since this is public repo that can be used by everyone but no one other then me can push to it fork it to your github account. 

## The appliation

### Installation
1. install nvm on your computer: 
  - uinx base: https://github.com/nvm-sh/nvm
  - windows: https://github.com/coreybutler/nvm-windows
2. insall npm 16.13 using the nvm installed in #1
3. install the app `npm install`
4. now you can run the app `npm run dev`

### Usage
- Source: 
  - stop: the process is stoped
  - start: the process is running
- Number of videos: the number of videos that will be proccessed (all the video sources are the camera)
- Send stats: the application have option to send statistics to our stats server (you can see it on the console)
- Warning/Error - the process and the app can generate warnings and errors all of them are printed to the console as error or warning.

## Key points
- for automation you can use any library that exist
- think also about how to run the automation (CI)
- write a document that explain what you want to test and why testing it
- play with the application and see what happens if you change any of the runing parameters
- fell free to play with the code and change it in order to understand more how does it work
- for some documents about: (keep in mind that i might chnaged the APIs for the perpose of this task)
  - @Vonage/media-processor: https://vonage.github.io/media-processor
  - @Vonage/ml-transformers: https://vonage.github.io/ml-transformers


# Good Luck

