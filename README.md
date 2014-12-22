# processing-deps
This is a script and a collection of Processing libraries.<br/>
It will install the libraries as maven dependencies so you can work with Processing in your favorite IDE.

### prerequisites
java - [installation information](http://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html)<br/>
maven - [download](http://maven.apache.org/download.cgi) -
[quick-start guide](http://maven.apache.org/run-maven/index.html#Quick_Start)<br/>
a shell - mac/linux use the terminal. - windows use [cygwin](https://www.cygwin.com/)

### installation
     git clone https://github.com/josephtaylor/processing-deps.git
     cd processing-deps
     ./install.sh

### usage with maven
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

### pom entries for each plugin

### ColorScheme
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;jto.processing&lt;/groupId&gt;
	&lt;artifactId&gt;color-scheme&lt;/artifactId&gt;
	&lt;version&gt;0.0.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

### blobDetection
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;net.v3ga&lt;/groupId&gt;
	&lt;artifactId&gt;blobDetection&lt;/artifactId&gt;
	&lt;version&gt;2012.10&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

### geomerative
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;geomerative&lt;/groupId&gt;
	&lt;artifactId&gt;geomerative&lt;/artifactId&gt;
	&lt;version&gt;34&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
	&lt;groupId&gt;batikfont&lt;/groupId&gt;
	&lt;artifactId&gt;batikfont&lt;/artifactId&gt;
	&lt;version&gt;1.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

### RwMidi
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;rwmidi&lt;/groupId&gt;
	&lt;artifactId&gt;rwmidi&lt;/artifactId&gt;
	&lt;version&gt;1.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

### controlP5
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;controlP5&lt;/groupId&gt;
	&lt;artifactId&gt;controlP5&lt;/artifactId&gt;
	&lt;version&gt;2.0.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

### triangulate
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;org.processing.wiki&lt;/groupId&gt;
	&lt;artifactId&gt;triangulate&lt;/artifactId&gt;
	&lt;version&gt;1.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

### oscP5
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;de.sojamo&lt;/groupId&gt;
	&lt;artifactId&gt;oscP5&lt;/artifactId&gt;
	&lt;version&gt;1.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

### surfaceLib
<pre><code>&lt;dependency&gt;
	&lt;groupId&gt;eskimoblood&lt;/groupId&gt;
	&lt;artifactId&gt;surfaceLib&lt;/artifactId&gt;
	&lt;version&gt;1.2&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

### Contributing
Don't see your favorite libraries?<br/>
Fork this and add stuff, I'll pull in whatever you want.
