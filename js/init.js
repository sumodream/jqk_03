//定义当前页面和最后页面
var now = {
    row: 1,
    col: 1
};
var last = {
    row: 0,
    col: 0
};
//定义常量 上右下左消失
const TOWORDS = {
    UP: 1,
    RIGHT: 2,
    DOWN: 3,
    LEFT: 4,
    FADEOUT: 5,
};
//初始动画
var isAnimating = false;
//定义动画页面
var pageAnimations = {
    //页面计数
    _page_count: 5,
    //页面动画时间
    _animation_time: 600,
    //动画方法
    doAnimate: function(towards) {
        //定义前一个页面和当前页面类
        var lastPage = ".page-" + last.row + "-" + last.col;
        var nowPage = ".page-" + now.row + "-" + now.col;
        //做判断 行驶的方向
        switch (towards) {
            case TOWORDS.UP:
                outClass = 'pt-page-moveToTop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case TOWORDS.RIGHT:
                outClass = 'pt-page-moveToRight';
                inClass = 'pt-page-moveFromLeft';
                break;
            case TOWORDS.DOWN:
                outClass = 'pt-page-moveToBottom';
                inClass = 'pt-page-moveFromTop';
                break;
            case TOWORDS.LEFT:
                outClass = 'pt-page-moveToLeft';
                inClass = 'pt-page-moveFromRight';
                break;
        }
        //动画开始运行
        isAnimating = true;
        //当前页面动画隐藏
        $(nowPage).removeClass("hide");
        //前一个页面动画
        $(lastPage).addClass(outClass);
        //当前页面动画
        $(nowPage).addClass(inClass);
        //设定时间执行方法
        setTimeout(function() {
            $(lastPage).removeClass('page-current');
            $(lastPage).removeClass(outClass);
            $(lastPage).addClass("hide");
            $(nowPage).addClass('page-current');
            $(nowPage).removeClass(inClass);
            isAnimating = false;
        }, this._animation_time);
    },
    pageUp2: function() {
        if (isAnimating)
            return;
        last.row = now.row;
        last.col = now.col;
        if (last.row != this._page_count) {
            now.row = last.row + 2;
            now.col = 1;
            this.doAnimate(TOWORDS.UP);
        }
    },
    pageUp: function() {
        if (isAnimating)
            return;
        last.row = now.row;
        last.col = now.col;
        if (last.row != this._page_count) {
            now.row = last.row + 1;
            now.col = 1;
            this.doAnimate(TOWORDS.UP);
        }
    },
    pageLeft: function() {
        if (isAnimating)
            return;
        last.row = now.row;
        last.col = now.col;
        if (last.row != this._page_count) {
            now.row = last.row + 1;
            now.col = 1;
            this.doAnimate(TOWORDS.LEFT);
        }
    },
    pageDown: function() {
        if (isAnimating)
            return;
        last.row = now.row;
        last.col = now.col;
        if (last.row != 1) {
            now.row = last.row - 1;
            now.col = 1;
            this.doAnimate(TOWORDS.DOWN);
        }
    },
    pageRight: function() {
        if (isAnimating)
            return;
        last.row = now.row;
        last.col = now.col;
        if (last.row != 1) {
            now.row = last.row - 1;
            now.col = 1;
            this.doAnimate(TOWORDS.RIGHT);
        }
    }
};
//自适应
function zoomResize() {
    var ratio = parseFloat(innerHeight / 1316);
    //  $(".zoom-page").css("transform", "scale(" + ratio + "," + ratio + ")");
    $(".zoom-page").css("-webkit-transform", "scale(" + ratio + "," + ratio + ")");


}
$(window).resize(function() {
    zoomResize();

});
$(document).ready(function() {
    zoomResize();
    //动画帧重写
    var k = innerHeight;
    var h = -innerHeight;
    var slide = document.getElementById('slide');
    slide.innerHTML = '@-webkit-keyframes moveToTop{100% {-webkit-transform: translateY(' + h + 'px);}}\n' + '@keyframes moveToTop {100% {-webkit-transform: translateY(' + h + 'px); transform: translateY(' + h + 'px);}}\n' + '@-webkit-keyframes moveFromBottom {0% { -webkit-transform: translateY(' + k + 'px);}}\n' + '@keyframes moveFromBottom {0% { -webkit-transform: translateY(' + k + 'px); transform: translateY(' + k + 'px); }}\n' + '@-webkit-keyframes moveFromTop {0% { -webkit-transform: translateY(' + h + 'px);}}\n' + '@keyframes moveFromTop {0% { -webkit-transform: translateY(' + h + 'px); transform: translateY(' + h + 'px);}}\n' + '@-webkit-keyframes moveToBottom {100% { -webkit-transform: translateY(' + k + 'px);}}\n' + '@keyframes moveToBottom {100% { -webkit-transform: translateY(' + k + 'px); transform: translateY(' + k + 'px);}}\n'
});
/* 按钮事件*/
$(document).ready(function() {
    $('.btp1').tap(function() {
        _czc.push(['_trackEvent', '点击', 'p1']);
        pageAnimations.pageUp();
        $('.p1zz ,.pwordzz ').show();
        $('.p1zz ,.pwordzz').tap(function() {
            $('.p1zz ,.pwordzz').hide();
        });

    });
    $('.reload').tap(function() {
        _czc.push(['_trackEvent', '点击', '再看一次']);
        location.reload();
    });
    $('.before').tap(function() {
        _czc.push(['_trackEvent', '点击', '往期']);
        setTimeout(function() {
            window.location.href = 'http://h5.whaledream.com/WChat_Whaledream/Jqk.html';
        }, 600);
    });
    $('.share').tap(function() {
        _czc.push(['_trackEvent', '点击', '分享']);
        $('.p5zz ,.shareto').show();
    });
    $('.shareto').tap(function() {
        $(this).hide();
        $('.shareimg').hide();
    });
});
/* 大事的介绍信息*/
$(document).ready(function() {
    $('.p2pic1').tap(function() {
        $('.pinfopic1 ,.pwordzz ,.p2p1bb').show();
        $('.pclose').tap(function() {
            $('.pinfo ,.pwordzz').hide();
        });
    });
    $('.p2pic2').tap(function() {
        $('.pinfopic2 ,.pwordzz ,.p2p2bb').show();
        $('.pclose').tap(function() {
            $('.pinfo ,.pwordzz').hide();
        });
    });
    $('.p2pic3').tap(function() {
        $('.pinfopic3 ,.pwordzz  ,.p2p3bb').show();
        $('.pclose').tap(function() {
            $('.pinfo ,.pwordzz').hide();
        });
    });
    $('.p3pic1').tap(function() {
        $('.pinfopic1 ,.pwordzz ,.p3p1bb').show();
        $('.pclose').tap(function() {
            $('.pinfo ,.pwordzz').hide();
        });
    });
    $('.p3pic2').tap(function() {
        $('.pinfopic2 ,.pwordzz ,.p3p2bb').show();
        $('.pclose').tap(function() {
            $('.pinfo ,.pwordzz').hide();
        });
    });
    $('.p3pic3').tap(function() {
        $('.pinfopic3 ,.pwordzz ,.p3p3bb').show();
        $('.pclose').tap(function() {
            $('.pinfo ,.pwordzz').hide();
        });
    });
    $('.p4pic1').tap(function() {
        $('.pinfopic1 ,.pwordzz ,.p4p1bb').show();
        $('.pclose').tap(function() {
            $('.pinfo ,.pwordzz').hide();
        });
    });
    $('.p4pic2').tap(function() {
        $('.pinfopic2 ,.pwordzz ,.p4p2bb').show();
        $('.pclose').tap(function() {
            $('.pinfo ,.pwordzz').hide();
        });
    });
    $('.p4pic3').tap(function() {
        $('.pinfopic3 ,.pwordzz ,.p4p3bb').show();
        $('.pclose').tap(function() {
            $('.pinfo ,.pwordzz').hide();
        });
    });
    $('.p4pic4').tap(function() {
        $('.pinfopic4 ,.pwordzz,.p4p4bb').show();
        $('.pclose').tap(function() {
            $('.pinfo ,.pwordzz').hide();
        });
    });
});
/* 选中图片进入下一页*/
var pic1 = 0,
    k1 = 1;

function initBtn1() {
    $('.addpic1').tap(function() {
        if ($(this).find('.selected').hasClass('hide')) {
            $(this).find('.selected').removeClass('hide');
            $(this).find('.unselect').addClass('hide');
            pic1 += 1;
            $('#tips1').attr('src', 'img/' + pic1 + '-3.png');
        }
        refreshpic1();
    });
}

function refreshpic1() {
    if (pic1 >= 3) {
        k1 = 2;
    }
}
$(document).ready(function() {
    initBtn1();
    $('.pclose1').tap(function() {
        if (k1 == 2) {
            $('.pinfo').hide();
            pageAnimations.pageUp();
        };
    });
});
var pic2 = 0;
var k2 = 1;

function initBtn2() {
    $('.addpic2').tap(function() {
        if ($(this).find('.selected').eq(0).hasClass('hide')) {
            $(this).find('.selected').removeClass('hide');
            $(this).find('.unselect').addClass('hide');
            pic2 += 1;
            $('#tips2').attr('src', 'img/' + pic2 + '-3.png');
        }
        refreshpic2();
    });
}

function refreshpic2() {
    if (pic2 >= 3) {
        k2 = 2;
    }
}
$(document).ready(function() {
    initBtn2();
    $('.pclose2').tap(function() {
        if (k2 == 2) {
            $('.pinfo').hide();
            pageAnimations.pageUp();
        };
    });
});
var pic3 = 0;
var k3 = 1;

function initBtn3() {
    $('.addpic3').tap(function() {
        if ($(this).find('.selected').eq(0).hasClass('hide')) {
            $(this).find('.selected').removeClass('hide');
            $(this).find('.unselect').addClass('hide');
            pic3 += 1;
            $('#tips3').attr('src', 'img/' + pic3 + '-4.png');
        }
        refreshpic3();
    });
}

function refreshpic3() {
    if (pic3 >= 4) {
        k3 = 3;
    }
}
$(document).ready(function() {
    initBtn3();
    $('.pclose3').tap(function() {
        if (k3 == 3) {
            $('.pinfo').hide();
            pageAnimations.pageUp();
        };
    });
});