const playersController = require('../../../controllers/players')
const Player = require('../../../models/Player');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('players controller', () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('index', () => {
        test('it returns players with a 200 status code', async () => {
            let testPlayers = ['Roselyn', 'Natalie']
            jest.spyOn(Player, 'all', 'get')
                .mockResolvedValue(testPlayers);
            await playersController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(testPlayers);
        })
    });

    describe('show', () => {
        test('it returns a player with a 200 status code', async () => {
            jest.spyOn(Player, 'findById')
                .mockResolvedValue(new Player({ id: 1, name: 'Test Player', score: 5 }));

            const mockReq = { params: { id: 1 } }
            await playersController.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
        })
    });

    describe('create', () => {
        test('it returns a new player with a 201 status code', async () => {
            let testPlayer = {
                id: 1, player: 'Nat', score: 8
            }
            jest.spyOn(Player, 'create')
                .mockResolvedValue(new Player(testPlayer));
            const mockReq = { body: testPlayer }
            await playersController.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Player(testPlayer));
        })
    });

    describe('update', () => {
        test('it updates a player', async () => {
            let playerID = 1
            let testPlayer = {
                id: 1, player: 'Nat', score: 8
            }
            jest.spyOn(Player.prototype, 'update')
                .mockResolvedValue(testPlayer);
            const mockReq = { params: { id: playerID } }
            await playersController.update(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(500);
        })
    });

        describe('destroy', () => {
        test('it returns a 204 status code on successful deletion', async () => {
            jest.spyOn(Player.prototype, 'destroy')
                .mockResolvedValue('Deleted');
    
            const mockReq = { params: {id: 1} }
            await playersController.destroy(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(204);
        })
    });

})