# processing-deps
This is a script and a collection of Processing libraries.<br/>
It will install the libraries as maven dependencies so you can work with Processing in your favorite IDE.<br/>
Note that some of the libraries have additional dependencies in the form of other jar files or other various files.<br/>
If you get errors, check the folder for that particular library for additional resources that will have
to be added to your project.

## prerequisites
java - [installation information](http://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html)<br/>
maven - [download](http://maven.apache.org/download.cgi) -
[quick-start guide](http://maven.apache.org/run-maven/index.html#Quick_Start)<br/>
a shell - mac/linux use the terminal. - windows use [cygwin](https://www.cygwin.com/)

## installation
     git clone https://github.com/josephtaylor/processing-deps.git
     cd processing-deps
     ./install.sh

## usage with maven for Processing 3
to run processing you need at least this much in your <code>pom.xml</code> file:
<pre><code>  &lt;dependencies&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.processing&lt;/groupId&gt;
		&lt;artifactId&gt;processing-core&lt;/artifactId&gt;
		&lt;version&gt;3.0&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.jogamp.gluegen&lt;/groupId&gt;
		&lt;artifactId&gt;gluegen-rt-main&lt;/artifactId&gt;
		&lt;version&gt;2.3.1&lt;/version&gt;
	&lt;/dependency&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;org.jogamp.jogl&lt;/groupId&gt;
		&lt;artifactId&gt;jogl-all-main&lt;/artifactId&gt;
		&lt;version&gt;2.3.1&lt;/version&gt;
	&lt;/dependency&gt;
&lt;/dependencies&gt;</code></pre>

## usage with maven for Processing 2.2.1
to run processing you need at least this much in your <code>pom.xml</code> file:
<pre><code>  &lt;dependencies&gt;
        &lt;dependency&gt;
                &lt;groupId&gt;org.processing&lt;/groupId&gt;
                &lt;artifactId&gt;processing-core&lt;/artifactId&gt;
                &lt;version&gt;2.2.1&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
                &lt;groupId&gt;org.jogamp.gluegen&lt;/groupId&gt;
                &lt;artifactId&gt;gluegen-rt-main&lt;/artifactId&gt;
                &lt;version&gt;2.2.4&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
                &lt;groupId&gt;org.jogamp.jogl&lt;/groupId&gt;
                &lt;artifactId&gt;jogl-all-main&lt;/artifactId&gt;
                &lt;version&gt;2.2.4&lt;/version&gt;
        &lt;/dependency&gt;
&lt;/dependencies&gt;</code></pre>

## pom entries for each plugin


### Cassette - 1.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;cassette&lt;/groupId&gt;
	&lt;artifactId&gt;cassette&lt;/artifactId&gt;
	&lt;version&gt;1.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### IgnoCodeLib 0.4 - 0.4
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;ignoCodeLib_0_4&lt;/groupId&gt;
	&lt;artifactId&gt;ignoCodeLib_0_4&lt;/artifactId&gt;
	&lt;version&gt;0.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Shapes 3D - 2.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;shapes_3D&lt;/groupId&gt;
	&lt;artifactId&gt;shapes_3D&lt;/artifactId&gt;
	&lt;version&gt;2.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### ImageLoader - 1.0.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;imageLoader&lt;/groupId&gt;
	&lt;artifactId&gt;imageLoader&lt;/artifactId&gt;
	&lt;version&gt;1.0.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### YahooWeather - 0.91
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;yahooWeather&lt;/groupId&gt;
	&lt;artifactId&gt;yahooWeather&lt;/artifactId&gt;
	&lt;version&gt;0.91&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### VSync for Processing - v0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;vSync_for_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;vSync_for_Processing&lt;/artifactId&gt;
	&lt;version&gt;v0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Camera 3D - 1.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;camera_3D&lt;/groupId&gt;
	&lt;artifactId&gt;camera_3D&lt;/artifactId&gt;
	&lt;version&gt;1.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### IPCapture - 0.4.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;iPCapture&lt;/groupId&gt;
	&lt;artifactId&gt;iPCapture&lt;/artifactId&gt;
	&lt;version&gt;0.4.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### XlsReader - 0.1.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;xlsReader&lt;/groupId&gt;
	&lt;artifactId&gt;xlsReader&lt;/artifactId&gt;
	&lt;version&gt;0.1.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### ImageLoader - 2.0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;imageLoader&lt;/groupId&gt;
	&lt;artifactId&gt;imageLoader&lt;/artifactId&gt;
	&lt;version&gt;2.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### BlinkStick - 0.2.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;blinkStick&lt;/groupId&gt;
	&lt;artifactId&gt;blinkStick&lt;/artifactId&gt;
	&lt;version&gt;0.2.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### $1 Unistroke Recognizer - 1.0.3
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;1_Unistroke_Recognizer&lt;/groupId&gt;
	&lt;artifactId&gt;1_Unistroke_Recognizer&lt;/artifactId&gt;
	&lt;version&gt;1.0.3&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### OpenCV for Processing - 0.5.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;openCV_for_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;openCV_for_Processing&lt;/artifactId&gt;
	&lt;version&gt;0.5.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Steganos - 1.0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;steganos&lt;/groupId&gt;
	&lt;artifactId&gt;steganos&lt;/artifactId&gt;
	&lt;version&gt;1.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Punktiert - 2.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;punktiert&lt;/groupId&gt;
	&lt;artifactId&gt;punktiert&lt;/artifactId&gt;
	&lt;version&gt;2.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Jasmine - 1.0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;jasmine&lt;/groupId&gt;
	&lt;artifactId&gt;jasmine&lt;/artifactId&gt;
	&lt;version&gt;1.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Most Pixels Ever - 2.0.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;most_Pixels_Ever&lt;/groupId&gt;
	&lt;artifactId&gt;most_Pixels_Ever&lt;/artifactId&gt;
	&lt;version&gt;2.0.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### MindSet Processing - 0.1.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;mindSet_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;mindSet_Processing&lt;/artifactId&gt;
	&lt;version&gt;0.1.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### MQTT - 1.6.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;mQTT&lt;/groupId&gt;
	&lt;artifactId&gt;mQTT&lt;/artifactId&gt;
	&lt;version&gt;1.6.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### BezierSQLib - 0.2.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;bezierSQLib&lt;/groupId&gt;
	&lt;artifactId&gt;bezierSQLib&lt;/artifactId&gt;
	&lt;version&gt;0.2.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### QScript - 2.1.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;qScript&lt;/groupId&gt;
	&lt;artifactId&gt;qScript&lt;/artifactId&gt;
	&lt;version&gt;2.1.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### ttslib - 0.4
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;ttslib&lt;/groupId&gt;
	&lt;artifactId&gt;ttslib&lt;/artifactId&gt;
	&lt;version&gt;0.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Console - 1.0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;console&lt;/groupId&gt;
	&lt;artifactId&gt;console&lt;/artifactId&gt;
	&lt;version&gt;1.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### iGeo - 0.9.0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;iGeo&lt;/groupId&gt;
	&lt;artifactId&gt;iGeo&lt;/artifactId&gt;
	&lt;version&gt;0.9.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### planetarium - 0.4
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;planetarium&lt;/groupId&gt;
	&lt;artifactId&gt;planetarium&lt;/artifactId&gt;
	&lt;version&gt;0.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Temboo - 2.13.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;temboo&lt;/groupId&gt;
	&lt;artifactId&gt;temboo&lt;/artifactId&gt;
	&lt;version&gt;2.13.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### NextText - 2.0.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;nextText&lt;/groupId&gt;
	&lt;artifactId&gt;nextText&lt;/artifactId&gt;
	&lt;version&gt;2.0.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Kinect4WinSDK - 1.2.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;kinect4WinSDK&lt;/groupId&gt;
	&lt;artifactId&gt;kinect4WinSDK&lt;/artifactId&gt;
	&lt;version&gt;1.2.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Nest - 0.7.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;nest&lt;/groupId&gt;
	&lt;artifactId&gt;nest&lt;/artifactId&gt;
	&lt;version&gt;0.7.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### SketchMapper - 3.0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;sketchMapper&lt;/groupId&gt;
	&lt;artifactId&gt;sketchMapper&lt;/artifactId&gt;
	&lt;version&gt;3.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Motion - 1.3
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;motion&lt;/groupId&gt;
	&lt;artifactId&gt;motion&lt;/artifactId&gt;
	&lt;version&gt;1.3&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### MuKCast - 1.0.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;muKCast&lt;/groupId&gt;
	&lt;artifactId&gt;muKCast&lt;/artifactId&gt;
	&lt;version&gt;1.0.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Simple Touch - 1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;simple_Touch&lt;/groupId&gt;
	&lt;artifactId&gt;simple_Touch&lt;/artifactId&gt;
	&lt;version&gt;1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Open Kinect for Processing - 1.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;open_Kinect_for_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;open_Kinect_for_Processing&lt;/artifactId&gt;
	&lt;version&gt;1.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Guido - 0.0.4
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;guido&lt;/groupId&gt;
	&lt;artifactId&gt;guido&lt;/artifactId&gt;
	&lt;version&gt;0.0.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Carnivore - 7
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;carnivore&lt;/groupId&gt;
	&lt;artifactId&gt;carnivore&lt;/artifactId&gt;
	&lt;version&gt;7&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### SimpleOpenNI - 1.96
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;simpleOpenNI&lt;/groupId&gt;
	&lt;artifactId&gt;simpleOpenNI&lt;/artifactId&gt;
	&lt;version&gt;1.96&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Leap Motion for Processing - 2.2.5.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;leap_Motion_for_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;leap_Motion_for_Processing&lt;/artifactId&gt;
	&lt;version&gt;2.2.5.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### P8gGraphicsSVG - 2.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;p8gGraphicsSVG&lt;/groupId&gt;
	&lt;artifactId&gt;p8gGraphicsSVG&lt;/artifactId&gt;
	&lt;version&gt;2.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Keystone - 006
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;keystone&lt;/groupId&gt;
	&lt;artifactId&gt;keystone&lt;/artifactId&gt;
	&lt;version&gt;006&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### AndroidCapture for Processing - 2.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;androidCapture_for_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;androidCapture_for_Processing&lt;/artifactId&gt;
	&lt;version&gt;2.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### gicentreUtils - 3.4.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;gicentreUtils&lt;/groupId&gt;
	&lt;artifactId&gt;gicentreUtils&lt;/artifactId&gt;
	&lt;version&gt;3.4.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### BRigid - 2.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;bRigid&lt;/groupId&gt;
	&lt;artifactId&gt;bRigid&lt;/artifactId&gt;
	&lt;version&gt;2.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Path Finder - 1.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;path_Finder&lt;/groupId&gt;
	&lt;artifactId&gt;path_Finder&lt;/artifactId&gt;
	&lt;version&gt;1.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### PeasyCam - 201
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;peasyCam&lt;/groupId&gt;
	&lt;artifactId&gt;peasyCam&lt;/artifactId&gt;
	&lt;version&gt;201&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Patchy - 200
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;patchy&lt;/groupId&gt;
	&lt;artifactId&gt;patchy&lt;/artifactId&gt;
	&lt;version&gt;200&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### ID3 - 0.9
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;iD3&lt;/groupId&gt;
	&lt;artifactId&gt;iD3&lt;/artifactId&gt;
	&lt;version&gt;0.9&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### TimedEvents - 1.0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;timedEvents&lt;/groupId&gt;
	&lt;artifactId&gt;timedEvents&lt;/artifactId&gt;
	&lt;version&gt;1.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Websockets - 0.1b
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;websockets&lt;/groupId&gt;
	&lt;artifactId&gt;websockets&lt;/artifactId&gt;
	&lt;version&gt;0.1b&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Tablet - 2.0-alpha3
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;tablet&lt;/groupId&gt;
	&lt;artifactId&gt;tablet&lt;/artifactId&gt;
	&lt;version&gt;2.0-alpha3&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Leap Motion for Processing - 2.3.1.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;leap_Motion_for_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;leap_Motion_for_Processing&lt;/artifactId&gt;
	&lt;version&gt;2.3.1.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### grafica - 1.3.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;grafica&lt;/groupId&gt;
	&lt;artifactId&gt;grafica&lt;/artifactId&gt;
	&lt;version&gt;1.3.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Mother - 1.6.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;mother&lt;/groupId&gt;
	&lt;artifactId&gt;mother&lt;/artifactId&gt;
	&lt;version&gt;1.6.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Tablet - 2.0-alpha1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;tablet&lt;/groupId&gt;
	&lt;artifactId&gt;tablet&lt;/artifactId&gt;
	&lt;version&gt;2.0-alpha1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Hermes - 2.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;hermes&lt;/groupId&gt;
	&lt;artifactId&gt;hermes&lt;/artifactId&gt;
	&lt;version&gt;2.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### grafica - 1.5.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;grafica&lt;/groupId&gt;
	&lt;artifactId&gt;grafica&lt;/artifactId&gt;
	&lt;version&gt;1.5.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Collada Loader for Google Sketchup - 3.0b
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;collada_Loader_for_Google_Sketchup&lt;/groupId&gt;
	&lt;artifactId&gt;collada_Loader_for_Google_Sketchup&lt;/artifactId&gt;
	&lt;version&gt;3.0b&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### G4P - 4.0.3
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;g4P&lt;/groupId&gt;
	&lt;artifactId&gt;g4P&lt;/artifactId&gt;
	&lt;version&gt;4.0.3&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Drop - 1.0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;drop&lt;/groupId&gt;
	&lt;artifactId&gt;drop&lt;/artifactId&gt;
	&lt;version&gt;1.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### SFTP - 0.1a
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;sFTP&lt;/groupId&gt;
	&lt;artifactId&gt;sFTP&lt;/artifactId&gt;
	&lt;version&gt;0.1a&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### SoundCloud - 0.1.6
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;soundCloud&lt;/groupId&gt;
	&lt;artifactId&gt;soundCloud&lt;/artifactId&gt;
	&lt;version&gt;0.1.6&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### HTTP Requests for Processing - 0.1.4
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;hTTP_Requests_for_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;hTTP_Requests_for_Processing&lt;/artifactId&gt;
	&lt;version&gt;0.1.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Temboo - 2.14.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;temboo&lt;/groupId&gt;
	&lt;artifactId&gt;temboo&lt;/artifactId&gt;
	&lt;version&gt;2.14.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Simple Multi-Touch (SMT) - 4.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;simple_Multi_Touch_SMT&lt;/groupId&gt;
	&lt;artifactId&gt;simple_Multi_Touch_SMT&lt;/artifactId&gt;
	&lt;version&gt;4.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### QRCode - 0.3a
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;qRCode&lt;/groupId&gt;
	&lt;artifactId&gt;qRCode&lt;/artifactId&gt;
	&lt;version&gt;0.3a&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### ColorScheme - 2.0.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;colorScheme&lt;/groupId&gt;
	&lt;artifactId&gt;colorScheme&lt;/artifactId&gt;
	&lt;version&gt;2.0.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### oscP5 - 0.9.9
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;oscP5&lt;/groupId&gt;
	&lt;artifactId&gt;oscP5&lt;/artifactId&gt;
	&lt;version&gt;0.9.9&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### SuperCollider client for Processing - 0.3.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;superCollider_client_for_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;superCollider_client_for_Processing&lt;/artifactId&gt;
	&lt;version&gt;0.3.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### IgnoCodeLib - 0.3
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;ignoCodeLib&lt;/groupId&gt;
	&lt;artifactId&gt;ignoCodeLib&lt;/artifactId&gt;
	&lt;version&gt;0.3&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### proJMS - 0.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;proJMS&lt;/groupId&gt;
	&lt;artifactId&gt;proJMS&lt;/artifactId&gt;
	&lt;version&gt;0.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### LeapMotion - 1.26
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;leapMotion&lt;/groupId&gt;
	&lt;artifactId&gt;leapMotion&lt;/artifactId&gt;
	&lt;version&gt;1.26&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Beads - 1.01
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;beads&lt;/groupId&gt;
	&lt;artifactId&gt;beads&lt;/artifactId&gt;
	&lt;version&gt;1.01&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### NXTComm Processing - 0.99
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;nXTComm_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;nXTComm_Processing&lt;/artifactId&gt;
	&lt;version&gt;0.99&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Video - 1.0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;video&lt;/groupId&gt;
	&lt;artifactId&gt;video&lt;/artifactId&gt;
	&lt;version&gt;1.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Combinatorics - 0.0.11
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;combinatorics&lt;/groupId&gt;
	&lt;artifactId&gt;combinatorics&lt;/artifactId&gt;
	&lt;version&gt;0.0.11&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### proscene - 3.0.0-beta.3
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;proscene&lt;/groupId&gt;
	&lt;artifactId&gt;proscene&lt;/artifactId&gt;
	&lt;version&gt;3.0.0-beta.3&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### OBJExport - 0.2.4
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;oBJExport&lt;/groupId&gt;
	&lt;artifactId&gt;oBJExport&lt;/artifactId&gt;
	&lt;version&gt;0.2.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### OOCSI for Processing - 0.8
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;oOCSI_for_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;oOCSI_for_Processing&lt;/artifactId&gt;
	&lt;version&gt;0.8&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Drop - 1.0.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;drop&lt;/groupId&gt;
	&lt;artifactId&gt;drop&lt;/artifactId&gt;
	&lt;version&gt;1.0.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Fontastic - 0.4
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;fontastic&lt;/groupId&gt;
	&lt;artifactId&gt;fontastic&lt;/artifactId&gt;
	&lt;version&gt;0.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Executor - 1.0.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;executor&lt;/groupId&gt;
	&lt;artifactId&gt;executor&lt;/artifactId&gt;
	&lt;version&gt;1.0.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Ani - 2.7
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;ani&lt;/groupId&gt;
	&lt;artifactId&gt;ani&lt;/artifactId&gt;
	&lt;version&gt;2.7&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### BoofCV for Processing - 0.20
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;boofCV_for_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;boofCV_for_Processing&lt;/artifactId&gt;
	&lt;version&gt;0.20&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### The MidiBus - 8
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;the_MidiBus&lt;/groupId&gt;
	&lt;artifactId&gt;the_MidiBus&lt;/artifactId&gt;
	&lt;version&gt;8&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Blobscanner - 0.2-a
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;blobscanner&lt;/groupId&gt;
	&lt;artifactId&gt;blobscanner&lt;/artifactId&gt;
	&lt;version&gt;0.2-a&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Unfolding Maps - 0.9.6
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;unfolding_Maps&lt;/groupId&gt;
	&lt;artifactId&gt;unfolding_Maps&lt;/artifactId&gt;
	&lt;version&gt;0.9.6&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### BRigid - 1.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;bRigid&lt;/groupId&gt;
	&lt;artifactId&gt;bRigid&lt;/artifactId&gt;
	&lt;version&gt;1.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### HTTP Requests for Processing - 0.1.3
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;hTTP_Requests_for_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;hTTP_Requests_for_Processing&lt;/artifactId&gt;
	&lt;version&gt;0.1.3&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### OBJLoader - 0.99
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;oBJLoader&lt;/groupId&gt;
	&lt;artifactId&gt;oBJLoader&lt;/artifactId&gt;
	&lt;version&gt;0.99&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Post To Web - 0.7
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;post_To_Web&lt;/groupId&gt;
	&lt;artifactId&gt;post_To_Web&lt;/artifactId&gt;
	&lt;version&gt;0.7&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### gicentreUtils - 3.3.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;gicentreUtils&lt;/groupId&gt;
	&lt;artifactId&gt;gicentreUtils&lt;/artifactId&gt;
	&lt;version&gt;3.3.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### SelectFile - 0.0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;selectFile&lt;/groupId&gt;
	&lt;artifactId&gt;selectFile&lt;/artifactId&gt;
	&lt;version&gt;0.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### ControlP5 - 2.2.5
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;controlP5&lt;/groupId&gt;
	&lt;artifactId&gt;controlP5&lt;/artifactId&gt;
	&lt;version&gt;2.2.5&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### proscene - 2.0.5
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;proscene&lt;/groupId&gt;
	&lt;artifactId&gt;proscene&lt;/artifactId&gt;
	&lt;version&gt;2.0.5&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Gamepad - 2.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;gamepad&lt;/groupId&gt;
	&lt;artifactId&gt;gamepad&lt;/artifactId&gt;
	&lt;version&gt;2.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### tactu5 - 1.0.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;tactu5&lt;/groupId&gt;
	&lt;artifactId&gt;tactu5&lt;/artifactId&gt;
	&lt;version&gt;1.0.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Computational Geometry - 3.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;computational_Geometry&lt;/groupId&gt;
	&lt;artifactId&gt;computational_Geometry&lt;/artifactId&gt;
	&lt;version&gt;3.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Geomerative - 40
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;geomerative&lt;/groupId&gt;
	&lt;artifactId&gt;geomerative&lt;/artifactId&gt;
	&lt;version&gt;40&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### HE_Mesh 2014 - 2.0.15 „Random”
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;hE_Mesh_2014&lt;/groupId&gt;
	&lt;artifactId&gt;hE_Mesh_2014&lt;/artifactId&gt;
	&lt;version&gt;2.0.15 „Random”&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Box2D for Processing - 0.4
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;box2D_for_Processing&lt;/groupId&gt;
	&lt;artifactId&gt;box2D_for_Processing&lt;/artifactId&gt;
	&lt;version&gt;0.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### GL Video - 1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;gL_Video&lt;/groupId&gt;
	&lt;artifactId&gt;gL_Video&lt;/artifactId&gt;
	&lt;version&gt;1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### SketchMapper - 4.0.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;sketchMapper&lt;/groupId&gt;
	&lt;artifactId&gt;sketchMapper&lt;/artifactId&gt;
	&lt;version&gt;4.0.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Sound - 1.3.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;sound&lt;/groupId&gt;
	&lt;artifactId&gt;sound&lt;/artifactId&gt;
	&lt;version&gt;1.3.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Sudden Motion Sensor - 0.1a
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;sudden_Motion_Sensor&lt;/groupId&gt;
	&lt;artifactId&gt;sudden_Motion_Sensor&lt;/artifactId&gt;
	&lt;version&gt;0.1a&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### ijeomamotion - 5.5
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;ijeomamotion&lt;/groupId&gt;
	&lt;artifactId&gt;ijeomamotion&lt;/artifactId&gt;
	&lt;version&gt;5.5&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Eliza - 1.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;eliza&lt;/groupId&gt;
	&lt;artifactId&gt;eliza&lt;/artifactId&gt;
	&lt;version&gt;1.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### OCD: Obsessive Camera Direction - 1.5
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;oCD_Obsessive_Camera_Direction&lt;/groupId&gt;
	&lt;artifactId&gt;oCD_Obsessive_Camera_Direction&lt;/artifactId&gt;
	&lt;version&gt;1.5&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### BlobDetection - 1.00
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;blobDetection&lt;/groupId&gt;
	&lt;artifactId&gt;blobDetection&lt;/artifactId&gt;
	&lt;version&gt;1.00&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Andrew's Utilities (AULib) - 2.2.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;andrew_s_Utilities_AULib&lt;/groupId&gt;
	&lt;artifactId&gt;andrew_s_Utilities_AULib&lt;/artifactId&gt;
	&lt;version&gt;2.2.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Ketai - v12
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;ketai&lt;/groupId&gt;
	&lt;artifactId&gt;ketai&lt;/artifactId&gt;
	&lt;version&gt;v12&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Fisica - 15
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;fisica&lt;/groupId&gt;
	&lt;artifactId&gt;fisica&lt;/artifactId&gt;
	&lt;version&gt;15&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Sprites - 2.1.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;sprites&lt;/groupId&gt;
	&lt;artifactId&gt;sprites&lt;/artifactId&gt;
	&lt;version&gt;2.1.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### GifAnimation - 2.3.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;gifAnimation&lt;/groupId&gt;
	&lt;artifactId&gt;gifAnimation&lt;/artifactId&gt;
	&lt;version&gt;2.3.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### ComputationalGeometry - 2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;computationalGeometry&lt;/groupId&gt;
	&lt;artifactId&gt;computationalGeometry&lt;/artifactId&gt;
	&lt;version&gt;2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Ptmx - 0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;ptmx&lt;/groupId&gt;
	&lt;artifactId&gt;ptmx&lt;/artifactId&gt;
	&lt;version&gt;0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### ezGestures - 1.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;ezGestures&lt;/groupId&gt;
	&lt;artifactId&gt;ezGestures&lt;/artifactId&gt;
	&lt;version&gt;1.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Collada Loader for SketchUp and Blender - 3.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;collada_Loader_for_SketchUp_and_Blender&lt;/groupId&gt;
	&lt;artifactId&gt;collada_Loader_for_SketchUp_and_Blender&lt;/artifactId&gt;
	&lt;version&gt;3.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Minim - 2.2.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;minim&lt;/groupId&gt;
	&lt;artifactId&gt;minim&lt;/artifactId&gt;
	&lt;version&gt;2.2.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Arduino (Firmata) - 7
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;arduino_Firmata&lt;/groupId&gt;
	&lt;artifactId&gt;arduino_Firmata&lt;/artifactId&gt;
	&lt;version&gt;7&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### G4P - 4.0.2
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;g4P&lt;/groupId&gt;
	&lt;artifactId&gt;g4P&lt;/artifactId&gt;
	&lt;version&gt;4.0.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### UDP - 0.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;uDP&lt;/groupId&gt;
	&lt;artifactId&gt;uDP&lt;/artifactId&gt;
	&lt;version&gt;0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### GML4U - 0.1.9
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;gML4U&lt;/groupId&gt;
	&lt;artifactId&gt;gML4U&lt;/artifactId&gt;
	&lt;version&gt;0.1.9&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### proscene - 3.0.0-beta.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;proscene&lt;/groupId&gt;
	&lt;artifactId&gt;proscene&lt;/artifactId&gt;
	&lt;version&gt;3.0.0-beta.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Apple Light Sensor - 1.0
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;apple_Light_Sensor&lt;/groupId&gt;
	&lt;artifactId&gt;apple_Light_Sensor&lt;/artifactId&gt;
	&lt;version&gt;1.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### PixelPusher - 20141222
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;pixelPusher&lt;/groupId&gt;
	&lt;artifactId&gt;pixelPusher&lt;/artifactId&gt;
	&lt;version&gt;20141222&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### RiTa - 1.1.27
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;riTa&lt;/groupId&gt;
	&lt;artifactId&gt;riTa&lt;/artifactId&gt;
	&lt;version&gt;1.1.27&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### MapThing - 1.4
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;mapThing&lt;/groupId&gt;
	&lt;artifactId&gt;mapThing&lt;/artifactId&gt;
	&lt;version&gt;1.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### AI for 2D Games - 1.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;aI_for_2D_Games&lt;/groupId&gt;
	&lt;artifactId&gt;aI_for_2D_Games&lt;/artifactId&gt;
	&lt;version&gt;1.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Redis - 1.1.3
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;redis&lt;/groupId&gt;
	&lt;artifactId&gt;redis&lt;/artifactId&gt;
	&lt;version&gt;1.1.3&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### Picking - 0.2.1
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;picking&lt;/groupId&gt;
	&lt;artifactId&gt;picking&lt;/artifactId&gt;
	&lt;version&gt;0.2.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### RiTa - 1.1.19
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;riTa&lt;/groupId&gt;
	&lt;artifactId&gt;riTa&lt;/artifactId&gt;
	&lt;version&gt;1.1.19&lt;/version&gt;
&lt;/dependency&gt;</code></pre>


### video
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;org.processing&lt;/groupId&gt;
	&lt;artifactId&gt;procesing-video&lt;/artifactId&gt;
	&lt;version&gt;0.1&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.processing&lt;/groupId&gt;
	&lt;artifactId&gt;procesing-video-gstreamer&lt;/artifactId&gt;
	&lt;version&gt;0.1&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.processing&lt;/groupId&gt;
	&lt;artifactId&gt;procesing-video-jna&lt;/artifactId&gt;
	&lt;version&gt;0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

[Usage Example](http://github.com/josephtaylor/video-test)

### Contributing
Don't see your favorite libraries?<br/>
Fork this and add stuff, I'll pull in whatever you want.
