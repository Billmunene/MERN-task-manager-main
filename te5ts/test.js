

const request = require('supertest');
const express = require('express');
const app = express();
const taskRoutes = require('../routes/taskRoutes');

// Assuming you have exported the app from your main file
app.use('/api/tasks', taskRoutes);

describe('DELETE /api/tasks/:taskId', () => {
  it('should respond with a 200 status code when a valid taskId is provided', (done) => {
    // Simulating a DELETE request to the endpoint
    request(app)
      .delete('/api/tasks/validTaskId') // Providing a valid taskId
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
