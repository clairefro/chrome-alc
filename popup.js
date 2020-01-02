chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  console.log(selection);
  const query = encodeURIComponent(selection[0] || 'space');
  document.querySelector('iframe').src = `https://eow.alc.co.jp/search?q=${query}&ref=sa`;
});
