import { Component } from "@angular/core";

@Component({
    selector: 'app-calc',
    templateUrl: './calc.component.html',
    styleUrls: ['./calc.component.css']
})
export class CalcComponent {


    resultCalc = [0, 0, 0, 0, 0, 0]
    
    clickBut(km:any, age:any, weight:any){
        this.resultCalc = [0, 0, 0, 0, 0, 0]
        let maxWeight = [20, 50, 60]
        let idList = ['ekoAir','advanAir','luxAir','ekoRgd','advanRgd','luxRgd']
        let counter = 0
        let check = this.resultCalc
        function showPrice(i:number) {
            let elem = document.getElementById(idList[i])
            let x = check[i]
            if (x > 0){
                elem?.classList.remove('hidden')
                elem?.classList.add('visible')
                i++
                counter = i
                console.log(counter)
                return counter
            } else {
                function checkClass() {
                    let a = elem?.classList.contains('visible')
                    if (a == true){
                        elem?.classList.remove('visible')
                        elem?.classList.add('hidden')
                        i++
                        counter = i
                        return counter
                    }else {
                        i++
                        counter = i
                        return counter
                    }
                }   
                checkClass()
                console.log(counter)
                counter = i
                return counter
            }
            
        }
        
        if (weight <= maxWeight[0] && weight >= 6){
            this.resultCalc[0] = 4 * km + 4000
            showPrice(counter)
            
        } else if (weight <= 5){
            this.resultCalc[0] = 4 * km
            showPrice(counter)
           
        } else {
            showPrice(counter)
        }

        if(weight <= maxWeight[1] && weight >= 21 && age <= 6){
            this.resultCalc[1] = 8 * km - (8 * km)*0.3 + 5000
            showPrice(counter)
        }else if(weight <= maxWeight[1] && weight <= 20 && age <= 6){
            this.resultCalc[1] = 8 * km - (8 * km)*0.3
            showPrice(counter)
        }else if(weight <= maxWeight[1] && weight >= 21 && age >= 7){
            this.resultCalc[1] = 8 * km + 5000
            showPrice(counter)
        }else if(weight <= maxWeight[1] && weight <= 20 && age >= 7){
            this.resultCalc[1] = 8 * km
            showPrice(counter)
        }else {
            showPrice(counter)
        }

        if(weight <= maxWeight[1] && age <= 15){
            this.resultCalc[2] = 15 * km - (15*km)*0.3
            showPrice(counter)
        } else if(weight <= maxWeight[1] && age >= 16){
            this.resultCalc[2] = 15 * km
            showPrice(counter)
        } else{
            showPrice(counter)
        }
        
        if(weight <= maxWeight[1] && weight >= 16 && age <= 4){
            this.resultCalc[3] = 0.5 * km - (0.5*km)*0.5 + 50 * weight
            showPrice(counter)
        } else if (weight <= maxWeight[1] && weight >= 16 && age >= 5){
            this.resultCalc[3] = 0.5 * km + 50 * weight
            showPrice(counter)
        } else if(weight <= maxWeight[1] && weight <= 15 && age <= 4){
            this.resultCalc[3] = 0.5 * km - (0.5*km)*0.5
            showPrice(counter)
        } else if(weight <= maxWeight[1] && weight <= 15 && age >= 5){
            this.resultCalc[3] = 0.5 * km
            showPrice(counter)
        } else{
            showPrice(counter)
        }

        if(weight <= maxWeight[2] && weight >= 21 && age <= 7){
            this.resultCalc[4] = 2 * km - (0.5*km)*0.3 + 50 * weight
            showPrice(counter)
        } else if (weight <= maxWeight[2] && weight >= 21 && age >= 8){
            this.resultCalc[4] = 2 * km + 50 * weight
            showPrice(counter)
        } else if(weight <= maxWeight[2] && weight <= 20 && age <= 7){
            this.resultCalc[4] = 2 * km - (0.5*km)*0.3
            showPrice(counter)
        } else if(weight <= maxWeight[2] && weight <= 20 && age >= 8){
            this.resultCalc[4] = 2 * km
            showPrice(counter)
        } else{
            showPrice(counter)
        }

        if(weight <= maxWeight[2] && age <= 15){
            this.resultCalc[5] = 4 * km - (4 * km)*0.2
            showPrice(counter)
        } else if(weight <= maxWeight[2] && age >= 16){
            this.resultCalc[5] = 4 * km
            showPrice(counter)
        } else{
            showPrice(counter)
        }

        console.log(this.resultCalc)
        return this.resultCalc
    }
    
}