import { getCategories } from '../services/category.services';
import { Request } from 'express';

class CategoryCtrl {
	public static getChildren (req: Request, res: Record<string, any>): void {
    try {
      const { id, level } = req.params;

      if(!id || !level)
        throw "The required data is incomplete.";

      const categories = getCategories(req, parseInt(id), parseInt(level) + 1);
      return res.status(201).json(categories);
    } catch (error) {
      return res.status(400).json({
        message: "Not found."
      });
    }
	}
}

export default CategoryCtrl;