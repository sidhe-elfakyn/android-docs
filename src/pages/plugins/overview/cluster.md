---
title: "Marker cluster"
description: "Mapbox Android Marker Cluster Plugin"
sideNavSections:
  - title: "Using the marker cluster plugin"
  
---

# Marker cluster

The marker cluster plugin adds 

## Using the marker cluster plugin

The marker cluster plugin requires no additional permissions and is initialized by passing in both the activity context and a `mapboxMap` object. 

```java
clusterManagerPlugin = new ClusterManagerPlugin<>(this, mapboxMap);
```

The location and number of markers is largely dependent on the map camera position, which is why the easiest way to use the plugin is to pass the plugin object into the `addOnCameraIdleListener()` method.

```java
mapboxMap.addOnCameraIdleListener(clusterManagerPlugin);
```

The one other method that you should know about is `addItems()`. Adding items to the plugin allows the marker clsuter plugin to handle the rest 

```java
  private void addItemsToClusterPlugin(int rawResourceFile) throws JSONException {
    InputStream inputStream = getResources().openRawResource(rawResourceFile);
    List<MyItem> items = new MyItemReader().read(inputStream);

    clusterManagerPlugin.addItems(items);
  }
```

