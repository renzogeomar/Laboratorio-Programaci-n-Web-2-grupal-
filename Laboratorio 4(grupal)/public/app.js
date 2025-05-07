function loadFile(name) {
    fetch(`/api/file/${name}`)
      .then(res => res.json())
      .then(data => {
        const html = marked.parse(data.content);
        document.getElementById('file-content').innerHTML = html;
      });
  }
  