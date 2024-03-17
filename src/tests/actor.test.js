const request = require('supertest');
const app =  require('../app');

let id;

test('GET /actors debe traer todos los actores', async () => { 
    const res = await request(app).get('/actors');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
 });

 test('POST /actors debe crear un actor', async () => {
    const body = {
        firstName: "junior",
        lastName: "beckham",
        nationality: "griego",
        image: "textext",
        birthday: 1333/8/13
    }
    const res = await request(app).post('/actors').send(body);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined(); 
    expect(res.body.name).toBe(body.name);
 });

test('PUT /actors/:id debe actualizar un actor', async () => { 
    const body = {
        firstName: "juniorh",
        lastName: "beckhamh",
        nationality: "griegoh",
        image: "textexth",
        birthday: 1333/8/10
    }
    const res = await request(app).put(`/actors/${id}`).send(body);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(body.name);
 });

 test('DELETE /actors/:id debe eliminar un actor', async () => { 
    const res = await request(app).delete(`/actors/${id}`);
    expect(res.status).toBe(204);
  });