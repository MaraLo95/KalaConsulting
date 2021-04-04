$(document).ready(function() {
    $("#panel-admin").css("display", "none");

    $('.open').click(function() {
        $("#panel-admin").animate({ width: 'toggle' }, 100);
    });

    if (!document.getElementById('wrapper').className && !localStorage.getItem("selectedColor")) {
        console.log('in if');
        document.getElementById('wrapper').classList.add('blue');
    } else {
        console.log('else');
        var colorClass = localStorage.getItem("selectedColor");
        document.getElementById('wrapper').classList.add(colorClass);
    }


    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

});


$(window).scroll(function() {

    if ($(this).scrollTop() > 50) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});


function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-plus fa-minus');
}

function mytheme(index) {
    switch (index) {
        case 0:
            changeColor('cyan');
            break;
        case 1:
            changeColor('orange');
            break;
        case 2:
            changeColor('lightgreen');
            break;
        case 3:
            changeColor('red');
            break;
        case 4:
            changeColor('green');
            break;
        case 5:
            changeColor('blue');
            break;
        default:
            changeColor('blue');
    }
    var selectedClass = document.getElementById('wrapper').className;
    localStorage.setItem("selectedColor", selectedClass);
}

function changeColor(color) {
    $('#wrapper').removeClass();
    $('#wrapper').addClass(color);
}


1
      $(document).ready(function() {
2
        $('.nav-tabs > li > a').click(function(event) {
3
          event.preventDefault(); //stop browser to take action for clicked anchor
4
          //get displaying tab content jQuery selector
5
          var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');
6
          //find actived navigation and remove 'active' css
7
          var actived_nav = $('.nav-tabs > li.active');
8
          actived_nav.removeClass('active');
9
          //add 'active' css into clicked navigation
10
          $(this).parents('li').addClass('active');
11
          //hide displaying tab content
12
          $(active_tab_selector).removeClass('active');
13
          $(active_tab_selector).addClass('hide');
14
          //show target tab content
15
          var target_tab_selector = $(this).attr('href');
16
          $(target_tab_selector).removeClass('hide');
17
          $(target_tab_selector).addClass('active');
18
        });
19
      });

 
     