This is a basic example of using `node-canvas` version 2.0.0-alpha that exhibits a memory leak.
It is an express server that returns a 1200*600-px `png` image for every request at
localhost:3000. Before responding with an image, it also logs the memory usage of the node process.

Try sending multiple requests to the server, e.g. with the following line of Bash:

```
for ((x = 0; x <= 1000; x++ )); do time curl -s -I -XGET http://localhost:3000/; done
```

and observe how the `rss` portion of memory usage is steadily increasing.


For comparison, try the same multiple requests against the server that [uses the 1.x
branch of node canvas](https://github.com/azangru/node-canvas-testing/tree/canvas-v1).
There, the `rss` portion of memory remains stable.
