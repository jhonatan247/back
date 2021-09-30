import { getCategories } from '../services/category.services';
import { Request, Response } from 'express';

import { CReq } from '../interfaces/CReq';

class CategoryCtrl {
	public static getById (req: Request, res): void {
    try {
      const { id, level } = req.params;
      if(!id || !level)
        throw "The required data is incomplete.";
      console.log("LLEGA 1");
      const categories = getCategories(parseInt(id), level);
      console.log("LLEGA 2");
      return res.status(201).json(categories);
    } catch (error) {
      return res.status(400).json({
        message: "Not found 1."
      });
    }
	}
}

export default CategoryCtrl;