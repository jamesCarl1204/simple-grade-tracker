     (function() {
        const rawData = [
            {name: "carl", grade: 85},
            {name: "anna", grade: 92},
            {name :"ben", grade: 60},
            {name:"mia", grade: 45},
            {name:"leo", grade: 78}
        ]

        let student = " "

        for(let v in rawData){
            student += rawData[v].name + " ";
        }

        document.getElementById("outputStudent").innerHTML = student
    
        let average = 0

        for(let i in rawData) {
            average += rawData[i].grade
        }
        average /= 5

        document.getElementById("average").innerHTML = average

        function mycallback({grade}) {
            return grade >= 75 ? "passed" : "failed"
        }

         let result = Object.groupBy(rawData, mycallback)
        

         let passed = ""

         for(let x of result.passed){
            passed += x.name + " "
         }

         document.getElementById("output").innerHTML = passed
          
         let failed = ""

         for(let x of result.failed) {
            failed += x.name + " "
         }

        document.getElementById("outputFailed").innerHTML = failed
         
        })();

         function createTracker() {
            let access = 0
            return function add() {
                access++
                return "Grade checked " + access + (access > 1 ? " times" : " time")
            }
         }

         const tracker = createTracker()
         
         function checkGrades() {
           document.getElementById("check").innerHTML = tracker()
         }
        
        console.log()
        

        