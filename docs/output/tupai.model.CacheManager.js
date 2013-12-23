Ext.data.JsonP.tupai_model_CacheManager({"tagname":"class","name":"tupai.model.CacheManager","autodetected":{},"files":[{"filename":"CacheManager.js","href":"CacheManager.html#tupai-model-CacheManager"}],"author":[{"tagname":"author","name":"","email":"a href='bocelli.hu@gmail.com'"}],"docauthor":[{"tagname":"docauthor","name":"","email":"a href='bocelli.hu@gmail.com'"}],"since":"tupai.js 0.1","members":[{"name":"cacheIterator","tagname":"method","owner":"tupai.model.CacheManager","id":"method-cacheIterator","meta":{}},{"name":"createCache","tagname":"method","owner":"tupai.model.CacheManager","id":"method-createCache","meta":{}},{"name":"get","tagname":"method","owner":"tupai.model.CacheManager","id":"method-get","meta":{}},{"name":"getCache","tagname":"method","owner":"tupai.model.CacheManager","id":"method-getCache","meta":{}},{"name":"getCacheNames","tagname":"method","owner":"tupai.model.CacheManager","id":"method-getCacheNames","meta":{}},{"name":"initialize","tagname":"method","owner":"tupai.model.CacheManager","id":"method-initialize","meta":{}},{"name":"iterator","tagname":"method","owner":"tupai.model.CacheManager","id":"method-iterator","meta":{}},{"name":"notifyChanged","tagname":"method","owner":"tupai.model.CacheManager","id":"method-notifyChanged","meta":{}},{"name":"notifyGC","tagname":"method","owner":"tupai.model.CacheManager","id":"method-notifyGC","meta":{}},{"name":"registerObserver","tagname":"method","owner":"tupai.model.CacheManager","id":"method-registerObserver","meta":{}},{"name":"removeCache","tagname":"method","owner":"tupai.model.CacheManager","id":"method-removeCache","meta":{}},{"name":"size","tagname":"method","owner":"tupai.model.CacheManager","id":"method-size","meta":{}},{"name":"unRegisterObserver","tagname":"method","owner":"tupai.model.CacheManager","id":"method-unRegisterObserver","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-tupai.model.CacheManager","short_doc":"bocelli.hu\nbocelli.hu\n\nexample\n\nRootViewController.js\n\n// RootViewController.js\nPackage('demo')\n.use('tupai.Applicati...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/CacheManager.html#tupai-model-CacheManager' target='_blank'>CacheManager.js</a></div></pre><div class='doc-contents'><p>bocelli.hu\nbocelli.hu</p>\n\n<h3>example</h3>\n\n<h4>RootViewController.js</h4>\n\n<pre class='inline-example '><code>// RootViewController.js\nPackage('demo')\n.use('<a href=\"#!/api/tupai.Application\" rel=\"tupai.Application\" class=\"docClass\">tupai.Application</a>')\n.use('<a href=\"#!/api/tupai.ui.View\" rel=\"tupai.ui.View\" class=\"docClass\">tupai.ui.View</a>')\n.use('<a href=\"#!/api/tupai.ViewController\" rel=\"tupai.ViewController\" class=\"docClass\">tupai.ViewController</a>')\n.define('RootViewController', function(cp) { return cp.ViewController.extend({\n    viewInit: function() {\n        this._cacheManager = cp.Application.instance.getCacheManager();\n        var contentView = new cp.View();\n        this.setContentView(contentView);\n    },\n    viewDidLoad: function() {\n        this._cacheManager.registerObserver('hashCache', this);\n        this._cacheManager.registerObserver('queueCache', this);\n\n        var cache = this._cacheManager.getCache('hashCache');\n        cache.push({id: 'key1'});\n        cache.end();\n\n        var cache = this._cacheManager.getCache('queueCache');\n        cache.push({id: 'key1'});\n        cache.end();\n    },\n    viewDidUnload: function() {\n        this._cacheManager.unRegisterObserver('hashCache', this);\n    },\n    didCacheChanged: function(e) {\n        logOnBody('didCacheChanged: ' + JSON.stringify(e));\n\n        var d;\n        if(e.name === 'queueCache') {\n            d = this._cacheManager.getCache('queueCache').get(0);\n        } else {\n            d = this._cacheManager.getCache('hashCache').get('key1');\n        }\n        logOnBody(\"cacheData: \" + JSON.stringify(d));\n    }\n});});\n\n// app.js\nPackage('demo')\n.use('<a href=\"#!/api/tupai.Application\" rel=\"tupai.Application\" class=\"docClass\">tupai.Application</a>')\n.use('demo.RootViewController')\n.run(function(cp) {\n    var cacheManager = {\n        hashCache: {\n            type: 'hash', // default for queue\n            config: {\n                memCache: {\n                    limit: 100\n                }\n            }\n        },\n        queueCache: {\n            config: {\n                memCache: {\n                    limit: 100\n                }\n            }\n        }\n    };\n    var app = new cp.Application({\n        window: {\n            routes: {\n                '/root'    : cp.RootViewController,\n            }\n        },\n        cacheManager: cacheManager\n    });\n    app.show('/root');\n});\n</code></pre>\n        <p>Available since: <b>tupai.js 0.1</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-cacheIterator' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-cacheIterator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-cacheIterator' class='name expandable'>cacheIterator</a>( <span class='pre'>callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>iterate cache ...</div><div class='long'><p>iterate cache</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-createCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-createCache' class='name expandable'>createCache</a>( <span class='pre'>name, cacheConfig</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>create cache By config ...</div><div class='long'><p>create cache By config</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>cacheConfig</span> : Object<div class='sub-desc'><h3>cacheConfig example</h3>\n\n<pre><code>{\n    timeline: {\n        type: 'hash', // queue or hash, default is queue\n        classzz: 'cache.Cache', // cache class path\n        config: {\n            memCache: {\n                limit: 100,\n                overflowRemoveSize: 20\n            },\n            localStorage: {},\n            sesseionStorage: {}\n        },\n        ... // other custom attributes\n    },\n    ...\n}\n</code></pre>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-get' class='name expandable'>get</a>( <span class='pre'>name, id</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>get the cache item by id (HashCache) or index (QueueCache) ...</div><div class='long'><p>get the cache item by id (HashCache) or index (QueueCache)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'><p>/index</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>cached item</p>\n</div></li></ul></div></div></div><div id='method-getCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-getCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-getCache' class='name expandable'>getCache</a>( <span class='pre'>name</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>get cache object ...</div><div class='long'><p>get cache object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>cache object</p>\n</div></li></ul></div></div></div><div id='method-getCacheNames' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-getCacheNames' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-getCacheNames' class='name expandable'>getCacheNames</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>get all caches name array ...</div><div class='long'><p>get all caches name array</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>cache names</p>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>config</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>initialize ...</div><div class='long'><p>initialize</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>see <a href=\"#!/api/tupai.model.CacheManager-method-createCache\" rel=\"tupai.model.CacheManager-method-createCache\" class=\"docClass\">createCache</a></p>\n</div></li></ul></div></div></div><div id='method-iterator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-iterator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-iterator' class='name expandable'>iterator</a>( <span class='pre'>name, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>iterate the cache items ...</div><div class='long'><p>iterate the cache items</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-notifyChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-notifyChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-notifyChanged' class='name expandable'>notifyChanged</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>notify cache has been changed ...</div><div class='long'><p>notify cache has been changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-notifyGC' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-notifyGC' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-notifyGC' class='name expandable'>notifyGC</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>notify cache has been resized by gc ...</div><div class='long'><p>notify cache has been resized by gc</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-registerObserver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-registerObserver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-registerObserver' class='name expandable'>registerObserver</a>( <span class='pre'>name, observer, [first]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>register an observer ...</div><div class='long'><p>register an observer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>cache name to observer</p>\n</div></li><li><span class='pre'>observer</span> : Object<div class='sub-desc'><p>observer instance</p>\n<ul><li><span class='pre'>didCacheChanged</span> : Object (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>didCacheGC</span> : Object (optional)<div class='sub-desc'><h3>observer methods parameter</h3>\n\n<pre><code>{\n    name: cache name\n    options: some custom options\n}\n</code></pre>\n</div></li></ul></div></li><li><span class='pre'>first</span> : boolean (optional)<div class='sub-desc'><p>add listener to the first of events pool</p>\n<p>Defaults to: <code>true</code></p></div></li></ul></div></div></div><div id='method-removeCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-removeCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-removeCache' class='name expandable'>removeCache</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>remove a cache by name ...</div><div class='long'><p>remove a cache by name</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-size' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-size' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-size' class='name expandable'>size</a>( <span class='pre'>name</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>get the cache items count ...</div><div class='long'><p>get the cache items count</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>cached items count</p>\n</div></li></ul></div></div></div><div id='method-unRegisterObserver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.CacheManager'>tupai.model.CacheManager</span><br/><a href='source/CacheManager.html#tupai-model-CacheManager-method-unRegisterObserver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.CacheManager-method-unRegisterObserver' class='name expandable'>unRegisterObserver</a>( <span class='pre'>name, observer</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>delete an observer ...</div><div class='long'><p>delete an observer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>cache name to observer</p>\n</div></li><li><span class='pre'>observer</span> : Object<div class='sub-desc'><p>observer instance</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});