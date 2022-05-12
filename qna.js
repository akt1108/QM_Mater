            var word=text.split(/\r\n|\r|\n/);
            var question=[], a=[], b=[], c=[], d=[];
            for(i=0; i<word.length; i++){
                if(i%5===0){
                    question.push(word[i]);
                }else if(i%5===1){
                    a.push(word[i])
                }else if(i%5===2){
                    b.push(word[i])
                }else if(i%5===3){
                    c.push(word[i])
                }else if(i%5===4){
                    d.push(word[i])
                }
            }

            function displayQuestion(num){
                document.write("<div class=\"unit\"><div class=\"question\">"+question[num]+"</div><div id=\"a"+num+"\">"+a[num]+"</div><div id=\"b"+num+"\">"+b[num]+"</div><div id=\"c"+num+"\">"+c[num]+"</div><div id=\"d"+num+"\">"+d[num]+"</div></div>");
            }

            function addAnswerClass(num){
                if (answer[num]=="a"){
                    document.getElementById("a"+num).className += "answer"
                }else if(answer[num]=="b"){
                    document.getElementById("b"+num).className += "answer"
                }else if(answer[num]=="c"){
                    document.getElementById("c"+num).className += "answer"
                }else if(answer[num]=="d"){
                    document.getElementById("d"+num).className += "answer"
                }
            }

            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            
            function marking(num){
                document.getElementById("a"+num).addEventListener("click", markingA);
                document.getElementById("b"+num).addEventListener("click", markingB);
                document.getElementById("c"+num).addEventListener("click", markingC);
                document.getElementById("d"+num).addEventListener("click", markingD);
                document.getElementById("a"+num).style.marginTop="1.5rem";
                document.getElementById("b"+num).style.marginTop="1.5rem";
                document.getElementById("c"+num).style.marginTop="1.5rem";
                document.getElementById("d"+num).style.marginTop="1.5rem";
                document.getElementById("a"+num).style.marginBottom="1.5rem";
                document.getElementById("b"+num).style.marginBottom="1.5rem";
                document.getElementById("c"+num).style.marginBottom="1.5rem";
                document.getElementById("d"+num).style.marginBottom="1.5rem";
            }

            function markingA(){
                if (answer[num]=="a"){
                    document.getElementById("a"+num).className += "correct"
                }else if(answer[num]=="b"){
                    document.getElementById("a"+num).className += "wrong"
                    document.getElementById("b"+num).className += "answer"
                }else if(answer[num]=="c"){
                    document.getElementById("a"+num).className += "wrong"
                    document.getElementById("c"+num).className += "answer"
                }else if(answer[num]=="d"){
                    document.getElementById("a"+num).className += "wrong"
                    document.getElementById("d"+num).className += "answer"
                }
                document.getElementById("a"+num).removeEventListener("click", markingA);
                document.getElementById("b"+num).removeEventListener("click", markingB);
                document.getElementById("c"+num).removeEventListener("click", markingC);
                document.getElementById("d"+num).removeEventListener("click", markingD);
            }
            function markingB(){
                if (answer[num]=="a"){
                    document.getElementById("b"+num).className += "wrong"
                    document.getElementById("a"+num).className += "answer"
                }else if(answer[num]=="b"){
                    document.getElementById("b"+num).className += "correct"
                }else if(answer[num]=="c"){
                    document.getElementById("b"+num).className += "wrong"
                    document.getElementById("c"+num).className += "answer"
                }else if(answer[num]=="d"){
                    document.getElementById("b"+num).className += "wrong"
                    document.getElementById("d"+num).className += "answer"
                }
                document.getElementById("a"+num).removeEventListener("click", markingA);
                document.getElementById("b"+num).removeEventListener("click", markingB);
                document.getElementById("c"+num).removeEventListener("click", markingC);
                document.getElementById("d"+num).removeEventListener("click", markingD);
            }
            function markingC(){
                if (answer[num]=="a"){
                    document.getElementById("c"+num).className += "wrong"
                    document.getElementById("a"+num).className += "answer"
                }else if(answer[num]=="b"){
                    document.getElementById("c"+num).className += "wrong"
                    document.getElementById("b"+num).className += "answer"
                }else if(answer[num]=="c"){
                    document.getElementById("c"+num).className += "correct"
                }else if(answer[num]=="d"){
                    document.getElementById("c"+num).className += "wrong"
                    document.getElementById("d"+num).className += "answer"
                }
                document.getElementById("a"+num).removeEventListener("click", markingA);
                document.getElementById("b"+num).removeEventListener("click", markingB);
                document.getElementById("c"+num).removeEventListener("click", markingC);
                document.getElementById("d"+num).removeEventListener("click", markingD);
            }
            function markingD(){
                if (answer[num]=="a"){
                    document.getElementById("d"+num).className += "wrong"
                    document.getElementById("a"+num).className += "answer"
                }else if(answer[num]=="b"){
                    document.getElementById("d"+num).className += "wrong"
                    document.getElementById("b"+num).className += "answer"
                }else if(answer[num]=="c"){
                    document.getElementById("d"+num).className += "wrong"
                    document.getElementById("c"+num).className += "answer"
                }else if(answer[num]=="d"){
                    document.getElementById("d"+num).className += "correct"
                }
                document.getElementById("a"+num).removeEventListener("click", markingA);
                document.getElementById("b"+num).removeEventListener("click", markingB);
                document.getElementById("c"+num).removeEventListener("click", markingC);
                document.getElementById("d"+num).removeEventListener("click", markingD);
            }
