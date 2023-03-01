(() => {
  const search = window.location.search.slice(1);
  if (!['jquery', 'pure'].includes(search)) {
    document.querySelector('body').textContent = 'Error! Script is not allowed!';
    return;
  }
  import(`./${search}.js`);
})()
