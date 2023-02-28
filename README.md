Code to open the native calculator app on the Android
Write a small test to add 2 numbers and verify the result using JS language.


Mobile Automation Testing using WebdriverIO & Appium  

 /*selected because I have good experience and good hold on cypress JS framework with JS language but cypress donot support mobile automation .Webdriverio is also a JS framework which support mobile automation,it was quite easy to write testcases in JS with mocha test runner and with chai library for assertion.*/

 Environment Setup:

1.Node JS Setup:
https://nodejs.org/en/download/

2.Java Setup:
Open JDK Install:
https://adoptium.net/

3.Set JAVA_HOME:
https://mkyong.com/java/how-to-set-java_home-
environment-variable-on-mac-os-x/

4.Android Studio:
https://developer.android.com/studio

5.Set ANDROID_HOME:
Open the Environment Variable
vim ~/.zshenv

Add the environment variables:
export ANDROID_HOME=/Users/username/Library/Android/sdk/
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH

Source the changes:
source ~/.zshenv

Test changes:
echo $ANDROID_HOME
adb devices - should return list of devices attached

6.Android Emulator Setup:
https://developer.android.com/studio/run/managing-avds

7.Appium Inspector Install:
https://github.com/appium/appium-inspector/releases

8.Appium setup:
npm install -g appium      //install appium
appium -v                  //check if appium is installed successfully.
appium-doctor         //check everything is insatlled/all should green tick

9.Webdriverio setup:
mkdir  WEBRIVERIO-APPIUM   //make a directory
cd WEBDRIVERIO-AAPIUM

npm init -y             //create json for all dependencies

npm i @wdio/cli        //install webdriverio CLI
npx wdio config        //setup nodule module configuration
     select all configuration like framework:mocha,services:appium,baseurl:localost ect as required.

now set wdio.config.js file
-set port 
-set spec path
-set capabilities
-set emulator device name
-set UIautomator

10.Put android .apk file in app/android folder.
write testcases in test/specs/calucator.js

11.Run testcases

npx wdio

/*used accessibilty locator*/
/*describe() block is used for describing the suite and it() block is used for describing each testcase. expect assertion comes from chai library.*/


