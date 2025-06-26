import { Request, Response } from 'express';
const login = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

export { login, getUser, updateUser };
