//process.stdout.write("Hello");
//process.stdout.write("world \n \n \n");

//standard output
const questions=["What is your name? ",
                 "What would you do",
                "What is your preffered Programming"];

                const ask=(i=0)=>{

                    process.stdout.write(`\n \n \n ${questions[i]}`);
                    process.stdout.write('>');
                }

ask();
//standard input

           const answers=[];

            process.stdin.on('data',data=>{

                answers.push(data.toString().trim());
    

                if(answers.length<questions.length){
                    ask(answers.length);

                }

                else{
                process.exit();
                }
                
            });

            process.on('exit',()=>{

            const[name,activity,lang]=answers;
            console.log(`
            
            Thankyou for your answers


            Go${activity}& ${name} You can write ${lang} code later!!!           
            
             } `);

            })










                