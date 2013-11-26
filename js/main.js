if (window.matchMedia("screen and (min-width: 400px)").matches) {
  var scrollAmount = function() {
    var dfd = $.Deferred(),
        prev = pageYOffset;

    setTimeout(function() {
      dfd.resolve(pageYOffset - prev);
    }, 100);

    return dfd.promise();
  }

  var Section = function(el, minTop) {
    this.$el = $(el);
    this.height = this.$el.height();
    this.offset = this.$el.offset().top;
    this.minTop = minTop;
  }

  $(document).ready(function() {
    var mySections = [];
    var sections = $('section');
    for (var i = 0, len = sections.length; i < len; i++) {
      mySections.push(new Section(sections[i], i * 20));
    }

    $(window).on('scroll', function() {
      for (var i = 0, len = mySections.length; i < len; i++) {
        var section = mySections[i];
        if (pageYOffset + section.minTop >= section.offset) {
          section.$el
            .addClass('background')
            .removeAttr('style');
        }
      }

      scrollAmount().then(function(scrollDiff) {
        var myBackgrounds = [];
        for (var i = 0, len = mySections.length; i< len; i++) {
          if (mySections[i].$el.hasClass('background')) {
            myBackgrounds.push(mySections[i]);
          }
        }

        if (scrollDiff < 0 && myBackgrounds.length > 1) {
          var active = myBackgrounds[myBackgrounds.length - 1];
          if (pageYOffset + active.minTop <= active.offset) {
            active.$el
              .removeClass('background')
              .css({ top: pageYOffset + active.minTop + 'px' });
          }
        }
      });
    });
  });
}
