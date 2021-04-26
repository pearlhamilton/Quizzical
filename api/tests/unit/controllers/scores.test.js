const scoresController = require('../../../controllers/scores')
const Score = require('../../../models/Score');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('scores controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('index', () => {
        test('it returns scores with a 200 status code', async () => {
            let testScore = [10, 10] //??????
            jest.spyOn(Score, 'all', 'get')
                 .mockResolvedValue(testScores);
            await scoresController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(testScores);
        })
    });
})