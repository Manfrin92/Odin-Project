function fibonacci (indexOfNumber) {
    if (indexOfNumber <= 0) {
        return false;
    } else {

        var sequence = [1,1];

        if (indexOfNumber == 1 || indexOfNumber == 2) {
            return 1;
        } else {
            for (let i = 2; i < indexOfNumber; i++) {

                sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2]);
            }
        }

        return sequence[sequence.length-1];

    }
}


