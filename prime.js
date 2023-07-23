    function isPrime(num) {
        for (let i = 2; i * i <= num; i++)
            if (num % i === 0)
                return false;
        return (num > 1) ? `${num} Number is prime` : `Number is not prime`;
    }

    console.log(isPrime(5));