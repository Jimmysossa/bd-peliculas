const request = require('supertest');
const app =  require('../app');

let id;

test('GET /directors debe traer todos los directores', async () => { 
    const res = await request(app).get('/directors');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
 });

 test('POST /directors debe crear un director', async () => {
    const body = {
        firstName: "junior",
        lastName: "beckham",
        nationality: "griego",
        image: "textext",
        birthday: 1333/8/13
    }
    const res = await request(app).post('/directors').send(body);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined(); 
    expect(res.body.name).toBe(body.name);
 });

test('PUT /directors/:id debe actualizar un adirector', async () => { 
    const body = {
        firstName: "juniorh",
        lastName: "beckhamh",
        nationality: "griegoh",
        image: "textexth",
        birthday: 1333/8/10
    }
    const res = await request(app).put(`/directors/${id}`).send(body);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(body.name);
 });

 test('DELETE /directors/:id debe eliminar un adirector', async () => { 
    const res = await request(app).delete(`/directors/${id}`);
    expect(res.status).toBe(204);
  });