const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {

    const daniel = await prisma.user.create({
      data: {
        name: 'Daniel Eduardo',
        email: 'daniel@prueba.es'
      }
    });

    const eduardo = await prisma.user.create({
      data: {
        name: 'Eduardo Daniel',
        email: 'eduardo@prueba.es'
      }
    });

    const post1 = await prisma.post.create({
      data: {
        title: 'Post 1',
        content: 'Contenido del post 1',
        keywords: 'palabras clave del post 1',
        authorId: daniel.id
      }
    })

    const post2 = await prisma.post.create({
      data: {
        title: 'Post 2',
        content: 'Contenido del post 2',
        keywords: 'palabras clave del post 2',
        authorId: eduardo.id
      }
    })

    await prisma.post.create({
      data: {
        title: 'Post 3',
        content: 'Contenido del post 3',
        keywords: 'palabras clave del post 3',
        authorId: daniel.id
      }
    })

    await prisma.post.create({
      data: {
        title: 'Post 4',
        content: 'Contenido del post 4',
        keywords: 'palabras clave del post 4',
        authorId: daniel.id
      }
    })
    await prisma.post.create({
      data: {
        title: 'Post 5',
        content: 'Contenido del post 5',
        keywords: 'palabras clave del post 5',
        authorId: daniel.id
      }
    })
    await prisma.post.create({
      data: {
        title: 'Post 6',
        content: 'Contenido del post 6',
        keywords: 'palabras clave del post 6',
        authorId: daniel.id
      }
    })


    await prisma.comment.create({
      data: {
        content: 'Comentario 1',
        postId: post1.id,
        authorId: daniel.id
      }
    })

    await prisma.comment.create({
      data: {
        content: 'Comentario 2',
        postId: post2.id,
        authorId: eduardo.id
      }
    })



  } catch (e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
})();