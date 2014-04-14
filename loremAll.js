$(function() {
	var para1 = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, molestiae, minus nihil sunt natus officia sit fugiat laudantium sint minima in quas pariatur nesciunt. Eveniet, debitis fuga deleniti consequatur dolorem.",
				 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, suscipit, nemo in autem excepturi rem minima ea nesciunt saepe perferendis tempora quod sit dolorum ducimus cupiditate blanditiis exercitationem earum dignissimos!",
				 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, officiis, ex, veritatis, aperiam consequuntur illo animi quae vero a dicta culpa rerum provident ad. Dolor, totam veniam provident similique officiis!",
				 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, natus architecto hic aspernatur quo! Reiciendis, fuga, praesentium, dicta sapiente maiores sint fugiat tenetur commodi illo recusandae repudiandae soluta alias eum.",
				 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, labore, debitis consequuntur explicabo obcaecati ipsam ea incidunt amet sint eos possimus nemo quaerat id delectus nam mollitia tenetur quam voluptate.",
				 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, veniam, fugiat, et, asperiores provident ipsam atque quis ex officia libero ea possimus pariatur eveniet mollitia distinctio consectetur nulla saepe corporis."];
	var heading1 = "Heading One";
	var heading2 = "Heading Two";
	var heading3 = "Heading Three";
	var heading4 = "Heading Four";
	var heading5 = "Heading Five";
	var heading6 = "Heading Six";

	$("p").each(function(index) {
	  if($(this).html()==''){
	  	var n =(0 + Math.floor(Math.random() * 6));
	  	$(this).html(para1[n]);
	  }
	});
	$("h1").each(function(index) {
	  if($(this).html()==''){
	  	$(this).html(heading1);
	  }
	});
	$("h2").each(function(index) {
	  if($(this).html()==''){
	  	$(this).html(heading2);
	  }
	});
	$("h3").each(function(index) {
	  if($(this).html()==''){
	  	$(this).html(heading3);
	  }
	});
	$("h4").each(function(index) {
	  if($(this).html()==''){
	  	$(this).html(heading4);
	  }
	});
	$("h5").each(function(index) {
	  if($(this).html()==''){
	  	$(this).html(heading5);
	  }
	});
	$("h5").each(function(index) {
	  if($(this).html()==''){
	  	$(this).html(heading5);
	  }
	});
	$("img").each(function(index) {
	  if($(this).attr('src') == ''){
	  	var n =(1000 + Math.floor(Math.random() * 200));
	  	$(this).attr({src: "http://placekitten.com/"+n+"/"+n});
	  }
	});
	$("li").each(function(index) {
	  if($(this).html()==''){
	  	$(this).html("List Item "+ index);
	  }
	});
	$("td").each(function(index) {
	  if($(this).html()==''){
	  	$(this).html("Cell "+ index);
	  }
	});
});
