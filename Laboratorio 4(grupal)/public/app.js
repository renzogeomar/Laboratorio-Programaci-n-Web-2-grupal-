function loadFile(name) {
    fetch(`/api/file/${name}`)
      .then(res => res.json())
      .then(data => {
        const html = marked.parse(data.content);
        document.getElementById('file-content').innerHTML = html;
      });
  }
  function saveFile() {
    const name = document.getElementById('new-name').value;
    const content = document.getElementById('new-content').value;
  
    fetch('/api/file', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, content })
    })
    .then(res => res.json())
    .then(response => {
      if (response.success) {
        alert('Archivo guardado');
        fetchFiles();
      }
    });
  }