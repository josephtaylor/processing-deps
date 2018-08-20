# Sweep for Processing [![Build Status](https://travis-ci.org/cansik/sweep-processing.svg?branch=master)](https://travis-ci.org/cansik/sweep-processing) [![Build status](https://ci.appveyor.com/api/projects/status/2w9xm1dbafbi7xc0?svg=true)](https://ci.appveyor.com/project/cansik/sweep-processing) [![codebeat badge](https://codebeat.co/badges/3d8634b7-84eb-410c-b92b-24bf6875d8ef)](https://codebeat.co/projects/github-com-cansik-sweep-processing-master)
Use the Scanse Sweep LIDAR with processing.

## Introduction

**Sweep for Processing** is a port of the **[Scanse](http://scanse.io/) [Sweep LIDAR](https://github.com/scanse/sweep-sdk)** library for processing. It gives you full access to the C API and adds some processing specfic methods to it.

Currently it is still under development and **ONLY** tested on MacOS.

![LIDAR Example](readme/lidar-example.png)

*Example of the LIDAR with FX2D*

## Example
### Basic
To get sample data from the LIDAR sensor, you have to create a new `SweepSensor` and call the `start` method. The start method needs the path to the Sweep COM port.

```java
import ch.bildspur.sweep.*;

SweepSensor sweep;

void setup()
{
  size(600, 300, FX2D);

  sweep = new SweepSensor(this);
  sweep.start("/dev/tty.usbserial-DO004HM4");
}
```

In draw you then just have to read the new samples from the device.

```java
void draw()
{
	// do your stuff
	
	// read samples
	List<SensorSample> samples = sweep.getSamples()
	
	// do drawing
}
```

It is recommended to save the reference to the list of samples in a own variable and only use `getSamples()` once in a draw loop. Otherwise it is not guaranteed, that the samples are from the same scan (Concurrency). 

*Based on [BasicExample](examples/BasicExample/BasicExample.pde)*

### Asynchronous
With version `0.3` it is possible to start the device asynchronous and set the set the **motor speed** and **sample rate** through the constructor (thanks to [@felixerdy](https://github.com/felixerdy)).


```java
import ch.bildspur.sweep.*;

SweepSensor sweep;

void setup()
{
  size(600, 300, FX2D);

  sweep = new SweepSensor(this);
  sweep.startAsync("/dev/tty.usbserial-DO004HM4", 5, 500);
}
```

It is recommended to use this method if the processing main thread should not be blocked by the start of the sweep device.

*Based on [AsyncExample](examples/AsyncExample/AsyncExample.pde)*
