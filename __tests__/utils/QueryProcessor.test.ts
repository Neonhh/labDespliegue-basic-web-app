import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: Deberías actualizar la prueba a continuación después de añadir tu USB ID
    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"1810796"
    	));
    });

    test('should return my name', () => {
        const query = "what's your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"Nestor"
    	));
    });

    test('should return the sum of two numbers', () => {
            const query = "what is 52 plus 28?";
            const response: string = QueryProcessor(query);
            expect(response).toBe("80");
        });
    
    test('should return the max of three numbers', () => {
            const query = "what is the max of 52, 28 and 100?";
            const response: string = QueryProcessor(query);
            expect(response).toBe("100");
        });
    
    test('should return the product of two numbers', () => {
            const query = "what is 5 multiplied by 10?";
            const response: string = QueryProcessor(query);
            expect(response).toBe("50");
        });
    
    test('should return the numbers that are primes', () => {
            const query = "Which of the following numbers are primes: 99, 16, 3, 6, 11?";
            const response: string = QueryProcessor(query);
            console.log(response);
            expect(response).toBe("3, 11");
        });
});