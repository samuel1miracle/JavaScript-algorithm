
//ANSWER TO QUESTION 1

//to remove duplicates from a given array

    function removeDup(arr){
        let newArr = [];
        for(let i = 0; i<arr.length;i++){
            let val = arr[i]
            if(newArr.indexOf(val)=== -1){
                newArr.push(val);
            }
        }
        return newArr;
    }
    let arrays = [2,4,5,2,6,3,5]
    console.table(removeDup(arrays));




    //ANSWER TO NUMBER 2

    //To bring out the char sets that appears frequently in a given string

    function frequentChar(str) {
        const charHolder = str
                            
                            .split('')
    .reduce((ac,a) => (ac[a] = ac[a] + 1 || 1, ac), {});
      
        let max = Math.max(...Object.values(charHolder));
      
 return Object.entries(charHolder).reduce((ac,[k,v]) =>v === max ? ac + k : ac, '');
        
      }
//console.log the function + the given string      
console.log('The most frequent char is: ' + frequentChar("look"))




// ANSWER TO NUMBER 3


//to return the second smallest and second largest numbers in an array

let arr = [ 2,3,4,9,7 ];
		arr.sort((a,b) => a-b);

//Assign the second smallest array item        	
const secondSmallest = arr[1];

		arr.sort((x,y) => x-y);

//Assign the second biggest array item        
		const secondBiggest = arr[3];
		console.log('Second smallest and second largest num: ' +secondSmallest, secondBiggest);
