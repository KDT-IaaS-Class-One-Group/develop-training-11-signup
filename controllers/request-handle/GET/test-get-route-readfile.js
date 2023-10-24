module.exports = (filePath, contentType, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    // **** error handling ****
    if (err) {
      console.log(err);
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('server error');
      return;
    }
    // **** normal handling ****
    res.writeHead(200, {'Content-Type': contentType});
    res.end(data);
  });
};
