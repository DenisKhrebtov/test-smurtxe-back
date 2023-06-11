const Idea = require("./schemas/ideas");

const getAllIdeas = async () => {
  return Idea.find();
};

const createIdea = ({ activity, type }) => {
  return Idea.create({ activity, type });
};

const updateIdea = (id, data) => {
  return Idea.findByIdAndUpdate({ _id: id }, data, { new: true });
};

const removeIdea = (id) => {
  return Idea.findByIdAndRemove({ _id: id });
};

module.exports = {
  getAllIdeas,
  createIdea,
  updateIdea,
  removeIdea,
};
