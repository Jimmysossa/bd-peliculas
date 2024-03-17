const request = require('supertest');
const app =  require('../app');
const Genre = require('../models/Genre');
const Director = require('../models/Director');
const Actor = require('../models/Actor');

let id;

test('GET /movies debe traer todos las peliculas', async () => { 
    const res = await request(app).get('/movies');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
 });

 test('POST /movies debe crear una pelicula', async () => {
    const body = {
        name: "la pulga",
        image: "trextext",
        synopsis: "loremipsun",
        releaseYear: 1999
    }
    const res = await request(app).post('/movies').send(body);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined(); 
    expect(res.body.name).toBe(body.name);
 });

test('PUT /movies/:id debe actualizar una pelicula', async () => { 
    const body = {
        name: "las pulgas",
        image: "textextos",
        synopsis: "loremipsunysfun",
        releaseYear: 1992
    }
    const res = await request(app).put(`/movies/${id}`).send(body);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(body.name);
 });
 
   test('POST /movies/:id/genres debe insertar los generos de una pelicula', async () => { 
     const genre = await Genre.create({ name: "cine"});
     const res = await request(app).post(`/movies/${id}/genres`).send([genre.id]);
     await genre.destroy;
     expect(res.status).toBe(200);
     expect(res.body).toBeInstanceOf(Array);
     expect(res.body.length).toBe(1);
    });

   test('POST /movies/:id/directors debe insertar un director a la pelicula', async () => { 
    const director = await Director.create({ 
        firstName: "juniorh",
        lastName: "beckhamh",
        nationality: "griegoh",
        image: "textexth",
        birthday: 1333/8/10
    });
    const res = await request(app).post(`/movies/${id}/directors`).send([director.id]);
    await director.destroy;
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBe(1);
   });
    
   test('POST /movies/:id/actors debe insertar los artistas de una pelicula', async () => { 
    const actor = await Actor.create({
        firstName: "juniorh",
        lastName: "beckhamh",
        nationality: "griegoh",
        image: "textexth",
        birthday: 1333/8/10
    });
    const res = await request(app).post(`/movies/${id}/actors`).send([actor.id]);
    await actor.destroy;
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBe(1);
   });

 test('DELETE /movies/:id debe eliminar una pelicula', async () => { 
    const res = await request(app).delete(`/movies/${id}`);
    expect(res.status).toBe(204);
  });