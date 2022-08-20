const homedir = require("os").homedir();
const shild = require("child_process");

class Open {

    OpenVsCode({folders,quanty}){
        for(let i = 0; i < quanty; i++){
            shild.exec(`code cd ${homedir}/Desktop/DGEC/${folders[i]}`);
        }
    }

}

module.exports = new Open();