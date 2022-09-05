
# REST API PRUEBA



## Iniciar Proyecto



### Instalaciones
```bash
  yarn
```

### DATABASE_URL
```
mysql://root:password@localhost:3306/dledezma
```

### Migrate
```bash
    yarn prisma generate
    yarn prisma migrate dev 
    yarn prisma db seed
```




### DEV

```bash
yarn dev
  
```

### BUILD

```bash
yarn build
  
```
### START

```bash
yarn start
  
```

## [Endpoints](openapi.yml)
| Metodo | Endpoint | Descripción |
| -------- | ----------- | ----------- |
| GET | `/posts` | Obtiene 5 posts |
| GET | `/post/:id/comments` | Obtiene los comentarios del post pasado por id |
| POST | `/:id/comments` | Crea un comentario en un post |
| POST | `/user/` | Crea un usuario |

