var md = require('discount'),
  extend = hexo.extend;

var markdown = function(file, content){
  return md.parse(content, md.flags.extraFootnote);
};

extend.renderer.register('md', 'html', markdown, true);
extend.renderer.register('markdown', 'html', markdown, true);
extend.renderer.register('mkd', 'html', markdown, true);
extend.renderer.register('mkdn', 'html', markdown, true);
extend.renderer.register('mdwn', 'html', markdown, true);
extend.renderer.register('mdtxt', 'html', markdown, true);
extend.renderer.register('mdtext', 'html', markdown, true);