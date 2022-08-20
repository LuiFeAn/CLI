const program = require('commander');
const open = require("./open");

program
    .command('handle')
    .action((env) => {
        switch(env){
            case 'work':
                open.OpenVsCode({
                    folders:['PMPA-APP','PMPA-API'],
                    quanty:2
                });
            break;   
        }
    });

program.parse(process.argv);

