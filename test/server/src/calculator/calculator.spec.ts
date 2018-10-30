import {expect} from 'chai';
import {Calculator} from '@red/server';

describe('server/calculator', () => {
    it('should add a + b', () => {
        const result = Calculator.add(1,2);
        expect(result).to.equal(3);
    })
})