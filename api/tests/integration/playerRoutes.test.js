describe("players endpoints", () => {
    let api;
    beforeEach(async () => {
        await resetTestDB();
        console.log("reset");
    });

    beforeAll(async () => {
        api = app.listen(5000, () =>
            console.log("Test server running on port 5000")
        );
    });

    afterAll(async () => {
        console.log("Gracefully stopping test server");
        await api.close();
    });

    it("should retrieve all players", async () => {
        const res = await request(api).get("/players");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(2);
    });

    it("should create a new player", async () => {
        const res = await request(api).post("/players").send({
            name: "Roselyn",
            score: 1,
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("id");
        console.log(res);
    });

    it("should retrieve a player based on id", async () => {
        const res = await request(api).get("/player/6087e49084422b709335fa11"); //does id need to be set in the resetDB?
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual("Player 1");
    });

    it("should return status code 404 error if no player found", async () => {
        const res = await request(api).get("/player/123");
        expect(res.statusCode).toEqual(404);
    })
});
