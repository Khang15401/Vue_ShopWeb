const config = {
    app: {
        port: process.env.PORT || 6900,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb://localhost:27017/Shop"
    }
};

module.exports = config;