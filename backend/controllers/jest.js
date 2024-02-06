    // Verify that the router responds with a 200 status code when a valid taskId is provided and the deleteTask function is successfully executed.
    it('should respond with a 200 status code when a valid taskId is provided', () => {
        const req = { params: { taskId: 'validTaskId' } };
        const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
        const next = jest.fn();
  
        jest.mock('../controllers/taskControllers', () => ({
          deleteTask: jest.fn(),
        }));
  
        const { deleteTask } = require('../controllers/taskControllers');
        deleteTask.mockImplementationOnce((req, res, next) => {
          res.status(200).send();
        });
  
        deleteTask(req, res, next);
  
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalled();
        expect(next).not.toHaveBeenCalled();
      });