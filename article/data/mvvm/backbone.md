

------------------------------------------------
### Backbone的MVVM扩展  (初步选定  backbone.stickit 作为backbone的扩展  @2015.04.17)

- [Backbone.stickit](https://github.com/NYTimes/backbone.stickit)
- [knockback](http://kmalakoff.github.io/knockback/)
- [Backbone-relational](https://github.com/PaulUithol/Backbone-relational)
- Backbone.ModelBinder


#### 资料


- http://jsfiddle.net/niki4810/yQjPD/

- http://thinkingonthinking.com/two-way-databinding-with-stickit/
- [javascript类库资源](http://www.jsdb.io/)

- http://fairwaytech.com/2014/04/cascading-selects-with-backbone-js-stickit-and-select2/

- http://www.tuicool.com/articles/JFFrUv

- http://victorsavkin.com/post/65519559752/contrasting-backbone-and-angular




- http://pelebyte.net/blog/2013/08/12/angularjs-from-the-perspective-of-a-backbone-convert/


####  Backbone-Model 缓存策略

- 通过参数比对 postParam == prePost ,且缓存存在，则拿缓存，否则直接ajax去取
- 拿缓存之后，可以根据需求，立刻去拿数据，判断是否要更新，有更新则update缓存，二次更新ui
- 缓存机制： 指定过期时间，指定倒计时结束更新，读取计数，
- 

model的缓存，是在存在自身还是在全局缓存？