#!/bin/sh

mvn install:install-file -DgroupId=org.processing -DartifactId=processing-core -Dversion=2.2.1 -Dpackaging=jar -Dfile=2.2.1/core.jar

mvn install:install-file -DgroupId=org.processing -DartifactId=processing-core -Dversion=3.0b4 -Dpackaging=jar -Dfile=3.0b4/core.jar

mvn install:install-file -DgroupId=jto.processing -DartifactId=color-scheme -Dversion=0.0.2 -Dpackaging=jar -Dfile=ColorScheme.jar

mvn install:install-file -DgroupId=net.v3ga -DartifactId=blobDetection -Dversion=2012.10 -Dpackaging=jar -Dfile=blobDetection.jar

# GEOMERATIVE
mvn install:install-file -DgroupId=geomerative -DartifactId=geomerative -Dversion=34 -Dpackaging=jar -Dfile=geomerative.jar

mvn install:install-file -DgroupId=batikfont -DartifactId=batikfont -Dversion=1.0 -Dpackaging=jar -Dfile=batikfont.jar
# END GEOMERATIVE

mvn install:install-file -DgroupId=rwmidi -DartifactId=rwmidi -Dversion=1.0 -Dpackaging=jar -Dfile=rwmidi.jar

mvn install:install-file -DgroupId=controlP5 -DartifactId=controlP5 -Dversion=2.0.4 -Dpackaging=jar -Dfile=controlP5.jar

mvn install:install-file -DgroupId=org.processing.wiki -DartifactId=triangulate -Dversion=1.0 -Dpackaging=jar -Dfile=triangulate.jar

mvn install:install-file -DgroupId=de.sojamo -DartifactId=oscP5 -Dversion=1.0 -Dpackaging=jar -Dfile=oscP5.jar

mvn install:install-file -DgroupId=eskimoblood -DartifactId=surfaceLib -Dversion=1.2 -Dpackaging=jar -Dfile=surfaceLib.jar

mvn install:install-file -DgroupId=net.ubaa -DartifactId=udp -Dversion=0.1 -Dpackaging=jar -Dfile=udp.jar

# VIDEO
mvn install:install-file -DgroupId=org.processing -DartifactId=processing-video -Dversion=1.0 -Dpackaging=jar -Dfile=video/video.jar

mvn install:install-file -DgroupId=org.processing -DartifactId=processing-video-gstreamer -Dversion=1.0 -Dpackaging=jar -Dfile=video/gstreamer-java.jar

mvn install:install-file -DgroupId=org.processing -DartifactId=processing-video-jna -Dversion=1.0 -Dpackaging=jar -Dfile=video/jna.jar
# END VIDEO
