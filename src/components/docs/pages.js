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
    'getting-started': [
      removeYaml(require('raw!../../pages/docs/getting-started.md')),
      require('markdown-with-front-matter!../../pages/docs/getting-started.md')
    ],
    'newpage': [
      removeYaml(require('raw!../../pages/docs/newpage.md')),
      require('markdown-with-front-matter!../../pages/docs/newpage.md')
    ]
  }
}

export {
  pages as default
};
