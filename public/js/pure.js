(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=<APP_ID>&autoLogAppEvents=1';
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// mobile menu

let mobileMenu = document.querySelectorAll(".nav-mobile-menu");
let mainMenu = document.querySelectorAll(".navigation");
mobileMenu.forEach((item,index) => {
	item.addEventListener("click", function(){
		item.classList.toggle("active-menu");
	if(item.classList.contains("active-menu")){
		mainMenu[index].classList.add("active-menu");
	}else{
		mainMenu[index].classList.remove("active-menu");
	}
	})
});