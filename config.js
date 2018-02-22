'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://jas:jas@ds143738.mlab.com:43738/jas-node-restaurants-app';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-restaurants-app';
exports.PORT = process.env.PORT || 8080;