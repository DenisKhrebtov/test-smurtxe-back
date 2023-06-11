const service = require("../service");

const getAll = async (_, res, next) => {
  try {
    const results = await service.getAllIdeas();
    res.json({
      status: "success",
      code: 200,
      data: {
        ideas: results,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const add = async (req, res, next) => {
  const { activity, type } = req.body;
  try {
    const result = await service.createIdea({ activity, type });

    res.status(201).json({
      status: "success",
      code: 201,
      data: { ideas: result },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { activity, type } = req.body;
  try {
    const result = await service.updateIdea(id, { activity, type });
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: { ideas: result },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found idea id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const updateStatus = async (req, res, next) => {
  const { id } = req.params;
  const { isDone = false } = req.body;

  try {
    const result = await service.updateIdea(id, { isDone });
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: { idea: result },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found idea id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await service.removeIdea(id);
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: { idea: result },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found idea id: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = {
  getAll,
  add,
  update,
  updateStatus,
  remove,
};
