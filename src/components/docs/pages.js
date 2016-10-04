const removeYaml = (content) => {
  if (content.match(/^---\n/g)
    && content.match(/---\n/g).length >= 2) {
    return content.substring(
      content.indexOf('---\n', 1) + 3,
      content.length
    );
  } else return content;
}

const pages = {
  docs: {
    'main': [
      removeYaml(require('raw!../../pages/docs/main.md')),
      require('markdown-with-front-matter!../../pages/docs/main.md')
    ]
  }
}

export {
  pages as default
};
