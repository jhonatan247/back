import { Request } from 'express';

export interface CReq extends Request {
	id: number;
  level: number;
}