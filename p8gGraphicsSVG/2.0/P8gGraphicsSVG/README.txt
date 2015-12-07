P8gGraphicsSVG 2.0 - 2012-11-14

P8gGraphicsSVG is to SVG what PGraphicsPDF is to PDF: a vector renderer for Processing sketches,
allowing to save the drawings of a sketch to a SVG file, via the Apache Batik library (included).

This renderer extends the PGraphicsJava2D renderer, so (almost) any sketch using this (default) renderer
can render to SVG, with some limitations.
It doesn't handle animations, rendering only a static image.
Unlike PGraphicsPDF, it doesn't handle multiple pages in the same file.
But it can be used to save a sequence of SVG files.
And the Pausing While Recording (pause-resume) sketch of the PDF library
cannot be done with P8gGraphicsSVG because of a different way of handling recording events.

The documentation (beside this README) is currently lacking, but the provided examples
should guide you how to use the library. And you can take a look at the source's JavaDoc
(the parts between /** and */ marks) for a bit more information.

Limitations: the pixel manipulations are not allowed / supported;
but can be done on a classical PGraphics, they will be saved as an image by the library if you image() it.
The following functions cannot be used with P8gGraphicsSVG:
loadPixels
updatePixels
get
set
mask
filter
blend
copy

--

By Philippe Lhoste <PhiLho(a)GMX.net> http://Phi.Lho.free.fr & http://PhiLho.deviantART.com

Home page of the library:
http://Phi.Lho.free.fr/Programming/Processing/P8gGraphicsSVG/
Source code:
http://bazaar.launchpad.net/~philho/+junk/Processing/files/head:/libraries/P8gGraphicsSVG/
The binary distribution of the library is currently located at:
http://Phi.Lho.free.fr/Programming/Processing/P8gGraphicsSVG/P8gGraphicsSVG.zip

Copyright notice: For details, see the following file:
http://Phi.Lho.free.fr/softwares/PhiLhoSoft/PhiLhoSoftLicense.txt
This program is distributed under the zlib/libpng license.
Copyright (c) 2012 Philippe Lhoste / PhiLhoSoft

Scalable Vector Graphics (SVG)
http://www.w3.org/Graphics/SVG/

This version of P8gGraphicsSVG uses Apache Batik 1.8pre compiled by myself (see below).
http://xmlgraphics.apache.org/batik/

It is to be used with Processing 1.5+
http://Processing.org

--

This is a 2.0 version because I renamed the library and changed the package name (see the history notes at the end).
I also removed the save() and saveFrame() support, as Ben Fry estimated this should be restricted to saving to a binary image format.

--

Note: there is a bug* in Batik 1.7, binary distribution dated 2008-01-09.
It has been fixed in the SVN trunk but not released in the binary version yet.
Text size defined in inline CSS is written without unit,
making its size to be ignored by some SVG renderers (Firefox and Opera).
A suggested workaround is to disable inline CSS (setUseInlineCSS(false)).
Another one is to hand-edit (or use automated replace in) the generated SVG to add the missing unit.
A regular expression like: /font-size:(\d+);/ -> /font-size:\1px;/ can do the job.

* https://issues.apache.org/bugzilla/show_bug.cgi?id=50100


So I downloaded the SVN trunk (at 2012-08-14, revision 1372840) and compiled it
with Java 1.6.0_30 using Ant 1.7,
with a tweak of the Ant file because the codec.imageio package is missing from the codec jar.

  <target name="codec-jar" depends="init, compile, prepare-build">
    <jar jarfile="${build}/lib/${project}-codec.jar">
[...]
      <fileset dir="${dest}">
[...]
        <include name="${package-prefix}/ext/awt/image/codec/jpeg/*.class"
                 if="sun-codecs.present"/>
        <!-- PhiLho: Missing imageio package in generated jars -->
        <include name="${package-prefix}/ext/awt/image/codec/imageio/*.class"/>
      </fileset>

Also removed some System.err from
sources\org\apache\batik\ext\awt\image\codec\imageio\ImageIOImageWriter.java

The jars distributed with this version are those hand-made 1.8pre jars, fixing the bug mentioned above.

--

The examples

Hearts illustrates that we can make a sketch dedicated to exporting a SVG file, without screen display:
its primary drawing surface is a P8gGraphicsSVG and calling exit() saves the drawing.

AutoCrop shows how to draw on screen as well as recording the drawing. Here, endRecord() is used
to save the file, as exit() would hide the result.
It also illustrates that the drawing surface crops the drawings.

ImageTransform shows we don't even need to define draw(), since we don't animate the sketch.
It also illustrates image manipulations, and how they are saved. Note that some transformations
(translate, scale, rotate) can be applied without creating a new image. Images manipulations at pixel level
(filter, blend, mask, etc.) must be done in a regular PGraphics and will result in a new bitmap image
saved beside the SVG file (default) or as a Base64 encoding in the SVG file itself (see TrySettings).

SavingChoice shows how to save a chosen frame from an animation.
This implies to reset the previous recordings on each new frame.

TrySettings shows the various settings available for this renderer, and how to save to different files.

Sequence shows how to use saveFrame() to save a sequence of numbered SVG files.

--

History: it has been started in July 2012 after a question* on the Processing.org forum
shown that the old proSVG** library is badly outdated and doesn't work anymore with
modern Processing. Even the update by Konstantin Levinski*** wasn't working well.

* https://forum.processing.org/topic/status-of-prosvg-svg-export-plugin
** SVGOut by Christian Riekoff <http://www.texone.org/prosvg/> (dead link!)
*** https://sites.google.com/site/kdlprosvg/

I have a long time interest in SVG, back to a time where there was little support for it
(beside an Adobe plug-in for Internet Explorer).
Now most good browsers have a native support for it, Inkscape is very good at handling it,
and of course other softwares (Gimp, Illustrator, Photoshop, etc.) can handle it too.
Processing itself can read simple SVG files (I also contributed some little improvements to this part).

So I thought it was time to have a modern SVG renderer for Processing.

I took a look at proSVG and indeed saw it has many issues, being based on an old Processing version.
But I also saw it was easy to take a subset of the Batik library (plain Java library to read and write SVG documents),
a small set of hand-selected jars, the minimum needed to generate SVG files out of Java2D drawing commands.

So I created a new library, modeled after the PGraphicsPDF one, allowing more options than proSVG,
correctly handling images, and working with Processing 1.5.1 and 2.0 (and hopefully later versions!).
Like PGraphicsPDF, they rely on a library (iText for PDF, Batik for SVG) that reuses the Java2D API,
allowing to write vector files from regular Java programs with little changes.
This leads to a simple and short implementation, allowing lot of flexibility.


Why the P8gGraphicsSVG name? I initially named it PGraphicsSVG, for consistency with PGraphicsPDF
and others, thinking that someday it might be the base for an official PGraphics for Processing.
But Ben Fry wasn't pleased with the P prefix hijack, as it "pollutes" the namespace.
He also asked the .processing. part in the package name to be changed, even though it is more harmless
(no confusion possible).
Understanding the need for respecting the rules set for library writing, I chose the P8g prefix.
I dislike the P5 prefix, derived from the PROCE55ING naming that was used in the past to avoid confusion
with the more generic 'processing' name, too common in the computing world.
I don't like either the Pro prefix, legit but sounding a bit pretentious as one can confuse with 'Professional',
and I don't see my library as a professional one... :-)
So I used the same trick than in i18n and l10n (internationalization and localization),
ie. replacing the letters between the first and last letter by their number of occurrences.
There are 8 letters in 'rocessin', so that's P8g...
