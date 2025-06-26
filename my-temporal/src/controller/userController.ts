import { Request, Response } from 'express';
import { Connection, Client } from '@temporalio/client';

export const login = async (req: Request, res: Response) => {
  try {
    const connection = await Connection.connect();
    const client = new Client({ connection });

    const result = await client.workflow.execute('loginWorkflow', {
      args: [req.body],
      taskQueue: 'user-profile-queue',
      workflowId: `login-${req.body.email}-${Date.now()}`,
    });

    res.json({ success: true, result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const connection = await Connection.connect();
    const client = new Client({ connection });

    const result = await client.workflow.execute('getUserWorkflow', {
      args: [req.params.email],
      taskQueue: 'user-profile-queue',
      workflowId: `get-${req.params.email}-${Date.now()}`,
    });

    res.json({ success: true, result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Get user failed' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const connection = await Connection.connect();
    const client = new Client({ connection });

    const profile = { ...req.body, email: req.params.email };

    const result = await client.workflow.execute('updateUserWorkflow', {
      args: [profile],
      taskQueue: 'user-profile-queue',
      workflowId: `update-${profile.email}-${Date.now()}`,
    });

    res.json({ success: true, result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Update failed' });
  }
};
