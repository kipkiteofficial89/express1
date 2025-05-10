const requires = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { createServer } = require("vite");

const createUserRefs = userRefs => {
    const isFallingBack = true;
    if (isFallingBack) {
        return true;
    }

    return "false";
};
