const playersController = require('../../../controllers/players')
const Player = require('../../../models/Player}');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('players controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('show', () => {
        test('it returns a player with a 200 status code', async () => {
            jest.spyOn(Player, 'findById')
                .mockResolvedValue(new Player({ id: 1, name: 'Test Player', score: 5} ));
                
            const mockReq = { params: { id: 1 } }
            await playersController.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
        })
    });
    
})