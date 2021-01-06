class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async create(req, res) {
    const body = req.body;
    const name = body.name.toLowerCase();

    if (body && body.name && body.password) {
      try {
        await this.userService.create({ ...body, name });

        return res.sendStatus(200);
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    } else {
      return res.sendStatus(400);
    }
  }
}

module.exports = UserController;
