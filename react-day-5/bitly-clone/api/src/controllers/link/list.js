import { where } from "sequelize";
import Slug from "../../model/slug";
import { parseMessage } from "../../utils/helper";

const listAll = async (req, res) => {
  try {
    const userId = req.user;
    const slugs = await Slug.findAll({
      where: {
        created_by: userId,
      },
    });
    const length = slugs.length;
    res.status(200).json(parseMessage(`${length} link(s) retrieved`, slugs));
    return;
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
    return;
  }
};

export default listAll;
