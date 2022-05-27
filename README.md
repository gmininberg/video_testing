# Vonage Media processing QA exercise

## Purpose
Test the library ml-transformers

## Goal
1. Build a test plan of what need to be tested.
  - between 10 to 15 tests.
2. Build some automation testing.
  - between 5 to 10 tests.

## Estimated time
The task should take up to 1 day of work. but if it takes more then that's ok... just let me know.

## Get the repo
since this is a public repo that can be used by everyone but no one other than me can push to it; fork it to your github account. 

## The application

### Installation
1. install nvm on your computer: 
  - unix base: https://github.com/nvm-sh/nvm
  - windows: https://github.com/coreybutler/nvm-windows
2. install node 16.13 using the nvm installed in #1
3. install the app `npm install`
4. now you can run the app `npm run dev`

### Usage
- Source: 
  - stop: the process is stopped
  - start: the process is running
- Number of videos: the number of videos that will be processed (all the video sources are the camera)
- Send stats: the application have option to send statistics to our stats server (you can see it on the console)
- Warning/Error - the process and the app can generate warnings and errors all of them are printed to the console as error or warning.

## Key points
- for automation you can use any library that exist
- think also about how to run the automation (CI)
- write a document that explain what you want to test and why testing it
- play with the application and see what happens if you change any of the running parameters
- feel free to play with the code and change it in order to understand more how does it work


#### feel free to contact me for any questions `guy.mininberg@vonage.com`

# Good Luck
