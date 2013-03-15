$.ajaxPrefilter( function( options ) {
  if (options.url.indexOf('spec/') === 0) {
    options.url = "base/" + options.url;
  }
});