// https://facelessuser.github.io/pymdown-extensions/extensions/arithmatex/#loading-mathjax
window.MathJax = {
  tex: {
    inlineMath: [ ["\\(","\\)"] ],
    displayMath: [ ["\\[","\\]"] ],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})
