var aspectRatio = 2.5; //Width to Height!!!
    var imageWidth;
    var imageHeight;

    //bind the window resize event to the method - 
    //change in carousel width is only triggered when size of viewport changes
    $(window).on("resize", methodToFixLayout);

    //updates the carousel width when the window is resized
    function methodToFixLayout(e){

        imageWidth = carousel.width();
        console.log("");
        console.log("Method width" + imageWidth);
        console.log("");

        imageHeight = imageWidth / aspectRatio;

        carouselContainer.height(imageHeight);    
        carousel.height(imageHeight);
        carouselPic.height(imageHeight);

         //solve the carousel glitch for small viewports - delete the carousel
        windowWidth = $(window).width();
        if (windowWidth < 840){
            carousel.hide();
            $("#side-navbar").hide();
        } else {
            carousel.show();
            $("#side-navbar").show();
        }



    }