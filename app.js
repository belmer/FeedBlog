$(function(){

	var feed_ctr=0;
	$("#feed-container").feeds({

		feeds:{
			webappers:'http://feeds.feedburner.com/Webappers',
			verge:'http://www.theverge.com/rss/full.xml',
			gizmodo:'http://feeds.gawker.com/gizmodo/vip',
			engadget:'http://www.engadget.com/rss.xml'
		},
		max:2,
		entryTemplate:'rssTtemplate',
		onComplete:function(entries){
			console.log($("#feedForm").attr('d'));
		}
	});


});