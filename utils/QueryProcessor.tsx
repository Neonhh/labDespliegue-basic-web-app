import assert from 'assert';
export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  else if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "1810796" );
  }

  else if (query.toLowerCase().includes("name")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "Nestor" );
  }

  else if (query.toLowerCase().includes(" plus ")) {

    const numbers = query.match(/\d+/g);
      if (numbers && numbers.length === 2) {
        const sum = parseInt(numbers[0]) + parseInt(numbers[1]);
        return (sum.toString());
        }
  }

  else if (query.toLowerCase().includes(" max ")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 3) {
      const max = Math.max(parseInt(numbers[0]), parseInt(numbers[1]), parseInt(numbers[2]));
      return (max.toString());
    }
  }

  else if (query.toLowerCase().includes(" multiplied by ")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      const product = parseInt(numbers[0]) * parseInt(numbers[1]);
      return (product.toString());
    }
  }

  else if (query.toLowerCase().includes(" primes:")) {
    const numbers = query.match(/\d+/g);

    if (numbers) {
      const primes = numbers.filter((num) => {
        if (parseInt(num) <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(parseInt(num)); i++) {
          if (parseInt(num) % i === 0) {
            return false;
          }
        }
        return true;
      });
      return primes.join(", ");
    }
  }

  else if (query.toLowerCase().includes(" both a square and a cube:")) {
    const numbers = query.match(/\d+/g);

    if (numbers) {
      const squaresAndCubes = numbers.filter((num) => {
        const sqrt = Math.sqrt(parseInt(num));
        const cbrt = Math.cbrt(parseInt(num));
        if (Math.floor(sqrt) ** 2 === parseInt(num) && Math.floor(cbrt) ** 3 === parseInt(num)) {
          return true;
        }
        return false;
      });
      return squaresAndCubes.join(", ");
    }
  }

  return "";
}
