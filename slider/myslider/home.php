<!DOCTYPE html>
<html>
  <head>
		<meta charset="utf-8">
		<title>Slider</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="stylesheet" type="text/css" href="css/style.css">

	  	<link rel="stylesheet" href="css/bootstrap.min.css">
	  	<script src="js/jquery.min.js"></script>
	  	<script src="js/bootstrap.min.js"></script>

	  	<link rel="stylesheet" type="text/css" href="css/vertical_menu.css">
	  	<script src="js/vertical_menu.js"></script>

	  	<script type="text/javascript">
			function senDataToMenu() {
			    document.getElementById('user_name').innerHTML = "Nguyễn Văn An";

               	var avata = document.createElement("img");
		      	avata.src = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p50x50/1780746_548421461924059_8071598285487857691_n.jpg?oh=832e8751a0774a68beb68b4885b28177&oe=55CB3B93&__gda__=1439916849_d88a46d02079b3712eb99538f63313b9";
		      	document.getElementById('avatar_photo').appendChild(avata);
			}
	  	</script>
  </head>

  <body>

 <!-- header menu -->
	<div class="headercontainer" style="z-index: 1000;">

		<div class="header clearfix">

			<span class="logo">Photo Slider</span>
			<div class="nav">
				<input id="toggle" type="checkbox">
				<label class="toggle" onclick="" for="toggle">
					<span class="icon-bar" style="top:7px;"></span>
					<span class="icon-bar" style="top:14px;"></span>
					<span class="icon-bar" style="top:21px;"></span>
				</label>
				<ul class="menu">
					<li>
						<a class="current" href="/facebookPhotoSlide">Trang Chủ</a>
					</li>
					<li>
						<a href="demos/">Mẫu</a>
					</li>
					<li>
						<a href="NewFeeds">Bản Tin</a>
					</li>
					<li>
						<a href="">My Sliders</a>
					</li>
					<li>
						<a href="about.html">Giới Thiệu</a>
					</li>
					<li>
						<a href="support.html">Trợ Giúp</a>
					</li>
					<li>
						<a href="">Đăng Xuất</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="headerspace"></div>


  	<div class="container-fluid">
  		<nav class="navbar navbar-inverse">
		   <div class="container">
		    <div>
		    	 <ul class="nav navbar-nav">
			        
			        <li class="active"><a href="#">Chọn Ảnh</a></li>
     				<li><a href="#">Tạo Hiệu Ứng</a></li>
			        <li><a href="#">Chèn Nhạc</a></li>
			        <li><a href="#">Hoàn Thành</a></li>
      </ul>
			        
      			</ul>
	      		<ul class="nav navbar-nav navbar-right">
		       		<li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span id = "user_name"></span></a>
		          		<ul class="dropdown-menu">
			           	 	<li><a href="thu_tuc/aupair_duc.html">Tài khoản của tôi</a></li>
			            	<li><a href="thu_tuc/aupair_phap.html">Đăng xuất</a></li>
		         		</ul>
		        	</li>
		       		 <li id = "avatar_photo"></li>
		      	</ul>
		    </div>
		  </div>
		</nav>
	</div>
	<script type="text/javascript">
		senDataToMenu();
	</script>

	<div class = "container-fluid">
		<div class="col-sm-12">
			<div id = "work_space"></div>
				<script>
					$("#work_space").load("step_import_image.html");
				</script>
		</div>
	</div>
</body>
</html>