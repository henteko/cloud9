module.exports = function setup(options, imports, register) {
    imports["client-plugins"].register("ftp", __dirname, register);
};