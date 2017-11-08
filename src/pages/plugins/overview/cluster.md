---
title: "Marker cluster"
description: "Mapbox Android Marker Cluster Plugin"
sideNavSections:
  - title: "Add the marker cluster plugin"
  
---

# Marker cluster

The marker cluster plugin for 

## Add the marker cluster plugin

The marker cluster plugin requires no additional permissions and is initialized by passing in both the activity context and a `mapboxMap` object. 

```java
clusterManagerPlugin = new ClusterManagerPlugin<>(MarkerClustersPluginActivity.this, mapboxMap);
```

## Customization

While the building plugin provides default values which look good for most use cases, you might find yourself wanting to customize the look of the buildings to match a map style. Several APIs are available for changing building color, opacity, what zoom level buildings should start appearing, etc. The table below provides information on the current APIs useful for customization.

| API | Description |
| --- | --- |
| `setMinZoomLevel` | This is the minimum zoom level where buildings will start to show. useful to limit showing buildings at higher zoom levels. |
| `setColor` | Change the building color to any Android color int value. |
| `setOpacity` | Float value between 0.0 and 1.0 representing the opacity of the buildings. 1.0 being solid and 0.0 being invisible. |


