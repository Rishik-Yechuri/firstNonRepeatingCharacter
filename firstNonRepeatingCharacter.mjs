import readline from 'readline'
var input = ""
var questionToAsk = ""
var r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
const question1 = () => {
    return new Promise((resolve, reject) => {
        r1.question(questionToAsk, (answer) => {
            input = answer
            resolve()
        })
    })
}
const main = async () => {
    await question1()
    var stringToAnalyze = input
    var indexOfFirstSingleLetter = findNextNonRepeated(stringToAnalyze,0)
    console.log(indexOfFirstSingleLetter)
    r1.close()
}
main()
function findNextNonRepeated(letterList,currentLetterIndex) {
    var startingIndex = currentLetterIndex
    var keepRunning = true
    var pastLetter = letterList.charAt(currentLetterIndex)
    var indexOfSingleLetter = -1;
    //currentLetterIndex+=1
    while (currentLetterIndex < letterList.length && keepRunning){
        if(currentLetterIndex === 0){
            if(letterList.charAt(currentLetterIndex) !== letterList.charAt(currentLetterIndex + 1)){
                indexOfSingleLetter = 0
                keepRunning = false
            }
        }
        console.log("Here 1")
        console.log("Current Index:" + currentLetterIndex)
        console.log(letterList.charAt(currentLetterIndex))
        console.log(pastLetter)
        if(letterList.charAt(currentLetterIndex) !== pastLetter){
            console.log("Here 2")
            if(letterList.charAt(currentLetterIndex) !== letterList.charAt(currentLetterIndex+1)){
                console.log("Here 3")
                indexOfSingleLetter = currentLetterIndex
                keepRunning = false
                console.log("Here 4")
            }
        }
        pastLetter = letterList.charAt(currentLetterIndex)
        currentLetterIndex++
    }
    console.log("Here 5")
    /*if(startingIndex === indexOfSingleLetter){
        return -1
    }*/
    return indexOfSingleLetter
}