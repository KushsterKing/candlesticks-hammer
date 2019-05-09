import childProcess from "child_process";

const exec = childProcess.exec;

export default () => {
    const ls = exec( 'json2csv -i outputData.json -f date,high,low,close,open -o out.csv', (error, stdout, stdin) => {
        console.log( `stdout: ${stdout}` );
        console.log( `stderr: ${stdin}` );
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });

    ls.on( 'close', code => {
        console.log( `child process exited with code ${code}` );
    } );
};
