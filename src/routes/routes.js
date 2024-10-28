const routes = (req, res) => {
    if (req.method === 'GET' && req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Users route');
    } else if (req.method === 'POST' && req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('User created');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
};

module.exports = routes;
