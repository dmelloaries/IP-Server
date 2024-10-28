const logger = (req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Response Time: ${duration}ms`);
    });

    next();
};

module.exports = logger;
